import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Controlled vocabularies (SPEC §4.2–§4.8).
 * Exported so pages/components can iterate filter options from a single source
 * of truth instead of hard-coding enum values.
 */
export const CATEGORIES = [
  // Discipline categories: what you use the tool for.
  'platform-apis',
  'devops-cicd',
  'ai-mcp',
  'semantic-modeling',
  'dax-performance',
  'reporting-embedding',
  'ide-extensibility',
  // Fabric workload categories.
  'data-engineering',
  'data-science-ml',
  'data-warehouse',
  'real-time-intelligence',
  'databases',
  'data-factory-integration',
  'governance-admin',
] as const;

export const TYPES = [
  'cli',
  'sdk',
  'api',
  'mcp',
  'library',
  'framework',
  'extension',
  'desktop-app',
  'web-app',
  'template',
  'service',
] as const;

export const PRICING = ['free', 'freemium', 'paid'] as const;

export const SOURCES = ['open-source', 'source-available', 'proprietary'] as const;

export const MAINTAINERS = ['microsoft', 'community', 'vendor'] as const;

export const STATUSES = ['preview', 'ga', 'deprecated'] as const;

/**
 * Catalog entry schema (SPEC §4.1). Enforced at build time; `astro build`
 * fails if any required field is missing or any enum value is unknown.
 */
const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    docs_url: z.string().url().optional(),
    repo_url: z.string().url().optional(),
    category: z.enum(CATEGORIES),
    type: z.enum(TYPES),
    tags: z.array(z.string()).max(6).default([]),
    pricing: z.enum(PRICING),
    source: z.enum(SOURCES),
    maintainer: z.enum(MAINTAINERS),
    author: z.string(),
    language: z.string().optional(),
    status: z.enum(STATUSES).default('ga'),
    added: z.coerce.date(),
  }),
});

export const collections = { tools };
