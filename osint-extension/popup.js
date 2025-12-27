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

      /**
       * Export all templates as JSON
       * @param {Function} callback - (jsonString, error)
       */
      static exportAll(callback) {
        SavedTemplate.getAll((templates) => {
          try {
            const exportData = {
              version: '1.0.0',
              exportedAt: new Date().toISOString(),
              tool: 'BrightScope',
              templateCount: templates.length,
              templates: templates.map(t => t.toJSON())
            };
            const jsonString = JSON.stringify(exportData, null, 2);
            callback(jsonString, null);
          } catch (error) {
            callback(null, error);
          }
        });
      }

      /**
       * Export a single template as JSON
       * @param {string} id - Template ID to export
       * @param {Function} callback - (jsonString, error)
       */
      static exportOne(id, callback) {
        SavedTemplate.getAll((templates) => {
          try {
            const template = templates.find(t => t.id === id);
            if (!template) {
              callback(null, new Error('Template not found'));
              return;
            }
            const exportData = {
              version: '1.0.0',
              exportedAt: new Date().toISOString(),
              tool: 'BrightScope',
              templateCount: 1,
              templates: [template.toJSON()]
            };
            const jsonString = JSON.stringify(exportData, null, 2);
            callback(jsonString, null);
          } catch (error) {
            callback(null, error);
          }
        });
      }

      /**
       * Create a shareable link for a template
       * Uses base64 encoding for compact representation
       * @param {string} id - Template ID
       * @param {Function} callback - (shareCode, error)
       */
      static createShareLink(id, callback) {
        SavedTemplate.getAll((templates) => {
          try {
            const template = templates.find(t => t.id === id);
            if (!template) {
              callback(null, new Error('Template not found'));
              return;
            }

            // Create compact share data
            const shareData = {
              v: 1, // version
              n: template.name,
              t: template.intelligenceTypeId,
              a: template.selectedDiscoveryAreas,
              c: template.customDiscoveryAreas || [],
              s: template.targetSpecification || null
            };

            // Encode to base64
            const jsonStr = JSON.stringify(shareData);
            const base64 = btoa(unescape(encodeURIComponent(jsonStr)));
            const shareCode = `BS1-${base64}`;

            callback(shareCode, null);
          } catch (error) {
            callback(null, error);
          }
        });
      }

      /**
       * Import a template from a share code
       * @param {string} shareCode - The share code (BS1-...)
       * @returns {{valid: boolean, template: Object|null, error: string|null}}
       */
      static parseShareCode(shareCode) {
        try {
          // Validate prefix
          if (!shareCode || !shareCode.startsWith('BS1-')) {
            return { valid: false, template: null, error: 'Invalid share code format' };
          }

          // Extract and decode base64
          const base64 = shareCode.substring(4);
          const jsonStr = decodeURIComponent(escape(atob(base64)));
          const shareData = JSON.parse(jsonStr);

          // Validate version
          if (shareData.v !== 1) {
            return { valid: false, template: null, error: 'Unsupported share code version' };
          }

          // Reconstruct template
          const template = {
            id: crypto.randomUUID(),
            name: shareData.n || 'Imported Template',
            intelligenceTypeId: shareData.t,
            selectedDiscoveryAreas: shareData.a || [],
            customDiscoveryAreas: shareData.c || [],
            targetSpecification: shareData.s || null,
            createdAt: new Date().toISOString()
          };

          // Validate required fields
          if (!template.intelligenceTypeId) {
            return { valid: false, template: null, error: 'Missing intelligence type in share code' };
          }

          return { valid: true, template, error: null };
        } catch (error) {
          return { valid: false, template: null, error: `Failed to parse share code: ${error.message}` };
        }
      }

      /**
       * Import a template from share code and save it
       * @param {string} shareCode - The share code
       * @param {Function} callback - (success, template|error)
       */
      static importFromShareCode(shareCode, callback) {
        const result = SavedTemplate.parseShareCode(shareCode);

        if (!result.valid) {
          callback(false, result.error);
          return;
        }

        const template = new SavedTemplate(result.template);
        SavedTemplate.save(template, (success, error) => {
          if (success) {
            callback(true, template);
          } else {
            callback(false, error);
          }
        });
      }

      /**
       * Validate imported JSON data
       * @param {Object} data - Parsed JSON data
       * @returns {{valid: boolean, errors: string[], templates: Array}}
       */
      static validateImport(data) {
        const errors = [];
        const validTemplates = [];

        // Check basic structure
        if (!data || typeof data !== 'object') {
          return { valid: false, errors: ['Invalid JSON structure'], templates: [] };
        }

        // Check for templates array
        if (!data.templates || !Array.isArray(data.templates)) {
          return { valid: false, errors: ['No templates array found in import file'], templates: [] };
        }

        // Validate each template
        data.templates.forEach((t, index) => {
          const templateErrors = [];

          if (!t.name || typeof t.name !== 'string') {
            templateErrors.push(`Template ${index + 1}: Missing or invalid name`);
          }
          if (!t.intelligenceTypeId || typeof t.intelligenceTypeId !== 'string') {
            templateErrors.push(`Template ${index + 1}: Missing or invalid intelligence type`);
          }
          if (!Array.isArray(t.selectedDiscoveryAreas)) {
            templateErrors.push(`Template ${index + 1}: Invalid discovery areas`);
          }

          if (templateErrors.length === 0) {
            // Template is valid - assign new ID to avoid conflicts
            validTemplates.push({
              ...t,
              id: crypto.randomUUID(),
              createdAt: t.createdAt || new Date().toISOString()
            });
          } else {
            errors.push(...templateErrors);
          }
        });

        return {
          valid: validTemplates.length > 0,
          errors,
          templates: validTemplates
        };
      }

      /**
       * Import templates from JSON
       * @param {string} jsonString - JSON string to import
       * @param {Object} options - { merge: boolean, replace: boolean }
       * @param {Function} callback - (result: {imported: number, skipped: number, errors: string[]})
       */
      static importFromJSON(jsonString, options = { merge: true }, callback) {
        try {
          const data = JSON.parse(jsonString);
          const validation = SavedTemplate.validateImport(data);

          if (!validation.valid && validation.templates.length === 0) {
            callback({ imported: 0, skipped: 0, errors: validation.errors });
            return;
          }

          SavedTemplate.getAll((existingTemplates) => {
            let imported = 0;
            let skipped = 0;
            const errors = [...validation.errors];

            const templatesToSave = options.replace ? [] : [...existingTemplates];

            validation.templates.forEach(newTemplate => {
              // Check for duplicate names
              const duplicate = templatesToSave.find(t => t.name === newTemplate.name);
              if (duplicate) {
                if (options.merge) {
                  // Skip duplicates in merge mode
                  skipped++;
                  errors.push(`Skipped "${newTemplate.name}" (already exists)`);
                } else {
                  // Rename in non-merge mode
                  newTemplate.name = `${newTemplate.name} (imported)`;
                  templatesToSave.push(new SavedTemplate(newTemplate));
                  imported++;
                }
              } else {
                templatesToSave.push(new SavedTemplate(newTemplate));
                imported++;
              }
            });

            // Check max limit
            if (templatesToSave.length > 500) {
              const overflow = templatesToSave.length - 500;
              errors.push(`${overflow} templates exceed the 500 limit and were not imported`);
              templatesToSave.splice(500);
            }

            chrome.storage.local.set({
              osint_templates: templatesToSave.map(t => t.toJSON ? t.toJSON() : t)
            }, () => {
              if (chrome.runtime.lastError) {
                callback({ imported: 0, skipped: 0, errors: [chrome.runtime.lastError.message] });
              } else {
                callback({ imported, skipped, errors });
              }
            });
          });
        } catch (error) {
          callback({ imported: 0, skipped: 0, errors: [`Invalid JSON: ${error.message}`] });
        }
      }
    }

    // PromptHistory class - stores generated prompts for quick access
    class PromptHistory {
      static STORAGE_KEY = 'brightscope_prompt_history';
      static MAX_ENTRIES = 100;

      constructor({ id, timestamp, targetName, intelligenceType, content, characterCount, promptStyle }) {
        this.id = id || crypto.randomUUID();
        this.timestamp = timestamp || new Date().toISOString();
        this.targetName = targetName;
        this.intelligenceType = intelligenceType;
        this.content = content;
        this.characterCount = characterCount || content?.length || 0;
        this.promptStyle = promptStyle || null;
      }

      toJSON() {
        return {
          id: this.id,
          timestamp: this.timestamp,
          targetName: this.targetName,
          intelligenceType: this.intelligenceType,
          content: this.content,
          characterCount: this.characterCount,
          promptStyle: this.promptStyle
        };
      }

      // Add a new prompt to history
      static add(entry, callback = () => {}) {
        const historyEntry = new PromptHistory(entry);

        chrome.storage.local.get([PromptHistory.STORAGE_KEY], (result) => {
          let history = result[PromptHistory.STORAGE_KEY] || [];

          // Add new entry at the beginning
          history.unshift(historyEntry.toJSON());

          // Trim to max entries
          if (history.length > PromptHistory.MAX_ENTRIES) {
            history = history.slice(0, PromptHistory.MAX_ENTRIES);
          }

          chrome.storage.local.set({ [PromptHistory.STORAGE_KEY]: history }, () => {
            callback(historyEntry);
          });
        });
      }

      // Get all history
      static getAll(callback) {
        chrome.storage.local.get([PromptHistory.STORAGE_KEY], (result) => {
          callback(result[PromptHistory.STORAGE_KEY] || []);
        });
      }

      // Get a specific entry by ID
      static getById(id, callback) {
        PromptHistory.getAll((history) => {
          const entry = history.find(h => h.id === id);
          callback(entry || null);
        });
      }

      // Delete a specific entry
      static delete(id, callback = () => {}) {
        chrome.storage.local.get([PromptHistory.STORAGE_KEY], (result) => {
          let history = result[PromptHistory.STORAGE_KEY] || [];
          history = history.filter(h => h.id !== id);
          chrome.storage.local.set({ [PromptHistory.STORAGE_KEY]: history }, () => {
            callback(true);
          });
        });
      }

      // Clear all history
      static clear(callback = () => {}) {
        chrome.storage.local.remove([PromptHistory.STORAGE_KEY], callback);
      }

      // Search history by target name
      static search(query, callback) {
        PromptHistory.getAll((history) => {
          const lowerQuery = query.toLowerCase();
          const results = history.filter(h =>
            h.targetName?.toLowerCase().includes(lowerQuery) ||
            h.intelligenceType?.toLowerCase().includes(lowerQuery)
          );
          callback(results);
        });
      }
    }

    // AuditLog class - tracks prompt generation activity
    class AuditLog {
      static STORAGE_KEY = 'brightscope_audit_log';
      static MAX_ENTRIES = 100;

      constructor({ id, timestamp, action, intelligenceType, targetName, targetCount, discoveryAreas, promptStyle, characterCount }) {
        this.id = id || crypto.randomUUID();
        this.timestamp = timestamp || new Date().toISOString();
        this.action = action; // 'generate', 'batch_generate', 'export_md', 'export_pdf', 'copy'
        this.intelligenceType = intelligenceType;
        this.targetName = targetName;
        this.targetCount = targetCount || 1;
        this.discoveryAreas = discoveryAreas || [];
        this.promptStyle = promptStyle || null;
        this.characterCount = characterCount || 0;
      }

      toJSON() {
        return {
          id: this.id,
          timestamp: this.timestamp,
          action: this.action,
          intelligenceType: this.intelligenceType,
          targetName: this.targetName,
          targetCount: this.targetCount,
          discoveryAreas: this.discoveryAreas,
          promptStyle: this.promptStyle,
          characterCount: this.characterCount
        };
      }

      // Log a new entry
      static log(entry, callback = () => {}) {
        const auditEntry = new AuditLog(entry);

        chrome.storage.local.get([AuditLog.STORAGE_KEY], (result) => {
          let logs = result[AuditLog.STORAGE_KEY] || [];

          // Add new entry at the beginning
          logs.unshift(auditEntry.toJSON());

          // Trim to max entries
          if (logs.length > AuditLog.MAX_ENTRIES) {
            logs = logs.slice(0, AuditLog.MAX_ENTRIES);
          }

          chrome.storage.local.set({ [AuditLog.STORAGE_KEY]: logs }, () => {
            callback(auditEntry);
          });
        });
      }

      // Get all logs
      static getAll(callback) {
        chrome.storage.local.get([AuditLog.STORAGE_KEY], (result) => {
          callback(result[AuditLog.STORAGE_KEY] || []);
        });
      }

      // Clear all logs
      static clear(callback = () => {}) {
        chrome.storage.local.remove([AuditLog.STORAGE_KEY], callback);
      }

      // Export logs as CSV
      static exportCSV(callback) {
        AuditLog.getAll((logs) => {
          if (logs.length === 0) {
            callback(null, 'No audit logs to export');
            return;
          }

          const headers = ['Timestamp', 'Action', 'Intelligence Type', 'Target', 'Target Count', 'Discovery Areas', 'Depth', 'Formality', 'Risk', 'Characters'];
          const rows = logs.map(log => [
            log.timestamp,
            log.action,
            log.intelligenceType || '',
            log.targetName || '',
            log.targetCount || 1,
            (log.discoveryAreas || []).join('; '),
            log.promptStyle?.depth || '',
            log.promptStyle?.formality || '',
            log.promptStyle?.risk || '',
            log.characterCount || ''
          ]);

          const csv = [headers, ...rows]
            .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
            .join('\n');

          callback(csv);
        });
      }

      // Export logs as JSON
      static exportJSON(callback) {
        AuditLog.getAll((logs) => {
          callback(JSON.stringify(logs, null, 2));
        });
      }
    }

    // T011: GeneratedPrompt class
    class GeneratedPrompt {
      constructor({ intelligenceType, discoveryAreas, targetSpecification, promptStyle }) {
        this.intelligenceType = intelligenceType;
        this.discoveryAreas = discoveryAreas || [];
        this.targetSpecification = targetSpecification;
        this.promptStyle = promptStyle || { depth: 2, formality: 2, risk: 2 };
        this.content = '';
        this.characterCount = 0;
        this.wasTruncated = false;
      }

      generate() {
        // Start with base template
        let prompt = PROMPT_TEMPLATES.baseTemplate.template;

        // Replace variables
        prompt = this.replaceVariables(prompt);

        // Add style modifiers if not default
        const styleInstructions = this.generateStyleInstructions();
        if (styleInstructions) {
          prompt = prompt + '\n\n---\n\n## Style & Approach Guidelines\n\n' + styleInstructions;
        }

        // Check length and truncate if needed
        if (prompt.length > 8000) {
          prompt = this.truncate(prompt);
          this.wasTruncated = true;
        }

        this.content = prompt;
        this.characterCount = prompt.length;

        return this.content;
      }

      generateStyleInstructions() {
        const instructions = [];
        const { depth, formality, risk } = this.promptStyle;

        // Only add instructions for non-default settings or if any are non-default
        const isCustomized = depth !== 2 || formality !== 2 || risk !== 2;
        if (!isCustomized) return '';

        // Depth instructions
        if (depth !== 2) {
          const depthMod = PROMPT_STYLE_MODIFIERS.depth[depth];
          instructions.push(`### Analysis Depth: ${PROMPT_STYLE_LABELS.depth[depth - 1]}`);
          instructions.push(`- ${depthMod.instruction}`);
          if (depthMod.wordLimit) instructions.push(`- ${depthMod.wordLimit}`);
          if (depthMod.sections) instructions.push(`- ${depthMod.sections}`);
        }

        // Formality instructions
        if (formality !== 2) {
          const formalityMod = PROMPT_STYLE_MODIFIERS.formality[formality];
          instructions.push(`### Tone: ${PROMPT_STYLE_LABELS.formality[formality - 1]}`);
          instructions.push(`- ${formalityMod.tone}`);
          instructions.push(`- ${formalityMod.format}`);
        }

        // Risk tolerance instructions
        if (risk !== 2) {
          const riskMod = PROMPT_STYLE_MODIFIERS.risk[risk];
          instructions.push(`### Risk Approach: ${PROMPT_STYLE_LABELS.risk[risk - 1]}`);
          instructions.push(`- ${riskMod.approach}`);
          instructions.push(`- ${riskMod.sources}`);
          instructions.push(`- ${riskMod.caveats}`);
        }

        return instructions.join('\n');
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
      targetSpec: null,
      promptStyle: {
        depth: 2,      // 1=Brief, 2=Standard, 3=Comprehensive
        formality: 2,  // 1=Casual, 2=Professional, 3=Formal
        risk: 2        // 1=Conservative, 2=Balanced, 3=Aggressive
      },
      multiTarget: {
        enabled: false,
        targets: []
      }
    };

    // Prompt style labels
    const PROMPT_STYLE_LABELS = {
      depth: ['Brief', 'Standard', 'Comprehensive'],
      formality: ['Casual', 'Professional', 'Formal'],
      risk: ['Conservative', 'Balanced', 'Aggressive']
    };

    // Prompt style modifiers for prompt generation
    const PROMPT_STYLE_MODIFIERS = {
      depth: {
        1: { // Brief
          instruction: 'Provide a concise, high-level overview focusing only on the most critical findings.',
          wordLimit: 'Keep the report under 500 words.',
          sections: 'Combine sections where possible for brevity.'
        },
        2: { // Standard
          instruction: 'Provide a balanced analysis with sufficient detail for informed decision-making.',
          wordLimit: '',
          sections: ''
        },
        3: { // Comprehensive
          instruction: 'Provide an exhaustive, in-depth analysis covering all possible angles and edge cases.',
          wordLimit: 'Be thorough - length is not a concern.',
          sections: 'Include sub-sections for each major finding.'
        }
      },
      formality: {
        1: { // Casual
          tone: 'Use a conversational, accessible tone. Avoid jargon where possible.',
          format: 'Bullet points and short paragraphs are preferred.'
        },
        2: { // Professional
          tone: 'Maintain a professional, objective tone suitable for business contexts.',
          format: 'Use standard report formatting with clear section headers.'
        },
        3: { // Formal
          tone: 'Use formal language appropriate for executive briefings or legal contexts.',
          format: 'Follow strict report structure with numbered sections and formal citations.'
        }
      },
      risk: {
        1: { // Conservative
          approach: 'Focus only on verified, high-confidence information. Avoid speculation.',
          sources: 'Prioritize official and authoritative sources only.',
          caveats: 'Include explicit caveats for any uncertain information.'
        },
        2: { // Balanced
          approach: 'Balance verified facts with reasonable inferences based on available data.',
          sources: 'Use a mix of official and credible secondary sources.',
          caveats: 'Note confidence levels for key findings.'
        },
        3: { // Aggressive
          approach: 'Explore all available information including circumstantial evidence and patterns.',
          sources: 'Cast a wide net across all available sources.',
          caveats: 'Clearly label speculative analysis as such.'
        }
      }
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
          // Update completion checklist
          if (typeof updateCompletionChecklist === 'function') {
            updateCompletionChecklist();
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

    // Quick Workflow Dropdown
    function populateQuickWorkflows() {
      SavedTemplate.getAll((templates) => {
        const section = document.getElementById('quick-workflow-section');
        const select = document.getElementById('quick-workflow-select');

        if (templates.length === 0) {
          section.style.display = 'none';
          return;
        }

        // Show section and populate dropdown
        section.style.display = 'block';
        select.innerHTML = '<option value="">Select a saved workflow...</option>';

        // Sort by most recently created first
        templates.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Limit to 10 most recent for quick access
        const recentTemplates = templates.slice(0, 10);

        recentTemplates.forEach(template => {
          const option = document.createElement('option');
          option.value = template.id;
          const type = IntelligenceType.findById(template.intelligenceTypeId);
          option.textContent = `${template.name} (${type?.name || 'Unknown'})`;
          select.appendChild(option);
        });

        if (templates.length > 10) {
          const moreOption = document.createElement('option');
          moreOption.value = '_more';
          moreOption.textContent = `... and ${templates.length - 10} more (click "Load Template")`;
          moreOption.disabled = true;
          select.appendChild(moreOption);
        }
      });
    }

    // Quick Workflow Selection Handler
    document.getElementById('quick-workflow-select').addEventListener('change', (e) => {
      const templateId = e.target.value;
      if (!templateId) return;

      SavedTemplate.getAll((templates) => {
        const template = templates.find(t => t.id === templateId);
        if (template) {
          // Load the template (reusing existing loadTemplate function from scope)
          loadTemplateFromQuickSelect(template);
        }
      });

      // Reset dropdown
      e.target.value = '';
    });

    // Separate function to load template from quick select (to avoid scope issues)
    function loadTemplateFromQuickSelect(template) {
      appState.selectedTypeId = template.intelligenceTypeId;
      appState.selectedDiscoveryAreaIds = [...template.selectedDiscoveryAreas];
      appState.customDiscoveryAreas = [...template.customDiscoveryAreas];

      if (template.targetSpecification) {
        appState.targetSpec = new TargetSpecification(template.targetSpecification);
        document.getElementById('target-name-input').value = template.targetSpecification.targetName || '';

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

        // Update completion checklist
        if (typeof updateCompletionChecklist === 'function') {
          updateCompletionChecklist();
        }
      }, 100);

      showNotification(`Loaded: ${template.name}`);
    }

    // T017: Intelligence type selection logic
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize - check storage quota on load
      checkStorageQuota();

      // Populate quick workflow dropdown
      populateQuickWorkflows();

      // New Prompt button
      document.getElementById('new-prompt-btn').addEventListener('click', () => {
        // Reset state
        appState = {
          selectedTypeId: null,
          selectedDiscoveryAreaIds: [],
          customDiscoveryAreas: [],
          targetSpec: null,
          promptStyle: { depth: 2, formality: 2, risk: 2 },
          multiTarget: { enabled: false, targets: [] }
        };

        // Reset sliders to default
        document.getElementById('depth-slider').value = 2;
        document.getElementById('formality-slider').value = 2;
        document.getElementById('risk-slider').value = 2;
        document.getElementById('depth-value').textContent = 'Standard';
        document.getElementById('formality-value').textContent = 'Professional';
        document.getElementById('risk-value').textContent = 'Balanced';

        populateIntelligenceTypes();
        document.getElementById('intelligence-setup-modal').showModal();
        document.getElementById('intelligence-next-btn').disabled = true;
      });

      // Prompt Style Slider Event Handlers
      function updateSliderValue(sliderId, valueId, labels, stateKey) {
        const slider = document.getElementById(sliderId);
        const valueDisplay = document.getElementById(valueId);

        slider.addEventListener('input', (e) => {
          const value = parseInt(e.target.value);
          valueDisplay.textContent = labels[value - 1];
          appState.promptStyle[stateKey] = value;
        });
      }

      updateSliderValue('depth-slider', 'depth-value', PROMPT_STYLE_LABELS.depth, 'depth');
      updateSliderValue('formality-slider', 'formality-value', PROMPT_STYLE_LABELS.formality, 'formality');
      updateSliderValue('risk-slider', 'risk-value', PROMPT_STYLE_LABELS.risk, 'risk');

      // Check premium status for prompt composer and multi-target
      chrome.storage.local.get(['isPremium'], (result) => {
        const composer = document.getElementById('prompt-composer-section');
        const multiTargetSection = document.getElementById('multi-target-section');

        if (!result.isPremium) {
          composer.classList.add('disabled');
          multiTargetSection.style.opacity = '0.6';
          document.getElementById('multi-target-toggle').disabled = true;
        }
      });

      // Multi-target toggle handler
      document.getElementById('multi-target-toggle').addEventListener('change', (e) => {
        const multiTargetInput = document.getElementById('multi-target-input');
        const singleTargetInput = document.getElementById('target-name-input');

        if (e.target.checked) {
          multiTargetInput.classList.add('visible');
          singleTargetInput.disabled = true;
          singleTargetInput.placeholder = 'Disabled in batch mode';
          appState.multiTarget.enabled = true;
        } else {
          multiTargetInput.classList.remove('visible');
          singleTargetInput.disabled = false;
          singleTargetInput.placeholder = 'e.g., John Smith, Acme Corp, New York City';
          appState.multiTarget.enabled = false;
          appState.multiTarget.targets = [];
        }
      });

      // Multi-target list input handler
      document.getElementById('multi-target-list').addEventListener('input', (e) => {
        const lines = e.target.value.split('\n').filter(line => line.trim().length > 0);
        const count = Math.min(lines.length, 50);
        appState.multiTarget.targets = lines.slice(0, 50).map(t => t.trim());

        const countDisplay = document.getElementById('target-count');
        if (count === 0) {
          countDisplay.textContent = '0 targets detected';
          countDisplay.style.color = '#6c757d';
        } else if (count >= 50) {
          countDisplay.textContent = `${count} targets (maximum reached)`;
          countDisplay.style.color = '#dc3545';
        } else {
          countDisplay.textContent = `${count} target${count > 1 ? 's' : ''} detected`;
          countDisplay.style.color = '#667eea';
        }
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

        // Update completion checklist
        if (typeof updateCompletionChecklist === 'function') {
          updateCompletionChecklist();
        }
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
        // Check if batch mode is enabled
        if (appState.multiTarget.enabled) {
          if (appState.multiTarget.targets.length === 0) {
            showNotification('Please enter at least one target');
            return;
          }
          generateBatchPrompts();
          return;
        }

        // Single target mode
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

      // Batch prompt generation
      function generateBatchPrompts() {
        const targets = appState.multiTarget.targets;
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
          timeframe = { type: 'custom', value: { start, end } };
        }

        // Generate all prompts
        const intelligenceType = IntelligenceType.findById(appState.selectedTypeId);
        const selectedAreas = appState.selectedDiscoveryAreaIds.map(id => {
          const area = DiscoveryArea.findById(id);
          return new DiscoveryArea(area);
        });

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

        const batchPrompts = targets.map(targetName => {
          const targetSpec = new TargetSpecification({
            targetName,
            timeframe,
            intelligenceTypeId: appState.selectedTypeId
          });

          const generatedPrompt = new GeneratedPrompt({
            intelligenceType: new IntelligenceType(intelligenceType),
            discoveryAreas: selectedAreas,
            targetSpecification: targetSpec,
            promptStyle: appState.promptStyle
          });

          return {
            target: targetName,
            content: generatedPrompt.generate(),
            characterCount: generatedPrompt.characterCount
          };
        });

        // Store batch prompts for sequential processing
        appState.batchPrompts = batchPrompts;
        appState.currentBatchIndex = 0;

        // Log batch generation to audit trail
        const intelligenceType = IntelligenceType.findById(appState.selectedTypeId);
        const totalChars = batchPrompts.reduce((sum, p) => sum + p.characterCount, 0);
        AuditLog.log({
          action: 'batch_generate',
          intelligenceType: intelligenceType?.name,
          targetName: targets.join(', ').substring(0, 100) + (targets.join(', ').length > 100 ? '...' : ''),
          targetCount: targets.length,
          discoveryAreas: appState.selectedDiscoveryAreaIds,
          promptStyle: appState.promptStyle,
          characterCount: totalChars
        });

        // Show batch UI elements
        document.getElementById('batch-navigation').style.display = 'flex';
        document.getElementById('copy-all-batch-btn').style.display = 'inline-block';
        document.getElementById('prompt-generated-modal').classList.add('batch-mode-active');

        // Update batch indicator
        updateBatchDisplay(0);

        document.getElementById('discovery-config-modal').close();
        document.getElementById('prompt-generated-modal').showModal();

        showNotification(`Generated ${targets.length} prompts. Use navigation or "Copy All" to export.`);
      }

      // Update batch display for current index
      function updateBatchDisplay(index) {
        const batchPrompts = appState.batchPrompts;
        if (!batchPrompts || batchPrompts.length === 0) return;

        const current = batchPrompts[index];
        const total = batchPrompts.length;

        // Update prompt text
        const header = `## Prompt ${index + 1} of ${total}: ${current.target}\n\n`;
        document.getElementById('generated-prompt-text').value = header + current.content;

        // Update character count
        document.getElementById('character-count').textContent =
          `Batch: ${total} prompts | Current: ${current.characterCount.toLocaleString()} chars`;

        // Update indicator
        document.getElementById('batch-indicator').textContent = `${index + 1} / ${total}`;

        // Update button states
        document.getElementById('batch-prev-btn').disabled = (index === 0);
        document.getElementById('batch-next-btn').disabled = (index === total - 1);

        document.getElementById('truncation-warning').style.display = 'none';
      }

      // Batch navigation: Previous
      document.getElementById('batch-prev-btn').addEventListener('click', () => {
        if (appState.currentBatchIndex > 0) {
          appState.currentBatchIndex--;
          updateBatchDisplay(appState.currentBatchIndex);
        }
      });

      // Batch navigation: Next
      document.getElementById('batch-next-btn').addEventListener('click', () => {
        if (appState.currentBatchIndex < appState.batchPrompts.length - 1) {
          appState.currentBatchIndex++;
          updateBatchDisplay(appState.currentBatchIndex);
        }
      });

      // Copy All Batch prompts
      document.getElementById('copy-all-batch-btn').addEventListener('click', async () => {
        const batchPrompts = appState.batchPrompts;
        if (!batchPrompts || batchPrompts.length === 0) {
          showNotification('No batch prompts to copy');
          return;
        }

        // Combine all prompts with separators
        const combined = batchPrompts.map((p, i) => {
          return `${'='.repeat(60)}\n` +
                 `PROMPT ${i + 1} of ${batchPrompts.length}: ${p.target}\n` +
                 `${'='.repeat(60)}\n\n` +
                 p.content;
        }).join('\n\n\n');

        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(combined);
          } else {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = combined;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          }
          showNotification(`Copied all ${batchPrompts.length} prompts to clipboard!`);
        } catch (error) {
          showNotification('Failed to copy to clipboard');
        }
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
          targetSpecification: appState.targetSpec,
          promptStyle: appState.promptStyle
        });

        const content = generatedPrompt.generate();

        // Log to audit trail
        AuditLog.log({
          action: 'generate',
          intelligenceType: intelligenceType?.name,
          targetName: appState.targetSpec?.targetName,
          targetCount: 1,
          discoveryAreas: selectedAreas.map(a => a.name),
          promptStyle: appState.promptStyle,
          characterCount: generatedPrompt.characterCount
        });

        // Save to prompt history
        PromptHistory.add({
          targetName: appState.targetSpec?.targetName,
          intelligenceType: intelligenceType?.name,
          content: content,
          characterCount: generatedPrompt.characterCount,
          promptStyle: appState.promptStyle
        });

        // Hide batch UI elements for single prompt
        document.getElementById('batch-navigation').style.display = 'none';
        document.getElementById('copy-all-batch-btn').style.display = 'none';
        document.getElementById('prompt-generated-modal').classList.remove('batch-mode-active');
        appState.batchPrompts = null;

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

      // Completion Checklist - Update function
      function updateCompletionChecklist() {
        const targetName = document.getElementById('target-name-input').value.trim();
        const timeframe = document.getElementById('timeframe-select').value;
        const selectedAreas = appState.selectedDiscoveryAreaIds.length;
        const customAreas = appState.customDiscoveryAreas.length;

        // Update target check
        const checkTarget = document.getElementById('check-target');
        if (checkTarget) {
          if (targetName.length > 0) {
            checkTarget.classList.add('checked');
            checkTarget.querySelector('.check-icon').textContent = '✓';
          } else {
            checkTarget.classList.remove('checked');
            checkTarget.querySelector('.check-icon').textContent = '○';
          }
        }

        // Update timeframe check
        const checkTimeframe = document.getElementById('check-timeframe');
        if (checkTimeframe) {
          if (timeframe && timeframe !== '') {
            checkTimeframe.classList.add('checked');
            checkTimeframe.querySelector('.check-icon').textContent = '✓';
          } else {
            checkTimeframe.classList.remove('checked');
            checkTimeframe.querySelector('.check-icon').textContent = '○';
          }
        }

        // Update areas check (3+ required)
        const checkAreas = document.getElementById('check-areas');
        if (checkAreas) {
          if (selectedAreas >= 3) {
            checkAreas.classList.add('checked');
            checkAreas.querySelector('.check-icon').textContent = '✓';
            checkAreas.querySelector('.check-label').textContent = `${selectedAreas} discovery areas selected`;
          } else {
            checkAreas.classList.remove('checked');
            checkAreas.querySelector('.check-icon').textContent = '○';
            checkAreas.querySelector('.check-label').textContent = `3+ discovery areas selected (${selectedAreas} selected)`;
          }
        }

        // Update custom areas check (optional)
        const checkCustom = document.getElementById('check-custom');
        if (checkCustom) {
          checkCustom.classList.add('optional');
          if (customAreas > 0) {
            checkCustom.classList.add('checked');
            checkCustom.querySelector('.check-icon').textContent = '✓';
            checkCustom.querySelector('.check-label').textContent = `${customAreas} custom area${customAreas > 1 ? 's' : ''} added`;
          } else {
            checkCustom.classList.remove('checked');
            checkCustom.querySelector('.check-icon').textContent = '○';
            checkCustom.querySelector('.check-label').textContent = 'Custom areas added (optional)';
          }
        }
      }

      // Add event listeners for checklist updates
      document.getElementById('target-name-input').addEventListener('input', updateCompletionChecklist);
      document.getElementById('timeframe-select').addEventListener('change', updateCompletionChecklist);

      // Markdown Export function
      document.getElementById('export-markdown-btn').addEventListener('click', () => {
        const prompt = document.getElementById('generated-prompt-text').value;
        const intelligenceType = IntelligenceType.findById(appState.selectedTypeId);
        const timestamp = new Date().toISOString().split('T')[0];
        const targetName = appState.targetSpec?.targetName || 'Unknown Target';

        // Create markdown content with metadata header
        const markdown = `---
title: BrightScope Intelligence Report
type: ${intelligenceType?.name || 'Unknown'}
target: ${targetName}
generated: ${new Date().toISOString()}
tool: BrightScope v1.0.1
---

${prompt}

---
*Generated by [BrightScope](https://brightscope.ai) - Professional Intelligence Research Platform*
`;

        // Create download
        const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        // Clean filename
        const cleanTarget = targetName.replace(/[^a-z0-9]/gi, '-').toLowerCase().substring(0, 30);
        link.download = `brightscope-${cleanTarget}-${timestamp}.md`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showNotification('Report exported to Markdown!');
      });

      // PDF Export - generates a print-friendly HTML page
      document.getElementById('export-pdf-btn').addEventListener('click', () => {
        const prompt = document.getElementById('generated-prompt-text').value;
        const intelligenceType = IntelligenceType.findById(appState.selectedTypeId);
        const timestamp = new Date().toLocaleString();
        const targetName = appState.targetSpec?.targetName || 'Unknown Target';
        const isBatch = appState.batchPrompts && appState.batchPrompts.length > 1;

        // Convert markdown-style content to HTML
        function markdownToHtml(text) {
          return text
            .replace(/^## (.+)$/gm, '<h2>$1</h2>')
            .replace(/^### (.+)$/gm, '<h3>$1</h3>')
            .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/^- (.+)$/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
            .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
            .replace(/---/g, '<hr>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>');
        }

        // Generate content for all prompts if batch mode
        let contentHtml = '';
        if (isBatch) {
          appState.batchPrompts.forEach((p, i) => {
            contentHtml += `
              <div class="prompt-section">
                <h2>Target ${i + 1}: ${escapeHTML(p.target)}</h2>
                <div class="prompt-content">${markdownToHtml(escapeHTML(p.content))}</div>
                ${i < appState.batchPrompts.length - 1 ? '<div class="page-break"></div>' : ''}
              </div>
            `;
          });
        } else {
          contentHtml = `<div class="prompt-content">${markdownToHtml(escapeHTML(prompt))}</div>`;
        }

        // Create print-friendly HTML document
        const printHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BrightScope Report - ${escapeHTML(targetName)}</title>
  <style>
    @page {
      margin: 1in;
      size: letter;
    }

    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 11pt;
      line-height: 1.6;
      color: #1a1a1a;
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.5in;
      background: white;
    }

    .header {
      border-bottom: 3px solid #667eea;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }

    .logo {
      font-size: 24pt;
      font-weight: bold;
      color: #667eea;
      margin: 0;
      letter-spacing: -0.5px;
    }

    .subtitle {
      color: #666;
      font-size: 10pt;
      margin: 5px 0 0 0;
    }

    .meta-info {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      background: #f8f9fa;
      padding: 15px 20px;
      border-radius: 8px;
      margin-bottom: 30px;
      border-left: 4px solid #667eea;
    }

    .meta-item {
      flex: 1;
      min-width: 150px;
    }

    .meta-label {
      font-size: 9pt;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0;
    }

    .meta-value {
      font-size: 12pt;
      font-weight: 600;
      color: #333;
      margin: 3px 0 0 0;
    }

    h1, h2, h3, h4 {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      color: #333;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }

    h1 { font-size: 20pt; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
    h2 { font-size: 16pt; color: #667eea; }
    h3 { font-size: 13pt; }
    h4 { font-size: 11pt; }

    p {
      margin: 0 0 1em 0;
    }

    ul, ol {
      margin: 0.5em 0 1em 0;
      padding-left: 1.5em;
    }

    li {
      margin: 0.3em 0;
    }

    hr {
      border: none;
      border-top: 1px solid #ddd;
      margin: 2em 0;
    }

    .prompt-content {
      background: #fafafa;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #e9ecef;
    }

    .prompt-section {
      margin-bottom: 40px;
    }

    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      font-size: 9pt;
      color: #666;
      text-align: center;
    }

    .page-break {
      page-break-after: always;
      margin: 30px 0;
      border-top: 2px dashed #ddd;
    }

    .confidential {
      color: #dc3545;
      font-weight: bold;
      font-size: 10pt;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @media print {
      body {
        padding: 0;
      }
      .no-print {
        display: none !important;
      }
      .page-break {
        page-break-after: always;
        border: none;
        margin: 0;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <p class="logo">BrightScope</p>
    <p class="subtitle">Intelligence Research Platform</p>
  </div>

  <div class="meta-info">
    <div class="meta-item">
      <p class="meta-label">Report Type</p>
      <p class="meta-value">${escapeHTML(intelligenceType?.name || 'Intelligence Report')}</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Target</p>
      <p class="meta-value">${escapeHTML(targetName)}</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Generated</p>
      <p class="meta-value">${timestamp}</p>
    </div>
    ${isBatch ? `
    <div class="meta-item">
      <p class="meta-label">Batch Size</p>
      <p class="meta-value">${appState.batchPrompts.length} targets</p>
    </div>
    ` : ''}
  </div>

  <p class="confidential">CONFIDENTIAL - FOR AUTHORIZED USE ONLY</p>

  ${contentHtml}

  <div class="footer">
    <p>Generated by BrightScope - Professional Intelligence Research Platform</p>
    <p>This document contains investigation guidance. Verify all findings independently.</p>
  </div>

  <div class="no-print" style="text-align: center; margin: 40px 0; padding: 20px; background: #f0f0f0; border-radius: 8px;">
    <p style="margin: 0 0 15px 0; font-weight: bold;">Print or Save as PDF</p>
    <button onclick="window.print()" style="padding: 10px 30px; font-size: 14px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer;">
      Print / Save as PDF
    </button>
    <p style="margin: 15px 0 0 0; font-size: 12px; color: #666;">
      Press Ctrl+P (or Cmd+P on Mac) to open print dialog, then select "Save as PDF"
    </p>
  </div>
</body>
</html>`;

        // Open in new tab
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write(printHtml);
          printWindow.document.close();
          showNotification('PDF report opened in new tab. Use Print → Save as PDF');
        } else {
          // Fallback: download as HTML
          const blob = new Blob([printHtml], { type: 'text/html;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          const cleanTarget = targetName.replace(/[^a-z0-9]/gi, '-').toLowerCase().substring(0, 30);
          link.download = `brightscope-${cleanTarget}-report.html`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          showNotification('Report downloaded as HTML. Open and print to PDF.');
        }
      });

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

              // Share button
              const shareBtn = document.createElement('button');
              shareBtn.className = 'share-btn';
              shareBtn.dataset.id = template.id;
              shareBtn.title = 'Copy share code';
              shareBtn.textContent = '🔗';

              const deleteBtn = document.createElement('button');
              deleteBtn.className = 'btn-delete';
              deleteBtn.dataset.id = template.id;
              deleteBtn.title = 'Delete template';
              deleteBtn.textContent = '×';

              infoDiv.addEventListener('click', () => {
                loadTemplate(template);
                document.getElementById('template-list-modal').close();
              });

              shareBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                shareTemplate(template.id);
              });

              deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteTemplate(template.id, template.name);
              });

              div.appendChild(infoDiv);
              div.appendChild(shareBtn);
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

      // Share template - generate and copy share code
      function shareTemplate(id) {
        SavedTemplate.createShareLink(id, async (shareCode, error) => {
          if (error) {
            showNotification('Failed to generate share code');
            return;
          }

          try {
            await navigator.clipboard.writeText(shareCode);
            showNotification('Share code copied to clipboard!');
          } catch (err) {
            // Fallback: show the code in a prompt
            prompt('Copy this share code:', shareCode);
          }
        });
      }

      // Import share code handler
      document.getElementById('import-share-code-btn').addEventListener('click', () => {
        const shareCode = document.getElementById('share-code-input').value.trim();

        if (!shareCode) {
          showNotification('Please enter a share code');
          return;
        }

        SavedTemplate.importFromShareCode(shareCode, (success, result) => {
          if (success) {
            showNotification(`Template "${result.name}" imported successfully!`);
            document.getElementById('share-code-input').value = '';
            // Refresh the template list
            document.getElementById('template-list-modal').close();
            document.getElementById('load-template-btn').click();
          } else {
            showNotification(`Import failed: ${result}`);
          }
        });
      });

      // Template Export - Export all templates as JSON
      document.getElementById('export-templates-btn').addEventListener('click', () => {
        SavedTemplate.exportAll((jsonString, error) => {
          if (error) {
            showNotification('Failed to export templates');
            return;
          }

          // Check if there are any templates to export
          const data = JSON.parse(jsonString);
          if (data.templateCount === 0) {
            showNotification('No templates to export');
            return;
          }

          // Create and download file
          const blob = new Blob([jsonString], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          const timestamp = new Date().toISOString().split('T')[0];
          link.download = `brightscope-templates-${timestamp}.json`;

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);

          showNotification(`Exported ${data.templateCount} template${data.templateCount > 1 ? 's' : ''}`);
        });
      });

      // Template Import - Trigger file input
      document.getElementById('import-templates-btn').addEventListener('click', () => {
        document.getElementById('import-file-input').click();
      });

      // Template Import - Handle file selection
      document.getElementById('import-file-input').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        if (!file.name.endsWith('.json')) {
          showNotification('Please select a JSON file');
          e.target.value = '';
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const jsonString = event.target.result;

          SavedTemplate.importFromJSON(jsonString, { merge: true }, (result) => {
            // Reset file input
            e.target.value = '';

            // Show results
            if (result.imported > 0) {
              let message = `Imported ${result.imported} template${result.imported > 1 ? 's' : ''}`;
              if (result.skipped > 0) {
                message += `, skipped ${result.skipped} duplicate${result.skipped > 1 ? 's' : ''}`;
              }
              showNotification(message);

              // Refresh template list
              document.getElementById('load-template-btn').click();
              checkStorageQuota();
            } else if (result.errors.length > 0) {
              showNotification(result.errors[0]);
            } else {
              showNotification('No templates were imported');
            }

            // Show detailed results if there are errors
            if (result.errors.length > 0 && result.imported > 0) {
              console.warn('Import warnings:', result.errors);
            }
          });
        };

        reader.onerror = () => {
          showNotification('Failed to read file');
          e.target.value = '';
        };

        reader.readAsText(file);
      });

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

      // Keyboard shortcuts handler
      document.addEventListener('keydown', (e) => {
        const openModals = document.querySelectorAll('dialog[open]');
        const hasOpenModal = openModals.length > 0;
        const activeElement = document.activeElement;
        const isTyping = activeElement.tagName === 'INPUT' ||
                         activeElement.tagName === 'TEXTAREA' ||
                         activeElement.isContentEditable;

        // ESC - Close modal
        if (e.key === 'Escape' && hasOpenModal) {
          openModals[openModals.length - 1].close();
          return;
        }

        // Shortcuts that work when not typing
        if (!isTyping) {
          // ? - Show keyboard shortcuts help
          if (e.key === '?') {
            e.preventDefault();
            showKeyboardShortcutsHelp();
            return;
          }

          // n - New prompt (when no modal open)
          if (e.key === 'n' && !hasOpenModal) {
            e.preventDefault();
            document.getElementById('new-prompt-btn').click();
            return;
          }

          // t - Load template (when no modal open)
          if (e.key === 't' && !hasOpenModal) {
            e.preventDefault();
            document.getElementById('load-template-btn').click();
            return;
          }

          // d - Toggle dark mode
          if (e.key === 'd' && !hasOpenModal) {
            e.preventDefault();
            ThemeManager.toggle();
            return;
          }
        }

        // Ctrl/Cmd shortcuts
        if (e.ctrlKey || e.metaKey) {
          // Ctrl+Enter - Generate prompt (in discovery config modal)
          if (e.key === 'Enter') {
            const discoveryModal = document.getElementById('discovery-config-modal');
            if (discoveryModal.open) {
              e.preventDefault();
              document.getElementById('generate-prompt-btn').click();
              return;
            }
          }

          // Ctrl+C - Copy (when prompt modal is open and not selecting text)
          if (e.key === 'c' && !window.getSelection().toString()) {
            const promptModal = document.getElementById('prompt-generated-modal');
            if (promptModal.open) {
              e.preventDefault();
              document.getElementById('copy-clipboard-btn').click();
              return;
            }
          }

          // Ctrl+S - Save template (when prompt modal is open)
          if (e.key === 's') {
            const promptModal = document.getElementById('prompt-generated-modal');
            if (promptModal.open) {
              e.preventDefault();
              document.getElementById('save-template-btn').click();
              return;
            }
          }

          // Ctrl+P - Export PDF (when prompt modal is open)
          if (e.key === 'p') {
            const promptModal = document.getElementById('prompt-generated-modal');
            if (promptModal.open) {
              e.preventDefault();
              document.getElementById('export-pdf-btn').click();
              return;
            }
          }
        }

        // Arrow key navigation for batch mode
        const promptModal = document.getElementById('prompt-generated-modal');
        if (promptModal.open && appState.batchPrompts && appState.batchPrompts.length > 1) {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            document.getElementById('batch-prev-btn').click();
            return;
          }
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            document.getElementById('batch-next-btn').click();
            return;
          }
        }
      });

      // Keyboard shortcuts help modal
      function showKeyboardShortcutsHelp() {
        const shortcuts = [
          { key: 'n', desc: 'New prompt' },
          { key: 't', desc: 'Load template' },
          { key: 'd', desc: 'Toggle dark mode' },
          { key: 'Ctrl+Enter', desc: 'Generate prompt' },
          { key: 'Ctrl+C', desc: 'Copy to clipboard' },
          { key: 'Ctrl+S', desc: 'Save template' },
          { key: 'Ctrl+P', desc: 'Export as PDF' },
          { key: '← →', desc: 'Navigate batch prompts' },
          { key: 'Esc', desc: 'Close modal' },
          { key: '?', desc: 'Show this help' }
        ];

        const helpHtml = shortcuts.map(s =>
          `<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
            <kbd style="background: #f4f4f4; padding: 4px 10px; border-radius: 4px; font-family: monospace; font-size: 13px; border: 1px solid #ddd;">${s.key}</kbd>
            <span style="color: #666;">${s.desc}</span>
          </div>`
        ).join('');

        const overlay = document.createElement('div');
        overlay.id = 'shortcuts-overlay';
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100000;
        `;
        overlay.innerHTML = `
          <div style="background: white; border-radius: 12px; padding: 24px; max-width: 320px; width: 90%; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <h3 style="margin: 0; color: #333;">Keyboard Shortcuts</h3>
              <button id="close-shortcuts" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #999;">&times;</button>
            </div>
            ${helpHtml}
            <p style="margin: 16px 0 0 0; font-size: 12px; color: #999; text-align: center;">
              Press ? anytime to show this help
            </p>
          </div>
        `;

        document.body.appendChild(overlay);

        // Close handlers
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay || e.target.id === 'close-shortcuts') {
            overlay.remove();
          }
        });
        document.addEventListener('keydown', function closeOnEsc(e) {
          if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', closeOnEsc);
          }
        });
      }

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

    // Audit Log UI Handlers
    document.addEventListener('DOMContentLoaded', () => {
      // Open audit log modal
      document.getElementById('view-audit-log-btn').addEventListener('click', () => {
        refreshAuditLogDisplay();
        document.getElementById('audit-log-modal').showModal();
      });

      // Export CSV
      document.getElementById('export-audit-csv').addEventListener('click', () => {
        AuditLog.exportCSV((csv, error) => {
          if (error) {
            showNotification(error);
            return;
          }
          const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `brightscope-audit-${new Date().toISOString().split('T')[0]}.csv`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          showNotification('Audit log exported as CSV');
        });
      });

      // Export JSON
      document.getElementById('export-audit-json').addEventListener('click', () => {
        AuditLog.exportJSON((json) => {
          if (json === '[]') {
            showNotification('No audit logs to export');
            return;
          }
          const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `brightscope-audit-${new Date().toISOString().split('T')[0]}.json`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          showNotification('Audit log exported as JSON');
        });
      });

      // Clear log
      document.getElementById('clear-audit-log').addEventListener('click', () => {
        if (confirm('Clear all activity logs? This cannot be undone.')) {
          AuditLog.clear(() => {
            refreshAuditLogDisplay();
            showNotification('Activity log cleared');
          });
        }
      });
    });

    // Refresh the audit log display
    function refreshAuditLogDisplay() {
      const container = document.getElementById('audit-log-list');

      AuditLog.getAll((logs) => {
        if (logs.length === 0) {
          container.innerHTML = '<p class="audit-empty">No activity recorded yet.</p>';
          return;
        }

        const actionLabels = {
          'generate': 'Prompt Generated',
          'batch_generate': 'Batch Generated',
          'copy': 'Copied to Clipboard',
          'export_md': 'Exported as Markdown',
          'export_pdf': 'Exported as PDF'
        };

        const actionIcons = {
          'generate': { icon: '⚡', class: 'generate' },
          'batch_generate': { icon: '📦', class: 'batch' },
          'copy': { icon: '📋', class: 'copy' },
          'export_md': { icon: '📄', class: 'export' },
          'export_pdf': { icon: '📑', class: 'export' }
        };

        container.innerHTML = logs.map(log => {
          const iconInfo = actionIcons[log.action] || { icon: '•', class: 'generate' };
          const label = actionLabels[log.action] || log.action;
          const date = new Date(log.timestamp);
          const timeAgo = getTimeAgo(date);

          return `
            <div class="audit-entry">
              <div class="audit-icon ${iconInfo.class}">${iconInfo.icon}</div>
              <div class="audit-details">
                <p class="audit-action">${escapeHTML(label)}</p>
                <p class="audit-target">${escapeHTML(log.targetName || 'Unknown target')}${log.targetCount > 1 ? ` (+${log.targetCount - 1} more)` : ''}</p>
                <p class="audit-meta">${escapeHTML(log.intelligenceType || '')} • ${log.characterCount?.toLocaleString() || 0} chars</p>
              </div>
              <span class="audit-time">${timeAgo}</span>
            </div>
          `;
        }).join('');
      });
    }

    // Helper to format relative time
    function getTimeAgo(date) {
      const now = new Date();
      const seconds = Math.floor((now - date) / 1000);

      if (seconds < 60) return 'Just now';
      if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
      if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
      if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;

      return date.toLocaleDateString();
    }

    // Dark Mode Handler
    const ThemeManager = {
      STORAGE_KEY: 'brightscope_theme',

      init() {
        // Load saved preference or detect system preference
        chrome.storage.local.get([this.STORAGE_KEY], (result) => {
          const savedTheme = result[this.STORAGE_KEY];

          if (savedTheme) {
            this.setTheme(savedTheme);
          } else {
            // Use system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            // Don't set explicit theme, let CSS media query handle it
            // But update button state
            this.updateButtonState(prefersDark ? 'dark' : 'light');
          }
        });

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          // Only react if no explicit theme is set
          chrome.storage.local.get([this.STORAGE_KEY], (result) => {
            if (!result[this.STORAGE_KEY]) {
              this.updateButtonState(e.matches ? 'dark' : 'light');
            }
          });
        });

        // Set up toggle button
        document.getElementById('theme-toggle-btn').addEventListener('click', () => {
          this.toggle();
        });
      },

      setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        chrome.storage.local.set({ [this.STORAGE_KEY]: theme });
        this.updateButtonState(theme);
      },

      updateButtonState(theme) {
        const btn = document.getElementById('theme-toggle-btn');
        btn.setAttribute('data-current-theme', theme);
        btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      },

      toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        let newTheme;

        if (current === 'dark') {
          newTheme = 'light';
        } else if (current === 'light') {
          newTheme = 'dark';
        } else {
          // No explicit theme, detect current and toggle
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          newTheme = prefersDark ? 'light' : 'dark';
        }

        this.setTheme(newTheme);
      },

      getTheme() {
        return document.documentElement.getAttribute('data-theme') ||
               (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      }
    };

    // Initialize theme manager on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
      ThemeManager.init();
    });

    // Prompt History UI Handlers
    document.addEventListener('DOMContentLoaded', () => {
      // Open history modal
      document.getElementById('view-history-btn').addEventListener('click', () => {
        refreshHistoryDisplay();
        document.getElementById('prompt-history-modal').showModal();
      });

      // Search history
      document.getElementById('history-search-input').addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length === 0) {
          refreshHistoryDisplay();
        } else {
          PromptHistory.search(query, (results) => {
            renderHistoryList(results);
          });
        }
      });

      // Clear history
      document.getElementById('clear-history-btn').addEventListener('click', () => {
        if (confirm('Clear all prompt history? This cannot be undone.')) {
          PromptHistory.clear(() => {
            refreshHistoryDisplay();
            showNotification('Prompt history cleared');
          });
        }
      });
    });

    // Refresh history display
    function refreshHistoryDisplay() {
      document.getElementById('history-search-input').value = '';
      PromptHistory.getAll((history) => {
        renderHistoryList(history);
      });
    }

    // Render history list
    function renderHistoryList(history) {
      const container = document.getElementById('history-list');

      if (history.length === 0) {
        container.innerHTML = '<p class="history-empty">No prompts generated yet.</p>';
        return;
      }

      container.innerHTML = history.map(entry => {
        const date = new Date(entry.timestamp);
        const timeAgo = getTimeAgo(date);
        const preview = (entry.content || '').substring(0, 80).replace(/\n/g, ' ');

        return `
          <div class="history-entry" data-id="${entry.id}">
            <div class="history-entry-header">
              <p class="history-target">${escapeHTML(entry.targetName || 'Unknown Target')}</p>
              <span class="history-time">${timeAgo}</span>
            </div>
            <p class="history-meta">${escapeHTML(entry.intelligenceType || 'Unknown Type')} • ${(entry.characterCount || 0).toLocaleString()} chars</p>
            <p class="history-preview">${escapeHTML(preview)}...</p>
          </div>
        `;
      }).join('');

      // Add click handlers
      container.querySelectorAll('.history-entry').forEach(el => {
        el.addEventListener('click', () => {
          const id = el.dataset.id;
          loadPromptFromHistory(id);
        });
      });
    }

    // Load prompt from history
    function loadPromptFromHistory(id) {
      PromptHistory.getById(id, (entry) => {
        if (!entry) {
          showNotification('Prompt not found');
          return;
        }

        // Close history modal
        document.getElementById('prompt-history-modal').close();

        // Show the prompt in the generated modal
        document.getElementById('batch-navigation').style.display = 'none';
        document.getElementById('copy-all-batch-btn').style.display = 'none';
        document.getElementById('prompt-generated-modal').classList.remove('batch-mode-active');

        document.getElementById('generated-prompt-text').value = entry.content;
        document.getElementById('character-count').textContent = `${(entry.characterCount || 0).toLocaleString()} / 8,000 characters`;
        document.getElementById('truncation-warning').style.display = 'none';

        document.getElementById('prompt-generated-modal').showModal();
        showNotification('Loaded prompt from history');
      });
    }
