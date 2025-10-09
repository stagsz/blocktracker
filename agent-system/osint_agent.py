"""
OSINT Intelligence Agent System
Multi-agent research and blog post generation system
"""

import os
import json
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional
from dotenv import load_dotenv

from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool, ScrapeWebsiteTool
from langchain_anthropic import ChatAnthropic
from langchain_openai import ChatOpenAI

# Load environment variables
load_dotenv()

class OSINTAgentSystem:
    """Main orchestrator for the OSINT agent system"""
    
    def __init__(self, config_path: Optional[str] = None):
        self.config = self._load_config(config_path)
        self.llm = self._initialize_llm()
        self.output_dir = Path("output")
        self.output_dir.mkdir(exist_ok=True)
        
        # Initialize tools
        self.search_tool = SerperDevTool()
        self.scrape_tool = ScrapeWebsiteTool()
        
    def _load_config(self, config_path: Optional[str]) -> Dict:
        """Load configuration from file or environment"""
        default_config = {
            "llm_provider": os.getenv("DEFAULT_LLM", "claude-sonnet-4-5-20250929"),
            "max_search_results": int(os.getenv("MAX_SEARCH_RESULTS", 10)),
            "research_depth": int(os.getenv("RESEARCH_DEPTH", 3)),
            "output_format": os.getenv("OUTPUT_FORMAT", "markdown"),
            "blog_length": os.getenv("BLOG_POST_LENGTH", "medium"),
        }
        
        if config_path and Path(config_path).exists():
            with open(config_path) as f:
                custom_config = json.load(f)
                default_config.update(custom_config)
        
        return default_config
    
    def _initialize_llm(self):
        """Initialize the LLM based on configuration"""
        llm_name = self.config["llm_provider"]
        
        if "claude" in llm_name.lower():
            return ChatAnthropic(
                model=llm_name,
                temperature=0.3,
                max_tokens=4096
            )
        elif "gpt" in llm_name.lower():
            return ChatOpenAI(
                model=llm_name,
                temperature=0.3
            )
        else:
            raise ValueError(f"Unsupported LLM: {llm_name}")
    
    def create_agents(self) -> Dict[str, Agent]:
        """Create specialized OSINT agents"""
        
        # 1. Research Coordinator
        coordinator = Agent(
            role='OSINT Research Coordinator',
            goal='Analyze intelligence prompts and create comprehensive research strategies',
            backstory="""You are an expert OSINT coordinator with 15 years of experience
            in intelligence analysis. You excel at breaking down complex intelligence 
            requirements into actionable research tasks.""",
            llm=self.llm,
            verbose=True,
            allow_delegation=True
        )
        
        # 2. OSINT Researcher
        researcher = Agent(
            role='OSINT Field Researcher',
            goal='Execute thorough open-source intelligence research using multiple sources',
            backstory="""You are a skilled OSINT researcher specialized in finding and 
            validating information from open sources. You have expertise in advanced search 
            techniques, source verification, and data correlation.""",
            tools=[self.search_tool, self.scrape_tool],
            llm=self.llm,
            verbose=True,
            allow_delegation=False
        )
        
        # 3. Intelligence Analyst
        analyst = Agent(
            role='Intelligence Analyst',
            goal='Synthesize research findings into actionable intelligence',
            backstory="""You are a senior intelligence analyst with experience in pattern 
            recognition, threat assessment, and intelligence synthesis. You excel at 
            connecting disparate pieces of information into coherent intelligence products.""",
            llm=self.llm,
            verbose=True,
            allow_delegation=False
        )
        
        # 4. Content Writer
        writer = Agent(
            role='Intelligence Report Writer',
            goal='Transform intelligence analysis into professional blog posts',
            backstory="""You are an expert intelligence writer who specializes in creating 
            clear, engaging, and well-sourced intelligence reports and blog posts. You know 
            how to present complex information in an accessible format.""",
            llm=self.llm,
            verbose=True,
            allow_delegation=False
        )
        
        return {
            'coordinator': coordinator,
            'researcher': researcher,
            'analyst': analyst,
            'writer': writer
        }
    
    def create_tasks(self, agents: Dict[str, Agent], prompt_data: Dict) -> List[Task]:
        """Create sequential tasks for the research workflow"""
        
        # Task 1: Research Planning
        planning_task = Task(
            description=f"""Analyze this OSINT prompt and create a detailed research plan:
            
            Target: {prompt_data.get('target', 'Not specified')}
            Objective: {prompt_data.get('objective', 'Not specified')}
            Context: {prompt_data.get('context', 'Not specified')}
            
            Create a research plan that includes:
            1. Key search queries to execute
            2. Primary sources to investigate
            3. Information validation requirements
            4. Expected deliverables
            """,
            agent=agents['coordinator'],
            expected_output="A detailed research plan with search queries and source priorities"
        )
        
        # Task 2: Research Execution
        research_task = Task(
            description="""Execute the research plan by:
            1. Conducting comprehensive web searches
            2. Gathering information from identified sources
            3. Validating information credibility
            4. Documenting all sources with URLs
            5. Organizing findings by topic and relevance
            
            Provide detailed research findings with proper citations.
            """,
            agent=agents['researcher'],
            expected_output="Comprehensive research findings with source citations",
            context=[planning_task]
        )
        
        # Task 3: Intelligence Analysis
        analysis_task = Task(
            description="""Analyze the research findings to:
            1. Identify key patterns and insights
            2. Assess credibility and significance of findings
            3. Highlight critical intelligence points
            4. Note any information gaps or contradictions
            5. Provide strategic recommendations
            
            Create a structured intelligence assessment.
            """,
            agent=agents['analyst'],
            expected_output="Structured intelligence analysis with key findings and recommendations",
            context=[research_task]
        )
        
        # Task 4: Blog Post Creation
        writing_task = Task(
            description=f"""Create a professional blog post based on the intelligence analysis:
            
            Requirements:
            - Length: {self.config['blog_length']}
            - Format: {self.config['output_format']}
            - Include: Executive summary, detailed findings, analysis, conclusion
            - Style: Professional intelligence reporting
            - Citations: Include all source URLs
            - Structure: Clear headings and sections
            
            The blog post should be informative, well-sourced, and engaging.
            """,
            agent=agents['writer'],
            expected_output="Complete blog post in markdown format with proper citations",
            context=[analysis_task]
        )
        
        return [planning_task, research_task, analysis_task, writing_task]
    
    def execute_research(self, prompt_file: str) -> Dict:
        """Execute the full research workflow"""
        # Load prompt
        with open(prompt_file) as f:
            prompt_data = json.load(f)
        
        # Create agents and tasks
        agents = self.create_agents()
        tasks = self.create_tasks(agents, prompt_data)
        
        # Create crew
        crew = Crew(
            agents=list(agents.values()),
            tasks=tasks,
            process=Process.sequential,
            verbose=True
        )
        
        # Execute
        print(f"Starting OSINT research workflow...")
        result = crew.kickoff()
        
        # Save output
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_file = self.output_dir / f"blog_post_{timestamp}.md"
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(result)
        
        # Save metadata
        metadata = {
            "timestamp": timestamp,
            "prompt": prompt_data,
            "output_file": str(output_file),
            "config": self.config
        }
        
        metadata_file = self.output_dir / f"metadata_{timestamp}.json"
        with open(metadata_file, 'w', encoding='utf-8') as f:
            json.dump(metadata, f, indent=2)
        
        print(f"\n✅ Research complete!")
        print(f"📄 Blog post: {output_file}")
        print(f"📋 Metadata: {metadata_file}")
        
        return {
            "blog_post": str(output_file),
            "metadata": str(metadata_file),
            "result": result
        }


def main():
    """Main entry point"""
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python osint_agent.py <prompt_file.json>")
        sys.exit(1)
    
    prompt_file = sys.argv[1]
    
    if not Path(prompt_file).exists():
        print(f"Error: Prompt file not found: {prompt_file}")
        sys.exit(1)
    
    # Initialize and run
    system = OSINTAgentSystem()
    result = system.execute_research(prompt_file)
    
    print("\n" + "="*50)
    print("OSINT Research Complete!")
    print("="*50)


if __name__ == "__main__":
    main()
