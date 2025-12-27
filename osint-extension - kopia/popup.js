    // Intelligence Types Contract
    const INTELLIGENCE_TYPES = [
  {
    "id": "person-investigation",
    "name": "Person Investigation",
    "description": "Deep-dive into an individual's background, connections, and online presence",
    "discoveryAreas": ["social-media", "employment-history", "education", "criminal-records", "financial-records", "family-connections"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {}
  },
  {
    "id": "company-research",
    "name": "Company Research",
    "description": "Analyze corporate structure, financial health, key personnel, and reputation",
    "discoveryAreas": ["corporate-structure", "financial-health", "key-personnel", "reputation", "regulatory-compliance", "market-position"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {
      "additionalSections": ["Competitive Landscape"]
    }
  },
  {
    "id": "location-analysis",
    "name": "Location Analysis",
    "description": "Investigate geographic area, demographics, infrastructure, and activity patterns",
    "discoveryAreas": ["demographics", "infrastructure", "economic-indicators", "safety-crime", "points-of-interest", "historical-events"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {}
  },
   {
    "id": "recruitment-intelligence",
    "name": "Recruitment Intelligence",
    "description": "Analyze hiring patterns, skill demands, organizational growth, and talent acquisition strategies",
    "discoveryAreas": ["job-postings", "skill-requirements", "compensation-analysis", "hiring-volume", "organizational-structure", "cultural-indicators"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {
      "additionalSections": ["Growth Trajectory", "Skill Gap Analysis", "Market Positioning"]
    }
  },
  {
    "id": "energy-sector-analysis", 
    "name": "Energy Sector Analysis",
    "description": "Investigate energy companies, infrastructure, regulatory compliance, and environmental impact",
    "discoveryAreas": ["infrastructure-mapping", "environmental-impact", "regulatory-filings", "production-data", "supply-contracts"],
    "industry": "energy",
    "promptTemplate": "ENERGY_TEMPLATE"
  },
  {
    "id": "technology-profiling",
    "name": "Technology Profiling",
    "description": "Assess technology stack, digital footprint, and technical capabilities",
    "discoveryAreas": ["tech-stack", "digital-infrastructure", "code-repositories", "security-posture", "patents-publications"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {}
  },
  {
    "id": "market-intelligence",
    "name": "Market Intelligence",
    "description": "Gather competitive insights, market trends, and industry analysis",
    "discoveryAreas": ["market-trends", "competitor-analysis", "customer-sentiment", "pricing-strategies", "regulatory-landscape"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {
      "additionalSections": ["Market Opportunities", "Threats"]
    }
  },
  {
  "id": "trend-analysis",
  "name": "Trend Analysis",
  "description": "Identify emerging patterns, predict future developments, and analyze temporal changes",
  "discoveryAreas": ["historical-patterns", "emerging-signals", "sentiment-trends", "volume-analysis", "predictive-indicators"],
  "timeframe_focus": "predictive",
  "promptTemplate": "TREND_TEMPLATE",
  "reportStructureOverrides": {
    "additionalSections": ["Trend Projection", "Leading Indicators", "Scenario Planning"]
  }
  },
  {
  "id": "ai-system-analysis",
  "name": "AI System Analysis", 
  "description": "Analyze AI models, training data, algorithmic bias, and automated decision systems",
  "discoveryAreas": ["model-architecture", "training-datasets", "bias-assessment", "performance-metrics", "ethical-compliance"],
  "promptTemplate": "AI_TEMPLATE",
  "reportStructureOverrides": {
    "additionalSections": ["Model Evaluation", "Bias Analysis", "Ethical Assessment"]
  }
  },
  {
  "id": "cross-platform-investigation",
  "name": "Cross-Platform Investigation",
  "description": "Correlate information across multiple platforms and data sources for comprehensive analysis",
  "discoveryAreas": ["platform-correlation", "identity-linkage", "temporal-synchronization", "source-validation", "pattern-matching"],
  "complexity": "high",
  "requiredSources": ["minimum_3_platforms"],
  "promptTemplate": "FUSION_TEMPLATE"
  },
  {
    "id": "reputation-analysis",
    "name": "Reputation Analysis",
    "description": "Evaluate public perception, media coverage, and stakeholder sentiment",
    "discoveryAreas": ["media-coverage", "social-sentiment", "reviews-ratings", "controversies", "brand-associations"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {}
  },
  {
    "id": "event-investigation",
    "name": "Event Investigation",
    "description": "Reconstruct timeline, participants, and context of specific events",
    "discoveryAreas": ["timeline-reconstruction", "participants", "location-context", "media-reports", "witness-accounts"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {
      "additionalSections": ["Chronological Timeline"]
    }
  },
  {
    "id": "digital-forensics",
    "name": "Digital Forensics",
    "description": "Analyze digital artifacts, metadata, and evidence trails from files, communications, and devices",
    "discoveryAreas": ["file-metadata", "communication-traces", "device-fingerprints", "network-artifacts", "deleted-data-recovery"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {
      "additionalSections": ["Chain of Custody", "Technical Analysis", "Evidence Integrity"]
    }
  },
  {
    "id": "supply-chain-analysis",
    "name": "Supply Chain Analysis", 
    "description": "Map supplier networks, identify dependencies, and assess supply chain security risks",
    "discoveryAreas": ["supplier-mapping", "dependency-analysis", "logistics-tracking", "vendor-relationships", "risk-assessment"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {
      "additionalSections": ["Risk Matrix", "Alternative Sources", "Continuity Planning"]
    }
  },
{
  "id": "financial-investigation",
  "name": "Financial Investigation",
  "description": "Trace financial flows, identify suspicious transactions, and map economic relationships",
  "discoveryAreas": ["transaction-analysis", "asset-tracing", "beneficial-ownership", "sanctions-screening", "cryptocurrency-tracking"],
  "promptTemplate": "BASE_TEMPLATE", 
  "reportStructureOverrides": {
    "additionalSections": ["Financial Timeline", "Risk Indicators", "Compliance Assessment"]
  }
},
{
    "id": "geopolitical-analysis",
    "name": "Geopolitical Analysis",
    "description": "Assess political stability, international relations, regional security dynamics, and governmental influence",
    "discoveryAreas": ["political-stability", "diplomatic-relations", "military-presence", "economic-sanctions", "border-security", "governance-structure"],
    "geographic_scope": ["country", "region", "international"],
    "promptTemplate": "BASE_TEMPLATE",
    "reportStructureOverrides": {
      "additionalSections": ["Political Risk Assessment", "Regional Dynamics", "Stakeholder Mapping", "Conflict Indicators"]
    }
  }
];
        // Discovery Areas Contract
        const DISCOVERY_AREAS = [
      {
        "id": "social-media",
        "name": "Social Media Presence",
        "description": "Profiles, posts, connections on Facebook, Twitter, LinkedIn, Instagram, etc.",
        "applicableTypes": ["person-investigation", "reputation-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "employment-history",
        "name": "Employment History",
        "description": "Past and current employers, job titles, career progression",
        "applicableTypes": ["person-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "job-postings",
        "name": "Job Postings & Recruitment",
        "description": "Active job listings, hiring patterns, required skills, compensation ranges",
        "applicableTypes": ["company-research", "market-intelligence", "technology-profiling", "recruitment-intelligence"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "skill-requirements",
        "name": "Skill Requirements & Technology Stack",
        "description": "Required skills, technologies, certifications mentioned in job postings",
        "applicableTypes": ["recruitment-intelligence", "technology-profiling", "market-intelligence"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "compensation-analysis",
        "name": "Compensation & Benefits",
        "description": "Salary ranges, benefits packages, equity offerings, perks mentioned",
        "applicableTypes": ["recruitment-intelligence", "company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "hiring-volume",
        "name": "Hiring Volume & Patterns",
        "description": "Number of openings, hiring frequency, urgency indicators, growth signals",
        "applicableTypes": ["recruitment-intelligence", "company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "organizational-structure",
        "name": "Organizational Structure",
        "description": "Team hierarchies, department sizes, reporting structures revealed in job postings",
        "applicableTypes": ["recruitment-intelligence", "company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "cultural-indicators",
        "name": "Company Culture Signals",
        "description": "Values, work environment, team structure, management style clues",
        "applicableTypes": ["recruitment-intelligence", "reputation-analysis"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "education",
        "name": "Education Background",
        "description": "Schools attended, degrees earned, certifications",
        "applicableTypes": ["person-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "criminal-records",
        "name": "Criminal Records",
        "description": "Arrests, convictions, court cases, legal history",
        "applicableTypes": ["person-investigation"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "financial-records",
        "name": "Financial Records",
        "description": "Property ownership, bankruptcies, liens, business registrations",
        "applicableTypes": ["person-investigation", "company-research", "financial-investigation"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "family-connections",
        "name": "Family & Personal Connections",
        "description": "Relatives, associates, known relationships",
        "applicableTypes": ["person-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "corporate-structure",
        "name": "Corporate Structure",
        "description": "Subsidiaries, parent companies, ownership hierarchy",
        "applicableTypes": ["company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "financial-health",
        "name": "Financial Health",
        "description": "Revenue, profitability, debt, credit ratings",
        "applicableTypes": ["company-research", "market-intelligence"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "key-personnel",
        "name": "Key Personnel",
        "description": "Executives, board members, key employees",
        "applicableTypes": ["company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "reputation",
        "name": "Company Reputation",
        "description": "Reviews, ratings, customer complaints, industry standing",
        "applicableTypes": ["company-research", "reputation-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "regulatory-compliance",
        "name": "Regulatory Compliance",
        "description": "Licenses, permits, violations, regulatory filings",
        "applicableTypes": ["company-research", "market-intelligence"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "market-position",
        "name": "Market Position",
        "description": "Market share, competitive ranking, industry leadership",
        "applicableTypes": ["company-research", "market-intelligence"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "demographics",
        "name": "Demographics",
        "description": "Population size, age distribution, income levels, diversity",
        "applicableTypes": ["location-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "infrastructure",
        "name": "Infrastructure",
        "description": "Transportation, utilities, public services, connectivity",
        "applicableTypes": ["location-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "infrastructure-mapping",
        "name": "Infrastructure Mapping",
        "description": "Physical facilities, pipelines, power plants, distribution networks",
        "applicableTypes": ["energy-sector-analysis", "location-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "environmental-impact",
        "name": "Environmental Impact",
        "description": "Environmental assessments, emissions data, sustainability reports",
        "applicableTypes": ["energy-sector-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "regulatory-filings",
        "name": "Regulatory Filings",
        "description": "Government submissions, compliance reports, permit applications",
        "applicableTypes": ["energy-sector-analysis", "company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "production-data",
        "name": "Production Data",
        "description": "Output volumes, capacity utilization, performance metrics",
        "applicableTypes": ["energy-sector-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "supply-contracts",
        "name": "Supply Contracts",
        "description": "Supplier agreements, procurement patterns, vendor relationships",
        "applicableTypes": ["energy-sector-analysis", "supply-chain-analysis"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "economic-indicators",
        "name": "Economic Indicators",
        "description": "Employment rates, business growth, real estate trends",
        "applicableTypes": ["location-analysis", "market-intelligence"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "safety-crime",
        "name": "Safety & Crime Statistics",
        "description": "Crime rates, law enforcement presence, safety rankings",
        "applicableTypes": ["location-analysis"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "points-of-interest",
        "name": "Points of Interest",
        "description": "Landmarks, businesses, institutions, notable locations",
        "applicableTypes": ["location-analysis"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "historical-events",
        "name": "Historical Events",
        "description": "Significant past events, development history",
        "applicableTypes": ["location-analysis", "event-investigation"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "historical-patterns",
        "name": "Historical Patterns",
        "description": "Long-term trends, cyclical behaviors, seasonal variations",
        "applicableTypes": ["trend-analysis", "market-intelligence"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "emerging-signals",
        "name": "Emerging Signals",
        "description": "Early indicators, weak signals, novel developments",
        "applicableTypes": ["trend-analysis", "market-intelligence"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "sentiment-trends",
        "name": "Sentiment Trends",
        "description": "Opinion shifts, sentiment analysis over time, mood indicators",
        "applicableTypes": ["trend-analysis", "reputation-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "volume-analysis",
        "name": "Volume Analysis",
        "description": "Activity levels, posting frequency, engagement metrics over time",
        "applicableTypes": ["trend-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "predictive-indicators",
        "name": "Predictive Indicators",
        "description": "Leading indicators, correlation patterns, forecasting signals",
        "applicableTypes": ["trend-analysis"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "model-architecture",
        "name": "Model Architecture",
        "description": "AI model design, neural network structures, algorithmic approaches",
        "applicableTypes": ["ai-system-analysis", "technology-profiling"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "training-datasets",
        "name": "Training Datasets",
        "description": "Data sources used for training, dataset characteristics, data quality",
        "applicableTypes": ["ai-system-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "bias-assessment",
        "name": "Bias Assessment",
        "description": "Algorithmic bias, fairness metrics, discrimination potential",
        "applicableTypes": ["ai-system-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "performance-metrics",
        "name": "Performance Metrics",
        "description": "Accuracy rates, benchmark results, performance evaluations",
        "applicableTypes": ["ai-system-analysis", "technology-profiling"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "ethical-compliance",
        "name": "Ethical Compliance",
        "description": "AI ethics frameworks, responsible AI practices, governance",
        "applicableTypes": ["ai-system-analysis"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "platform-correlation",
        "name": "Platform Correlation",
        "description": "Cross-platform identity matching, account linkage, activity correlation",
        "applicableTypes": ["cross-platform-investigation", "person-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "identity-linkage",
        "name": "Identity Linkage",
        "description": "Username patterns, profile similarities, behavioral fingerprints",
        "applicableTypes": ["cross-platform-investigation", "person-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "temporal-synchronization",
        "name": "Temporal Synchronization",
        "description": "Timeline correlation across platforms, synchronized activities",
        "applicableTypes": ["cross-platform-investigation", "event-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "source-validation",
        "name": "Source Validation",
        "description": "Cross-reference verification, source credibility assessment",
        "applicableTypes": ["cross-platform-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "pattern-matching",
        "name": "Pattern Matching",
        "description": "Behavioral patterns, communication styles, activity signatures",
        "applicableTypes": ["cross-platform-investigation", "person-investigation"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "tech-stack",
        "name": "Technology Stack",
        "description": "Languages, frameworks, platforms, tools used",
        "applicableTypes": ["technology-profiling"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "digital-infrastructure",
        "name": "Digital Infrastructure",
        "description": "Servers, cloud services, DNS, hosting",
        "applicableTypes": ["technology-profiling"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "code-repositories",
        "name": "Code Repositories",
        "description": "GitHub, GitLab, open-source projects",
        "applicableTypes": ["technology-profiling"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "security-posture",
        "name": "Security Posture",
        "description": "SSL/TLS, security headers, vulnerability reports",
        "applicableTypes": ["technology-profiling"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "patents-publications",
        "name": "Patents & Publications",
        "description": "Intellectual property, research papers, technical blogs",
        "applicableTypes": ["technology-profiling"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "market-trends",
        "name": "Market Trends",
        "description": "Industry direction, emerging opportunities, shifts",
        "applicableTypes": ["market-intelligence"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "competitor-analysis",
        "name": "Competitor Analysis",
        "description": "Competitive positioning, strengths, weaknesses",
        "applicableTypes": ["market-intelligence"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "customer-sentiment",
        "name": "Customer Sentiment",
        "description": "Reviews, feedback, satisfaction scores",
        "applicableTypes": ["market-intelligence", "reputation-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "pricing-strategies",
        "name": "Pricing Strategies",
        "description": "Pricing models, competitor pricing, value proposition",
        "applicableTypes": ["market-intelligence"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "regulatory-landscape",
        "name": "Regulatory Landscape",
        "description": "Industry regulations, compliance requirements",
        "applicableTypes": ["market-intelligence"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "media-coverage",
        "name": "Media Coverage",
        "description": "News articles, press releases, media mentions",
        "applicableTypes": ["reputation-analysis", "event-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "social-sentiment",
        "name": "Social Media Sentiment",
        "description": "Public opinion, trending topics, sentiment analysis",
        "applicableTypes": ["reputation-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "reviews-ratings",
        "name": "Reviews & Ratings",
        "description": "Customer reviews, ratings, testimonials",
        "applicableTypes": ["reputation-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "controversies",
        "name": "Controversies",
        "description": "Scandals, disputes, negative publicity",
        "applicableTypes": ["reputation-analysis"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "brand-associations",
        "name": "Brand Associations",
        "description": "Partnerships, sponsorships, affiliated brands",
        "applicableTypes": ["reputation-analysis"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "timeline-reconstruction",
        "name": "Timeline Reconstruction",
        "description": "Chronological sequence of events",
        "applicableTypes": ["event-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "participants",
        "name": "Event Participants",
        "description": "Individuals, organizations involved",
        "applicableTypes": ["event-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "location-context",
        "name": "Location Context",
        "description": "Where the event occurred, geographic significance",
        "applicableTypes": ["event-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "media-reports",
        "name": "Media Reports",
        "description": "News coverage, eyewitness accounts",
        "applicableTypes": ["event-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "witness-accounts",
        "name": "Witness Accounts",
        "description": "First-hand testimonies, statements",
        "applicableTypes": ["event-investigation"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "file-metadata",
        "name": "File Metadata",
        "description": "EXIF data, creation timestamps, authorship information",
        "applicableTypes": ["digital-forensics", "event-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "communication-traces",
        "name": "Communication Traces",
        "description": "Email headers, message routing, communication patterns",
        "applicableTypes": ["digital-forensics", "person-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "device-fingerprints",
        "name": "Device Fingerprints",
        "description": "Hardware signatures, browser fingerprints, device characteristics",
        "applicableTypes": ["digital-forensics", "technology-profiling"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "network-artifacts",
        "name": "Network Artifacts",
        "description": "IP addresses, network logs, connection patterns",
        "applicableTypes": ["digital-forensics", "technology-profiling"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "deleted-data-recovery",
        "name": "Deleted Data Recovery",
        "description": "Cached content, archived versions, recoverable information",
        "applicableTypes": ["digital-forensics"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "supplier-mapping",
        "name": "Supplier Mapping",
        "description": "Vendor networks, supplier hierarchies, dependency chains",
        "applicableTypes": ["supply-chain-analysis", "company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "dependency-analysis",
        "name": "Dependency Analysis",
        "description": "Critical dependencies, single points of failure, risk concentrations",
        "applicableTypes": ["supply-chain-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "logistics-tracking",
        "name": "Logistics Tracking",
        "description": "Shipping patterns, transportation routes, delivery networks",
        "applicableTypes": ["supply-chain-analysis", "location-analysis"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "vendor-relationships",
        "name": "Vendor Relationships",
        "description": "Supplier partnerships, contract terms, relationship quality",
        "applicableTypes": ["supply-chain-analysis", "company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "risk-assessment",
        "name": "Risk Assessment",
        "description": "Supply chain vulnerabilities, disruption risks, mitigation strategies",
        "applicableTypes": ["supply-chain-analysis"],
        "defaultEnabled": false,
        "isCustom": false
      },
      {
        "id": "transaction-analysis",
        "name": "Transaction Analysis",
        "description": "Financial flows, payment patterns, money movement tracking",
        "applicableTypes": ["financial-investigation", "person-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "asset-tracing",
        "name": "Asset Tracing",
        "description": "Property ownership, asset transfers, wealth accumulation",
        "applicableTypes": ["financial-investigation", "person-investigation"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "beneficial-ownership",
        "name": "Beneficial Ownership",
        "description": "Ultimate ownership structures, shell companies, hidden controllers",
        "applicableTypes": ["financial-investigation", "company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "sanctions-screening",
        "name": "Sanctions Screening",
        "description": "Sanctioned entities, restricted parties, compliance violations",
        "applicableTypes": ["financial-investigation", "company-research"],
        "defaultEnabled": true,
        "isCustom": false
      },
      {
        "id": "cryptocurrency-tracking",
        "name": "Cryptocurrency Tracking",
        "description": "Blockchain transactions, wallet addresses, crypto asset flows",
        "applicableTypes": ["financial-investigation"],
        "defaultEnabled": false,
        "isCustom": false
      },
        {
    "id": "political-stability",
    "name": "Political Stability",
    "description": "Government stability, election integrity, political transitions, regime legitimacy",
    "applicableTypes": ["geopolitical-analysis", "location-analysis"],
    "defaultEnabled": true,
    "isCustom": false
  },
  {
    "id": "diplomatic-relations",
    "name": "Diplomatic Relations",
    "description": "International partnerships, treaties, embassies, diplomatic incidents",
    "applicableTypes": ["geopolitical-analysis"],
    "defaultEnabled": true,
    "isCustom": false
  },
  {
    "id": "military-presence",
    "name": "Military Presence",
    "description": "Armed forces deployment, defense capabilities, military exercises, security apparatus",
    "applicableTypes": ["geopolitical-analysis", "location-analysis"],
    "defaultEnabled": true,
    "isCustom": false
  },
  {
    "id": "economic-sanctions",
    "name": "Economic Sanctions",
    "description": "Trade restrictions, financial sanctions, embargoes, international compliance",
    "applicableTypes": ["geopolitical-analysis", "financial-investigation"],
    "defaultEnabled": true,
    "isCustom": false
  },
  {
    "id": "border-security",
    "name": "Border Security",
    "description": "Border controls, migration patterns, customs enforcement, territorial disputes",
    "applicableTypes": ["geopolitical-analysis", "location-analysis"],
    "defaultEnabled": false,
    "isCustom": false
  },
  {
    "id": "governance-structure",
    "name": "Governance Structure",
    "description": "Government institutions, policy frameworks, regulatory systems, administrative capacity",
    "applicableTypes": ["geopolitical-analysis"],
    "defaultEnabled": true,
    "isCustom": false
  }
    ];
    // Prompt Templates Contract
    const PROMPT_TEMPLATES = {
  "baseTemplate": {
    "name": "OSINT 4-Phase Intelligence Report Template",
    "description": "Professional OSINT methodology template for all 8 intelligence types",
    "template": "# OSINT Intelligence Report: {INTELLIGENCE_TYPE}\n\n## Investigation Target\n**Subject**: {TARGET}\n**Timeframe**: {TIMEFRAME}\n**Analysis Type**: {INTELLIGENCE_TYPE}\n**Investigation Scope**: {DISCOVERY_AREAS}\n\n---\n\n## Phase 1: Discovery (Target Identification & Scoping)\n\nConduct comprehensive open-source research to identify and scope the investigation target. Focus on:\n\n{DISCOVERY_AREAS_DETAILED}\n\n**Objectives**:\n- Establish baseline understanding of the target\n- Identify key data sources and collection points\n- Define investigation boundaries and priorities\n\n---\n\n## Phase 2: Signals (Raw Data Collection)\n\nGather raw, unprocessed data from open sources. For each discovery area, collect:\n\n{DISCOVERY_AREAS_COLLECTION}\n\n**Collection Requirements**:\n{EVIDENCE_REQUIREMENTS}\n\n---\n\n## Phase 3: Insights (Analysis & Pattern Recognition)\n\nAnalyze collected data to identify patterns, connections, and significance. Provide:\n\n### Key Findings\n- **Finding 1**: [Description with confidence level: High/Medium/Low]\n- **Finding 2**: [Description with confidence level: High/Medium/Low]\n- **Finding 3**: [Description with confidence level: High/Medium/Low]\n\n### Pattern Analysis\n- Identify trends, anomalies, and correlations across data sources\n- Cross-reference information for validation and corroboration\n- Assess reliability and credibility of sources\n\n### Confidence Assessment\nFor each finding, assign:\n- **High Confidence**: Multiple credible sources, recent data, directly verified\n- **Medium Confidence**: Single credible source or older data, indirectly verified\n- **Low Confidence**: Unverified, single uncredible source, or speculative\n\n---\n\n## Phase 4: Receipts (Evidence Documentation)\n\nDocument all evidence with full attribution and verification status.\n\n### Evidence Log\n\nFor each piece of evidence, provide:\n\n1. **Source**: [URL, document name, or identifier]\n2. **Collection Timestamp**: [ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ]\n3. **Reliability Assessment**: [Verified/Likely/Unverified]\n4. **Corroboration Status**: [Confirmed by N sources / Standalone]\n5. **Content Summary**: [Brief description of what this evidence shows]\n\n---\n\n## Report Structure\n\n### Executive Summary\n(Minimum 500 words) Comprehensive overview of investigation, key findings, evidence summary, strategic analysis, and actionable recommendations.\n\n### Background\nContext and rationale for this intelligence investigation.\n\n### Findings\n(Organized by discovery area) Detailed results from each investigation dimension.\n\n### Analysis\nPatterns, insights, and intelligence value extracted from findings.\n\n### Recommendations\nActionable next steps based on intelligence gathered.\n\n### Sources\nComplete bibliography of all sources consulted.\n\n{REPORT_STRUCTURE_OVERRIDES}\n\n---\n\n## Quality Standards\n\n- **Factual Accuracy**: ≥90% of claims must be evidence-based\n- **Source Attribution**: Every claim must cite at least one source\n- **Confidence Scoring**: All assessments include High/Medium/Low confidence\n- **Structured Format**: Follow Background → Findings → Analysis → Recommendations\n- **Professional Tone**: Enterprise intelligence quality, objective and analytical\n\n---\n\n## Research Links & References
(NOTE: This section does NOT count toward the 500-word minimum for Executive Summary)

**Investigation Focus Areas with Reference Links:**
{DISCOVERY_AREAS_LINKS}

---

Generate a comprehensive OSINT intelligence report following this methodology with the following CRITICAL requirements:

1. Executive Summary: MINIMUM 500 words (links section excluded from count)
2. Ensure all evidence is properly attributed
3. Include confidence levels in all analytical conclusions
4. Add the Research Links section at the very end with links from each discovery area

WORD COUNT RULES: Count words only in Executive Summary, Background, Findings, Analysis, and Recommendations sections. Links & References section does NOT count toward any minimum word requirements.\n"
  },
  "evidenceRequirements": {
    "sourceURL": "Provide full URL or document identifier for every piece of information",
    "timestamp": "Include collection timestamp in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)",
    "confidenceLevel": "Assign High/Medium/Low confidence to all claims and findings",
    "corroboration": "Note if information is confirmed by multiple sources or standalone",
    "reliability": "Assess source credibility: Verified (official), Likely (reputable), Unverified (unconfirmed)"
  },
  "placeholders": {
    "{INTELLIGENCE_TYPE}": "Name of selected intelligence analysis type",
    "{TARGET}": "HTML-escaped target specification (name, entity, location)",
    "{TIMEFRAME}": "Human-readable timeframe (e.g., 'Last 6 months' or 'January 1, 2024 - June 30, 2024' or 'All time')",
    "{DISCOVERY_AREAS}": "Comma-separated list of enabled discovery areas",
    "{DISCOVERY_AREAS_DETAILED}": "Bulleted list with descriptions of each discovery area",
    "{DISCOVERY_AREAS_COLLECTION}": "Specific collection instructions per discovery area",
    "{EVIDENCE_REQUIREMENTS}": "Formatted evidence requirements (source, timestamp, confidence, corroboration)",
    "{DISCOVERY_AREAS_LINKS}": "Bulleted list of discovery areas with reference links (NOT counted in word minimums)",
    "{REPORT_STRUCTURE_OVERRIDES}": "Additional sections specific to intelligence type (e.g., 'Mitigation Strategies' for Threat Assessment)"
  },
  "truncationPriority": [
    {
      "section": "4-Phase OSINT Structure",
      "priority": 1,
      "action": "NEVER_TRUNCATE",
      "rationale": "Core methodology must remain intact"
    },
    {
      "section": "Intelligence Type Context",
      "priority": 2,
      "action": "NEVER_TRUNCATE",
      "rationale": "Defines investigation scope"
    },
    {
      "section": "Discovery Areas",
      "priority": 3,
      "action": "TRUNCATE_FROM_BOTTOM",
      "rationale": "Remove least important areas first"
    },
    {
      "section": "Evidence Requirements",
      "priority": 4,
      "action": "SUMMARIZE",
      "rationale": "Condense from detailed to concise"
    },
    {
      "section": "Examples",
      "priority": 5,
      "action": "REMOVE_FIRST",
      "rationale": "Optional, helpful but not critical"
    }
  ]
};

    /**
     * Model Classes - Entity Layer
     * T007-T011: IntelligenceType, DiscoveryArea, TargetSpecification, SavedTemplate, GeneratedPrompt
     */

    // T007: IntelligenceType class
    class IntelligenceType {
      constructor({ id, name, description, discoveryAreas, promptTemplate, reportStructureOverrides }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.discoveryAreas = discoveryAreas || [];
        this.promptTemplate = promptTemplate;
        this.reportStructureOverrides = reportStructureOverrides || {};
      }

      static findById(id) {
        const type = INTELLIGENCE_TYPES.find(type => type.id === id);
        return type ? new IntelligenceType(type) : null;
      }

      static getAll() {
        return INTELLIGENCE_TYPES.map(type => new IntelligenceType(type));
      }
    }

    // T008: DiscoveryArea class
    class DiscoveryArea {
      constructor({ id, name, description, applicableTypes, defaultEnabled, isCustom }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.applicableTypes = applicableTypes || [];
        this.defaultEnabled = defaultEnabled || false;
        this.isCustom = isCustom || false;
      }

      static findById(id) {
        const area = DISCOVERY_AREAS.find(area => area.id === id);
        return area ? new DiscoveryArea(area) : null;
      }

      static getByIntelligenceType(typeId) {
        return DISCOVERY_AREAS.filter(area => area.applicableTypes.includes(typeId))
          .map(area => new DiscoveryArea(area));
      }

      static getDefaultEnabled(typeId) {
        return DISCOVERY_AREAS.filter(area =>
          area.applicableTypes.includes(typeId) && area.defaultEnabled
        ).map(area => new DiscoveryArea(area));
      }
    }

    // T009: TargetSpecification class
    class TargetSpecification {
      constructor({ targetName, timeframe, intelligenceTypeId }) {
        this.targetName = targetName || '';
        this.timeframe = timeframe || { type: 'all', value: null };
        this.intelligenceTypeId = intelligenceTypeId;
      }

      escapeHTML(str) {
        const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        return str.replace(/[&<>"']/g, char => escapeMap[char]);
      }

      validate() {
        const errors = [];

        // Validate targetName
        if (!this.targetName || this.targetName.trim().length === 0) {
          errors.push('Target name cannot be empty');
        }

        // Validate timeframe structure
        if (this.timeframe && this.timeframe.type === 'custom') {
          if (!this.timeframe.value || !this.timeframe.value.start || !this.timeframe.value.end) {
            errors.push('Custom timeframe must have start and end dates');
          } else if (new Date(this.timeframe.value.end) < new Date(this.timeframe.value.start)) {
            errors.push('End date must be after start date');
          }
        }

        return {
          valid: errors.length === 0,
          errors
        };
      }

      getEscapedTargetName() {
        return this.escapeHTML(this.targetName.trim());
      }

      getHumanReadableTimeframe() {
        if (!this.timeframe || this.timeframe.type === 'all') {
          return 'All time';
        }

        const timeframeMap = {
          '7d': 'Last 7 days',
          '30d': 'Last 30 days',
          '180d': 'Last 6 months',
          '365d': 'Last 1 year'
        };

        if (this.timeframe.type === 'relative') {
          return timeframeMap[this.timeframe.value] || 'All time';
        }

        if (this.timeframe.type === 'custom' && this.timeframe.value) {
          const start = new Date(this.timeframe.value.start).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
          const end = new Date(this.timeframe.value.end).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
          return `${start} - ${end}`;
        }

        return 'All time';
      }
    }

    // T010: SavedTemplate class
    class SavedTemplate {
      constructor({ id, name, intelligenceTypeId, selectedDiscoveryAreas, customDiscoveryAreas, targetSpecification, createdAt }) {
        this.id = id || crypto.randomUUID();
        this.name = name;
        this.intelligenceTypeId = intelligenceTypeId;
        this.selectedDiscoveryAreas = selectedDiscoveryAreas || [];
        this.customDiscoveryAreas = customDiscoveryAreas || [];
        this.targetSpecification = targetSpecification || null;
        this.createdAt = createdAt || new Date().toISOString();
      }

      toJSON() {
        return {
          id: this.id,
          name: this.name,
          intelligenceTypeId: this.intelligenceTypeId,
          selectedDiscoveryAreas: this.selectedDiscoveryAreas,
          customDiscoveryAreas: this.customDiscoveryAreas,
          targetSpecification: this.targetSpecification,
          createdAt: this.createdAt
        };
      }

      static fromJSON(json) {
        return new SavedTemplate(json);
      }

      static getAll(callback) {
        chrome.storage.local.get(['osint_templates'], (result) => {
          try {
            const templates = result.osint_templates;
            if (!templates || !Array.isArray(templates)) {
              callback([]);
              return;
            }
            callback(templates.map(t => SavedTemplate.fromJSON(t)));
          } catch (error) {
            console.error('Error loading templates from chrome.storage.local:', error);
            callback([]);
          }
        });
      }

      static save(template, callback) {
        SavedTemplate.getAll((templates) => {
          try {
            // Check for duplicate names
            if (templates.some(t => t.name === template.name && t.id !== template.id)) {
              throw new Error('Template name must be unique');
            }

            // Check max templates limit
            if (templates.length >= 500 && !templates.some(t => t.id === template.id)) {
              throw new Error('Maximum of 500 templates reached');
            }

            // Check max custom areas
            if (template.customDiscoveryAreas && template.customDiscoveryAreas.length > 10) {
              throw new Error('Maximum of 10 custom discovery areas per template');
            }

            // Update existing or add new
            const existingIndex = templates.findIndex(t => t.id === template.id);
            if (existingIndex >= 0) {
              templates[existingIndex] = template;
            } else {
              templates.push(template);
            }

            chrome.storage.local.set({osint_templates: templates.map(t => t.toJSON())}, () => {
              if (chrome.runtime.lastError) {
                console.error('Error saving template:', chrome.runtime.lastError);
                callback(false, chrome.runtime.lastError);
              } else {
                callback(true);
              }
            });
          } catch (error) {
            console.error('Error saving template:', error);
            callback(false, error);
          }
        });
      }

      static delete(id, callback) {
        SavedTemplate.getAll((templates) => {
          try {
            const filtered = templates.filter(t => t.id !== id);
            chrome.storage.local.set({osint_templates: filtered.map(t => t.toJSON())}, () => {
              if (chrome.runtime.lastError) {
                console.error('Error deleting template:', chrome.runtime.lastError);
                callback(false, chrome.runtime.lastError);
              } else {
                callback(true);
              }
            });
          } catch (error) {
            console.error('Error deleting template:', error);
            callback(false, error);
          }
        });
      }
    }

    // T011: GeneratedPrompt class
    class GeneratedPrompt {
      constructor({ intelligenceType, discoveryAreas, targetSpecification }) {
        this.intelligenceType = intelligenceType;
        this.discoveryAreas = discoveryAreas || [];
        this.targetSpecification = targetSpecification;
        this.content = '';
        this.characterCount = 0;
        this.wasTruncated = false;
      }

      generate() {
        // Start with base template
        let prompt = PROMPT_TEMPLATES.baseTemplate.template;

        // Replace variables
        prompt = this.replaceVariables(prompt);

        // Check length and truncate if needed
        if (prompt.length > 8000) {
          prompt = this.truncate(prompt);
          this.wasTruncated = true;
        }

        this.content = prompt;
        this.characterCount = prompt.length;

        return this.content;
      }

      replaceVariables(template) {
        let result = template;

        // {INTELLIGENCE_TYPE}
        result = result.replace(/{INTELLIGENCE_TYPE}/g, this.intelligenceType.name);

        // {TARGET}
        result = result.replace(/{TARGET}/g, this.targetSpecification.getEscapedTargetName());

        // {TIMEFRAME}
        result = result.replace(/{TIMEFRAME}/g, this.targetSpecification.getHumanReadableTimeframe());

        // {DISCOVERY_AREAS} - comma-separated list
        const areaNames = this.discoveryAreas.map(a => a.name).join(', ');
        result = result.replace(/{DISCOVERY_AREAS}/g, areaNames);

        // {DISCOVERY_AREAS_DETAILED} - bulleted list with descriptions
        const areasDetailed = this.discoveryAreas.map(a =>
          `- **${a.name}**: ${a.description}`
        ).join('\n');
        result = result.replace(/{DISCOVERY_AREAS_DETAILED}/g, areasDetailed);

        // {DISCOVERY_AREAS_COLLECTION} - specific collection instructions
        const areasCollection = this.discoveryAreas.map(a =>
          `### ${a.name}\n${a.description}\n- Document all sources and timestamps\n- Assess information reliability`
        ).join('\n\n');
        result = result.replace(/{DISCOVERY_AREAS_COLLECTION}/g, areasCollection);

        // {EVIDENCE_REQUIREMENTS} - formatted requirements
        const evidenceReqs = Object.entries(PROMPT_TEMPLATES.evidenceRequirements)
          .map(([key, value]) => `- **${key}**: ${value}`)
          .join('\n');
        result = result.replace(/{EVIDENCE_REQUIREMENTS}/g, evidenceReqs);

        // {REPORT_STRUCTURE_OVERRIDES} - additional sections for this type
        let overrides = '';
        if (this.intelligenceType.reportStructureOverrides && this.intelligenceType.reportStructureOverrides.additionalSections) {
          overrides = '\n\n### Additional Analysis Sections\n\n' +
            this.intelligenceType.reportStructureOverrides.additionalSections.map(s => `- ${s}`).join('\n');
        }
        result = result.replace(/{REPORT_STRUCTURE_OVERRIDES}/g, overrides);

        // {DISCOVERY_AREAS_LINKS} - bulleted list of discovery areas with reference links
        const areasLinks = this.discoveryAreas.map(a => {
          // Create a URL-friendly slug from the area name
          const slug = a.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          return `- **${a.name}**: [Research](https://en.wikipedia.org/wiki/${slug}) | [Google Scholar](https://scholar.google.com/scholar?q=${encodeURIComponent(a.name)}) | [Google Search](https://www.google.com/search?q=${encodeURIComponent(a.name)})`;
        }).join('\n');
        result = result.replace(/{DISCOVERY_AREAS_LINKS}/g, areasLinks);

        return result;
      }

      truncate(prompt) {
        // Priority-based truncation strategy
        // Priority 1-2: NEVER_TRUNCATE (4-phase structure, intelligence type context)
        // Priority 3: TRUNCATE_FROM_BOTTOM (discovery areas)
        // Priority 4: SUMMARIZE (evidence requirements)
        // Priority 5: REMOVE_FIRST (examples - not present in current template)

        // Simple strategy: Remove discovery areas from bottom until under 8000
        let truncated = prompt;
        const maxLength = 8000;

        if (truncated.length <= maxLength) {
          return truncated;
        }

        // Strategy: Summarize discovery areas collection section
        const collectionSectionMatch = truncated.match(/## Phase 2: Signals \(Raw Data Collection\)([\s\S]*?)## Phase 3:/);
        if (collectionSectionMatch) {
          const simplifiedCollection = this.discoveryAreas.slice(0, Math.max(3, Math.floor(this.discoveryAreas.length / 2)))
            .map(a => `- ${a.name}`)
            .join('\n');

          truncated = truncated.replace(
            collectionSectionMatch[0],
            `## Phase 2: Signals (Raw Data Collection)\n\nGather raw data for the following areas:\n\n${simplifiedCollection}\n\n(Additional areas omitted for brevity)\n\n## Phase 3:`
          );
        }

        // If still too long, truncate discovery areas detailed section
        if (truncated.length > maxLength) {
          const detailedSectionMatch = truncated.match(/Conduct comprehensive open-source research[\s\S]*?\*\*Objectives\*\*:/);
          if (detailedSectionMatch) {
            const simplifiedDetailed = this.discoveryAreas.slice(0, 3)
              .map(a => `- ${a.name}`)
              .join('\n');

            truncated = truncated.replace(
              detailedSectionMatch[0],
              `Conduct comprehensive open-source research. Focus on:\n\n${simplifiedDetailed}\n\n(Additional areas omitted)\n\n**Objectives**:`
            );
          }
        }

        // Final check - if still too long, hard truncate at 8000 chars
        if (truncated.length > maxLength) {
          truncated = truncated.substring(0, maxLength - 100) + '\n\n... (Content truncated to fit 8000 character limit)';
        }

        return truncated;
      }
    }

    /**
     * Contract Test Suite - TDD Approach
     * These tests validate the embedded JSON data contracts
     * They MUST be run before implementing models (T007-T011)
     */

    // T004: Contract test for INTELLIGENCE_TYPES
    function testIntelligenceTypesContract() {
      console.log('=== Contract Test: intelligence-types.json ===');

      const errors = [];
      const ids = new Set();

      // Check if array exists and has 8 types
      if (!Array.isArray(INTELLIGENCE_TYPES) || INTELLIGENCE_TYPES.length !== 8) {
        errors.push(`Expected 8 intelligence types, got ${INTELLIGENCE_TYPES?.length || 0}`);
      }

      INTELLIGENCE_TYPES.forEach((type, index) => {
        // Check for unique IDs
        if (ids.has(type.id)) {
          errors.push(`Duplicate ID found: ${type.id}`);
        }
        ids.add(type.id);

        // Check required fields
        if (!type.name) errors.push(`Type ${index} missing 'name'`);
        if (!type.description) errors.push(`Type ${index} missing 'description'`);
        if (!type.promptTemplate) errors.push(`Type ${index} missing 'promptTemplate'`);
        if (type.reportStructureOverrides === undefined) errors.push(`Type ${index} missing 'reportStructureOverrides'`);

        // Check discoveryAreas array (min 3)
        if (!Array.isArray(type.discoveryAreas) || type.discoveryAreas.length < 3) {
          errors.push(`Type ${type.id} must have at least 3 discovery areas, has ${type.discoveryAreas?.length || 0}`);
        }

        // Check that all discoveryAreas reference valid IDs from DISCOVERY_AREAS
        if (Array.isArray(type.discoveryAreas)) {
          type.discoveryAreas.forEach(areaId => {
            const areaExists = DISCOVERY_AREAS.find(a => a.id === areaId);
            if (!areaExists) {
              errors.push(`Type ${type.id} references invalid discovery area: ${areaId}`);
            }
          });
        }
      });

      if (errors.length === 0) {
        console.log('✅ PASS - All intelligence types valid');
        return true;
      } else {
        console.error('❌ FAIL - Intelligence types validation errors:');
        errors.forEach(err => console.error('  - ' + err));
        return false;
      }
    }

    // T005: Contract test for DISCOVERY_AREAS
    function testDiscoveryAreasContract() {
      console.log('=== Contract Test: discovery-areas.json ===');

      const errors = [];
      const ids = new Set();
      const intelligenceTypeIds = new Set(INTELLIGENCE_TYPES.map(t => t.id));

      // Check if array exists
      if (!Array.isArray(DISCOVERY_AREAS) || DISCOVERY_AREAS.length === 0) {
        errors.push(`Expected discovery areas array, got ${DISCOVERY_AREAS?.length || 0} items`);
      }

      DISCOVERY_AREAS.forEach((area, index) => {
        // Check for unique IDs
        if (ids.has(area.id)) {
          errors.push(`Duplicate ID found: ${area.id}`);
        }
        ids.add(area.id);

        // Check required fields
        if (!area.name) errors.push(`Area ${index} missing 'name'`);
        if (!area.description) errors.push(`Area ${index} missing 'description'`);
        if (area.defaultEnabled === undefined) errors.push(`Area ${index} missing 'defaultEnabled'`);
        if (area.isCustom === undefined) errors.push(`Area ${index} missing 'isCustom'`);

        // Check applicableTypes array (min 1)
        if (!Array.isArray(area.applicableTypes) || area.applicableTypes.length < 1) {
          errors.push(`Area ${area.id} must have at least 1 applicable type, has ${area.applicableTypes?.length || 0}`);
        }

        // Check that all applicableTypes reference valid intelligence type IDs
        if (Array.isArray(area.applicableTypes)) {
          area.applicableTypes.forEach(typeId => {
            if (!intelligenceTypeIds.has(typeId)) {
              errors.push(`Area ${area.id} references invalid intelligence type: ${typeId}`);
            }
          });
        }
      });

      if (errors.length === 0) {
        console.log('✅ PASS - All discovery areas valid');
        return true;
      } else {
        console.error('❌ FAIL - Discovery areas validation errors:');
        errors.forEach(err => console.error('  - ' + err));
        return false;
      }
    }

    // T006: Contract test for PROMPT_TEMPLATES
    function testPromptTemplatesContract() {
      console.log('=== Contract Test: prompt-templates.json ===');

      const errors = [];

      // Check if baseTemplate exists
      if (!PROMPT_TEMPLATES || !PROMPT_TEMPLATES.baseTemplate) {
        errors.push('Missing baseTemplate object');
        console.error('❌ FAIL - Prompt templates validation errors:');
        errors.forEach(err => console.error('  - ' + err));
        return false;
      }

      const template = PROMPT_TEMPLATES.baseTemplate.template;

      // Check required placeholders
      const requiredPlaceholders = [
        '{INTELLIGENCE_TYPE}',
        '{TARGET}',
        '{TIMEFRAME}',
        '{DISCOVERY_AREAS}',
        '{EVIDENCE_REQUIREMENTS}'
      ];

      requiredPlaceholders.forEach(placeholder => {
        if (!template.includes(placeholder)) {
          errors.push(`Template missing required placeholder: ${placeholder}`);
        }
      });

      // Check 4-phase structure
      const requiredPhases = [
        'Phase 1: Discovery',
        'Phase 2: Signals',
        'Phase 3: Insights',
        'Phase 4: Receipts'
      ];

      requiredPhases.forEach(phase => {
        if (!template.includes(phase)) {
          errors.push(`Template missing required phase: ${phase}`);
        }
      });

      // Check truncationPriority array (5 entries)
      if (!Array.isArray(PROMPT_TEMPLATES.truncationPriority) || PROMPT_TEMPLATES.truncationPriority.length !== 5) {
        errors.push(`Expected 5 truncation priority entries, got ${PROMPT_TEMPLATES.truncationPriority?.length || 0}`);
      }

      // Check priority order (1-5)
      if (Array.isArray(PROMPT_TEMPLATES.truncationPriority)) {
        PROMPT_TEMPLATES.truncationPriority.forEach((entry, index) => {
          if (entry.priority !== index + 1) {
            errors.push(`Truncation priority ${index} has incorrect priority value: ${entry.priority} (expected ${index + 1})`);
          }
        });
      }

      if (errors.length === 0) {
        console.log('✅ PASS - Prompt templates valid');
        return true;
      } else {
        console.error('❌ FAIL - Prompt templates validation errors:');
        errors.forEach(err => console.error('  - ' + err));
        return false;
      }
    }

    // Run all contract tests on page load
    document.addEventListener('DOMContentLoaded', () => {
      console.log('\n🧪 Running Contract Tests (TDD) - These MUST pass before implementing models\n');

      const test1 = testIntelligenceTypesContract();
      const test2 = testDiscoveryAreasContract();
      const test3 = testPromptTemplatesContract();

      console.log('\n=== Contract Test Summary ===');
      console.log(`Intelligence Types: ${test1 ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Discovery Areas: ${test2 ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`Prompt Templates: ${test3 ? '✅ PASS' : '❌ FAIL'}`);
      console.log(`\nAll Tests: ${test1 && test2 && test3 ? '✅ PASS' : '❌ FAIL'}\n`);
    });

    /**
     * T014-T024: Business Logic Implementation
     * UI component population, event handlers, prompt generation, template management
     */

    // Application state
    let appState = {
      selectedTypeId: null,
      selectedDiscoveryAreaIds: [],
      customDiscoveryAreas: [],
      targetSpec: null
    };

    // T014: Populate intelligence types grid
    function populateIntelligenceTypes() {
      const grid = document.getElementById('intelligence-types-grid');
      grid.innerHTML = '';

      INTELLIGENCE_TYPES.forEach(type => {
        const card = document.createElement('div');
        card.className = 'intel-card';
        card.dataset.typeId = type.id;
        card.tabIndex = 0;
        card.setAttribute('role', 'radio');
        card.setAttribute('aria-checked', 'false');

        const heading = document.createElement('h3');
        heading.textContent = type.name;

        const description = document.createElement('p');
        description.textContent = type.description;

        card.appendChild(heading);
        card.appendChild(description);
        grid.appendChild(card);
      });
    }

    // T015: Populate discovery areas for selected intelligence type
    function populateDiscoveryAreas(typeId) {
      const areas = DiscoveryArea.getByIntelligenceType(typeId);
      const container = document.getElementById('discovery-areas-list');
      container.innerHTML = '';

      appState.selectedDiscoveryAreaIds = [];

      areas.forEach(area => {
        const div = document.createElement('div');
        div.className = 'discovery-area-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `area-${area.id}`;
        checkbox.value = area.id;
        checkbox.checked = area.defaultEnabled;

        if (area.defaultEnabled) {
          appState.selectedDiscoveryAreaIds.push(area.id);
        }

        checkbox.addEventListener('change', (e) => {
          if (e.target.checked) {
            if (!appState.selectedDiscoveryAreaIds.includes(area.id)) {
              appState.selectedDiscoveryAreaIds.push(area.id);
            }
          } else {
            appState.selectedDiscoveryAreaIds = appState.selectedDiscoveryAreaIds.filter(id => id !== area.id);
          }
        });

        const label = document.createElement('label');
        label.htmlFor = `area-${area.id}`;
        label.textContent = area.name;

        const desc = document.createElement('small');
        desc.textContent = area.description;

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(desc);
        container.appendChild(div);
      });

      // Reset custom areas counter
      document.getElementById('custom-area-count').textContent = `${appState.customDiscoveryAreas.length} / 10 custom areas`;
    }

    // T017: Intelligence type selection logic
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize - check storage quota on load
      checkStorageQuota();

      // New Prompt button
      document.getElementById('new-prompt-btn').addEventListener('click', () => {
        // Reset state
        appState = {
          selectedTypeId: null,
          selectedDiscoveryAreaIds: [],
          customDiscoveryAreas: [],
          targetSpec: null
        };

        populateIntelligenceTypes();
        document.getElementById('intelligence-setup-modal').showModal();
        document.getElementById('intelligence-next-btn').disabled = true;
      });

      // Intelligence type card selection
      document.addEventListener('click', (e) => {
        const card = e.target.closest('.intel-card');
        if (card) {
          // Deselect all cards
          document.querySelectorAll('.intel-card').forEach(c => {
            c.classList.remove('selected');
            c.setAttribute('aria-checked', 'false');
          });

          // Select clicked card
          card.classList.add('selected');
          card.setAttribute('aria-checked', 'true');
          appState.selectedTypeId = card.dataset.typeId;
          document.getElementById('intelligence-next-btn').disabled = false;
        }
      });

      // Keyboard navigation for intelligence type cards
      document.addEventListener('keydown', (e) => {
        const card = e.target.closest('.intel-card');
        if (card && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          card.click();
        }
      });

      // Intelligence Next button
      document.getElementById('intelligence-next-btn').addEventListener('click', () => {
        if (!appState.selectedTypeId) {
          showNotification('Please select an intelligence type');
          return;
        }

        document.getElementById('intelligence-setup-modal').close();
        document.getElementById('discovery-config-modal').showModal();
        populateDiscoveryAreas(appState.selectedTypeId);
      });

      // T018: Discovery area toggling logic (already implemented in populateDiscoveryAreas)

      // Add custom discovery area
      document.getElementById('add-custom-area-btn').addEventListener('click', () => {
        const input = document.getElementById('custom-area-input');
        const name = input.value.trim();

        if (!name) {
          showNotification('Please enter a custom area name');
          return;
        }

        if (appState.customDiscoveryAreas.length >= 10) {
          showNotification('Maximum 10 custom areas allowed');
          return;
        }

        appState.customDiscoveryAreas.push(name);

        // Add to UI
        const container = document.getElementById('discovery-areas-list');
        const div = document.createElement('div');
        div.className = 'discovery-area-item custom';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.disabled = true;

        const label = document.createElement('label');
        label.textContent = name;

        const desc = document.createElement('small');
        desc.textContent = 'Custom discovery area';

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(desc);
        container.appendChild(div);

        input.value = '';
        document.getElementById('custom-area-count').textContent = `${appState.customDiscoveryAreas.length} / 10 custom areas`;
      });

      // T019: Target specification logic

      // Timeframe dropdown change
      document.getElementById('timeframe-select').addEventListener('change', (e) => {
        const customRange = document.getElementById('custom-date-range');
        customRange.style.display = e.target.value === 'custom' ? 'block' : 'none';
      });

      // Discovery Back button
      document.getElementById('discovery-back-btn').addEventListener('click', () => {
        document.getElementById('discovery-config-modal').close();
        document.getElementById('intelligence-setup-modal').showModal();
      });

      // Generate Prompt button
      document.getElementById('generate-prompt-btn').addEventListener('click', () => {
        const targetName = document.getElementById('target-name-input').value.trim();
        if (!targetName) {
          showNotification('Please enter a target name');
          return;
        }

        const timeframeSelect = document.getElementById('timeframe-select').value;
        let timeframe = { type: 'all', value: null };

        if (timeframeSelect !== 'all' && timeframeSelect !== 'custom') {
          timeframe = { type: 'relative', value: timeframeSelect };
        } else if (timeframeSelect === 'custom') {
          const start = document.getElementById('date-start').value;
          const end = document.getElementById('date-end').value;
          if (!start || !end) {
            showNotification('Please select both start and end dates');
            return;
          }
          if (new Date(end) < new Date(start)) {
            showNotification('End date must be after start date');
            return;
          }
          timeframe = { type: 'custom', value: { start, end } };
        }

        appState.targetSpec = new TargetSpecification({
          targetName,
          timeframe,
          intelligenceTypeId: appState.selectedTypeId
        });

        const validation = appState.targetSpec.validate();
        if (!validation.valid) {
          showNotification(validation.errors[0]);
          return;
        }

        generateAndDisplayPrompt(); // T020
      });

      // T020: Prompt generation logic
      function generateAndDisplayPrompt() {
        const intelligenceType = IntelligenceType.findById(appState.selectedTypeId);

        // Get selected discovery areas
        const selectedAreas = appState.selectedDiscoveryAreaIds.map(id => {
          const area = DiscoveryArea.findById(id);
          return new DiscoveryArea(area);
        });

        // Add custom areas
        appState.customDiscoveryAreas.forEach((name, index) => {
          selectedAreas.push(new DiscoveryArea({
            id: `custom-${Date.now()}-${index}`,
            name,
            description: 'Custom discovery area',
            applicableTypes: [appState.selectedTypeId],
            defaultEnabled: false,
            isCustom: true
          }));
        });

        const generatedPrompt = new GeneratedPrompt({
          intelligenceType: new IntelligenceType(intelligenceType),
          discoveryAreas: selectedAreas,
          targetSpecification: appState.targetSpec
        });

        const content = generatedPrompt.generate();

        document.getElementById('generated-prompt-text').value = content;
        document.getElementById('character-count').textContent = `${generatedPrompt.characterCount.toLocaleString()} / 8,000 characters`;
        document.getElementById('truncation-warning').style.display = generatedPrompt.wasTruncated ? 'block' : 'none';

        document.getElementById('discovery-config-modal').close();
        document.getElementById('prompt-generated-modal').showModal();
      }

      // T021: Copy to clipboard logic
      document.getElementById('copy-clipboard-btn').addEventListener('click', async () => {
        const text = document.getElementById('generated-prompt-text').value;

        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
          } else {
            // Fallback
            const textarea = document.getElementById('generated-prompt-text');
            textarea.select();
            document.execCommand('copy');
          }
          showNotification('Prompt copied to clipboard!');
        } catch (error) {
          showNotification('Failed to copy to clipboard');
        }
      });

      // AI Action Buttons - Copy to clipboard and open provider
      document.getElementById('ai-claude-btn').addEventListener('click', async () => {
        const prompt = document.getElementById('generated-prompt-text').value;
        await copyAndOpenProvider('claude', prompt, 'https://claude.ai/new');
      });

      document.getElementById('ai-chatgpt-btn').addEventListener('click', async () => {
        const prompt = document.getElementById('generated-prompt-text').value;
        await copyAndOpenProvider('chatgpt', prompt, 'https://chat.openai.com');
      });

      document.getElementById('ai-perplexity-btn').addEventListener('click', async () => {
        const prompt = document.getElementById('generated-prompt-text').value;
        await copyAndOpenProvider('perplexity', prompt, 'https://www.perplexity.ai');
      });

      document.getElementById('ai-gemini-btn').addEventListener('click', async () => {
        const prompt = document.getElementById('generated-prompt-text').value;
        await copyAndOpenProvider('gemini', prompt, 'https://gemini.google.com');
      });

      // Helper function to copy to clipboard and open provider
      async function copyAndOpenProvider(providerName, prompt, providerUrl) {
        try {
          // Copy prompt to clipboard
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(prompt);
          } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = prompt;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          }

          // Open AI provider in new tab
          chrome.tabs.create({ url: providerUrl, active: true });

          showNotification(`✓ Prompt copied! Opening ${providerName}...`);
        } catch (error) {
          console.error(`Error with ${providerName}:`, error);
          showNotification(`Failed to copy prompt to clipboard`);
        }
      }

      // T022: Save template logic
      document.getElementById('save-template-btn').addEventListener('click', () => {
        document.getElementById('save-template-modal').showModal();
      });

      document.getElementById('confirm-save-template-btn').addEventListener('click', () => {
        const name = document.getElementById('template-name-input').value.trim();

        if (!name) {
          showNotification('Please enter a template name');
          return;
        }

        const template = new SavedTemplate({
          name,
          intelligenceTypeId: appState.selectedTypeId,
          selectedDiscoveryAreas: appState.selectedDiscoveryAreaIds,
          customDiscoveryAreas: appState.customDiscoveryAreas,
          targetSpecification: appState.targetSpec.toJSON ? appState.targetSpec.toJSON() : {
            targetName: appState.targetSpec.targetName,
            timeframe: appState.targetSpec.timeframe,
            intelligenceTypeId: appState.targetSpec.intelligenceTypeId
          }
        });

        SavedTemplate.save(template, (success, error) => {
          if (success) {
            showNotification('Template saved!');
            document.getElementById('save-template-modal').close();
            document.getElementById('template-name-input').value = '';
            checkStorageQuota();
          } else {
            showNotification(error.message || 'Failed to save template');
          }
        });
      });

      // T023: Load template logic
      document.getElementById('load-template-btn').addEventListener('click', () => {
        SavedTemplate.getAll((templates) => {
          const container = document.getElementById('template-list');
          container.innerHTML = '';

          if (templates.length === 0) {
            container.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No saved templates</p>';
          } else {
            templates.forEach(template => {
              const div = document.createElement('div');
              div.className = 'template-item';

              const type = IntelligenceType.findById(template.intelligenceTypeId);
              const date = new Date(template.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

              const infoDiv = document.createElement('div');
              infoDiv.className = 'template-info';

              const nameStrong = document.createElement('strong');
              nameStrong.textContent = template.name;

              const metaSmall = document.createElement('small');
              metaSmall.textContent = `${type?.name || 'Unknown'} - ${date}`;

              infoDiv.appendChild(nameStrong);
              infoDiv.appendChild(metaSmall);

              const deleteBtn = document.createElement('button');
              deleteBtn.className = 'btn-delete';
              deleteBtn.dataset.id = template.id;
              deleteBtn.title = 'Delete template';
              deleteBtn.textContent = '×';

              infoDiv.addEventListener('click', () => {
                loadTemplate(template);
                document.getElementById('template-list-modal').close();
              });

              deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteTemplate(template.id, template.name);
              });

              div.appendChild(infoDiv);
              div.appendChild(deleteBtn);
              container.appendChild(div);
            });
          }

          document.getElementById('template-list-modal').showModal();
        });
      });

      function loadTemplate(template) {
        appState.selectedTypeId = template.intelligenceTypeId;
        appState.selectedDiscoveryAreaIds = [...template.selectedDiscoveryAreas];
        appState.customDiscoveryAreas = [...template.customDiscoveryAreas];

        if (template.targetSpecification) {
          appState.targetSpec = new TargetSpecification(template.targetSpecification);
          document.getElementById('target-name-input').value = template.targetSpecification.targetName;

          if (template.targetSpecification.timeframe) {
            const tf = template.targetSpecification.timeframe;
            if (tf.type === 'relative') {
              document.getElementById('timeframe-select').value = tf.value;
            } else if (tf.type === 'custom') {
              document.getElementById('timeframe-select').value = 'custom';
              document.getElementById('date-start').value = tf.value.start;
              document.getElementById('date-end').value = tf.value.end;
              document.getElementById('custom-date-range').style.display = 'block';
            }
          }
        }

        document.getElementById('discovery-config-modal').showModal();
        populateDiscoveryAreas(appState.selectedTypeId);

        // Restore selected discovery areas
        setTimeout(() => {
          appState.selectedDiscoveryAreaIds.forEach(areaId => {
            const checkbox = document.getElementById(`area-${areaId}`);
            if (checkbox) {
              checkbox.checked = true;
            }
          });

          // Re-add custom areas to UI
          const container = document.getElementById('discovery-areas-list');
          appState.customDiscoveryAreas.forEach(name => {
            const div = document.createElement('div');
            div.className = 'discovery-area-item custom';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = true;
            checkbox.disabled = true;

            const label = document.createElement('label');
            label.textContent = name;

            const desc = document.createElement('small');
            desc.textContent = 'Custom discovery area';

            div.appendChild(checkbox);
            div.appendChild(label);
            div.appendChild(desc);
            container.appendChild(div);
          });

          document.getElementById('custom-area-count').textContent = `${appState.customDiscoveryAreas.length} / 10 custom areas`;
        }, 100);
      }

      // T024: Delete template logic
      function deleteTemplate(id, name) {
        document.getElementById('delete-confirm-message').textContent = `Delete "${name}"? This cannot be undone.`;
        document.getElementById('delete-confirm-modal').showModal();

        const confirmBtn = document.getElementById('confirm-delete-btn');
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

        newConfirmBtn.addEventListener('click', () => {
          SavedTemplate.delete(id, (success, error) => {
            if (success) {
              showNotification('Template deleted');
              document.getElementById('delete-confirm-modal').close();
              document.getElementById('template-list-modal').close();
              checkStorageQuota();
            } else {
              showNotification('Failed to delete template');
            }
          });
        });
      }

      // Check premium status and update UI
      chrome.storage.local.get(['isPremium'], (result) => {
        if (result.isPremium) {
          document.getElementById('premium-badge').style.display = 'inline';
          document.getElementById('free-badge').style.display = 'none';
        }
      });
    });

    /**
     * T025-T027: Integration Features
     * LocalStorage quota management, dialog polyfill, modal close handlers, notifications
     */

    // T025: LocalStorage quota management
    function checkStorageQuota() {
      if (navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate().then(estimate => {
          const used = estimate.usage || 0;
          const quota = estimate.quota || 0;
          const percent = (used / quota) * 100;

          if (percent > 80) {
            SavedTemplate.getAll((templates) => {
              console.warn(`Storage ${percent.toFixed(1)}% full (${templates.length} templates saved)`);
            });
          }
        }).catch(err => {
          console.error('Failed to estimate storage quota:', err);
        });
      }
    }

    // T026: Dialog polyfill for Safari <15.4
    if (!window.HTMLDialogElement) {
      console.warn('Dialog element not supported, adding polyfill behavior');

      document.querySelectorAll('dialog').forEach(dialog => {
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');

        // Add showModal method
        dialog.showModal = function() {
          this.style.display = 'block';
          this.setAttribute('open', '');
          document.body.style.overflow = 'hidden';

          // Focus first focusable element
          const focusable = this.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (focusable.length > 0) {
            focusable[0].focus();
          }
        };

        // Add close method
        dialog.close = function() {
          this.style.display = 'none';
          this.removeAttribute('open');
          document.body.style.overflow = '';
        };
      });
    }

    // T027: Modal close handlers and notification helper
    document.addEventListener('DOMContentLoaded', () => {
      // Close button handlers
      document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const modal = e.target.closest('dialog');
          if (modal) modal.close();
        });
      });

      // ESC key handler
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const openModals = document.querySelectorAll('dialog[open]');
          if (openModals.length > 0) {
            openModals[openModals.length - 1].close();
          }
        }
      });

      // Backdrop click handler (close on click outside)
      document.querySelectorAll('dialog').forEach(dialog => {
        dialog.addEventListener('click', (e) => {
          const rect = dialog.getBoundingClientRect();
          const isInDialog = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width
          );

          if (!isInDialog) {
            dialog.close();
          }
        });
      });
    });

    // Notification helper function
    function showNotification(message) {
      const area = document.getElementById('notification-area');
      area.textContent = message;
      area.style.display = 'block';
      area.style.opacity = '1';

      setTimeout(() => {
        area.style.opacity = '0';
        setTimeout(() => {
          area.style.display = 'none';
        }, 300);
      }, 3000);
    }
