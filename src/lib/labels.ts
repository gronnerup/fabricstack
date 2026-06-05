/**
 * Human-readable labels and descriptions for the controlled vocabularies
 * defined in src/content/config.ts. Single source of truth for display copy.
 */

export const CATEGORY_LABELS: Record<string, string> = {
  'platform-apis': 'Platform, APIs & SDKs',
  'devops-cicd': 'DevOps & CI/CD',
  'ai-mcp': 'AI, Copilot & MCP',
  'semantic-modeling': 'Semantic Modeling',
  'dax-performance': 'DAX & Performance',
  'reporting-embedding': 'Reporting & Embedding',
  'ide-extensibility': 'IDE & Extensibility',
  'data-engineering': 'Data Engineering',
  'data-science-ml': 'Data Science & ML',
  'data-warehouse': 'Data Warehouse',
  'real-time-intelligence': 'Real-Time Intelligence',
  databases: 'Databases',
  'data-factory-integration': 'Data Factory & Integration',
  'governance-admin': 'Governance & Admin',
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'platform-apis': 'CLIs, REST APIs, and language SDKs for programmatic access to the platform.',
  'devops-cicd': 'Deployment, CI/CD pipelines, and infrastructure-as-code.',
  'ai-mcp': 'MCP servers and AI- and agent-assisted development tools.',
  'semantic-modeling': 'Building, editing, and deploying semantic models and TMDL.',
  'dax-performance': 'DAX authoring, optimization, and model performance analysis.',
  'reporting-embedding': 'Report authoring, the PBIR format, and embedding in apps.',
  'ide-extensibility': 'Editor extensions and building custom Fabric workloads.',
  'data-engineering': 'Notebooks, Spark, lakehouse, and pipelines for ingest and transform.',
  'data-science-ml': 'ML training, experiment tracking, and data science tooling.',
  'data-warehouse': 'Fabric Warehouse and SQL endpoints.',
  'real-time-intelligence': 'Eventhouse, KQL, eventstreams, and real-time dashboards.',
  databases: 'Fabric SQL DB and mirroring.',
  'data-factory-integration': 'Data Factory, Dataflows Gen2, and copy jobs.',
  'governance-admin': 'Capacity, monitoring, lineage, and tenant administration.',
};

export const TYPE_LABELS: Record<string, string> = {
  cli: 'CLI',
  sdk: 'SDK',
  api: 'API',
  mcp: 'MCP',
  library: 'Library',
  framework: 'Framework',
  extension: 'Extension',
  'desktop-app': 'Desktop app',
  'web-app': 'Web app',
  template: 'Template',
  service: 'Service',
};

export const PRICING_LABELS: Record<string, string> = {
  free: 'Free',
  freemium: 'Freemium',
  paid: 'Paid',
};

export const SOURCE_LABELS: Record<string, string> = {
  'open-source': 'Open source',
  'source-available': 'Source-available',
  proprietary: 'Proprietary',
};

export const MAINTAINER_LABELS: Record<string, string> = {
  microsoft: 'Microsoft',
  community: 'Community',
  vendor: 'Vendor',
};

export const STATUS_LABELS: Record<string, string> = {
  preview: 'Preview',
  ga: 'GA',
  deprecated: 'Deprecated',
};
