import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    id: 'seznam',
    company: 'Seznam.cz',
    role: 'Backend Developer',
    period: { from: 'Apr 2026', to: 'present' },
    stack: ['Python', 'FastAPI', 'REST APIs'],
    summary: 'Processing and serving Czech election data at scale — the Czech Statistical Office (ČSÚ) is the source of truth; the job is to ingest it fast and relay it reliably when every second counts.',
    bullets: [
      'Build and maintain backend services that consume election data from the Czech Statistical Office (ČSÚ) — parties, candidates, constituencies, and results — and serve it to downstream consumers.',
      'On election night, the system ingests and relays live vote counts from ČSÚ in real time — latency directly affects what millions of viewers see, so throughput and reliability are non-negotiable.',
      'Built an internal API-diffing tool that compares two versions of an API and surfaces schema changes, giving frontend developers immediate visibility into what changed between releases.',
    ],
    track: 'backend',
  },
  {
    id: 'atos',
    company: 'Atos',
    role: 'Frontend Developer',
    period: { from: 'Mar 2023', to: 'Apr 2026' },
    stack: ['Angular', 'TypeScript', 'JavaScript', 'CSS'],
    summary: 'Took end-to-end ownership of multiple product areas within an enterprise IAM application — data modelling, infrastructure, and UI — across the full journey from prototype to production.',
    bullets: [
      'Claimed ownership of multiple product components end-to-end, making decisions across data models, application structure, and UI — on a greenfield project with no dedicated architect.',
      'Migrated a legacy identity & access management tool into a fully web-based application, covering both the frontend and infrastructure layer.',
      'Consistently pushed beyond the initial brief — proposed and implemented UX and product improvements that shaped the product\'s direction over three years.',
    ],
    track: 'frontend',
  },
  {
    id: 'ids',
    company: 'IDS (Intentionally Designed Solutions)',
    role: 'Frontend Developer',
    period: { from: 'Apr 2022', to: 'Jan 2023' },
    stack: ['Svelte', 'TypeScript', 'JavaScript', 'MongoDB'],
    summary: 'Built responsive Svelte applications for desktop, tablet, and mobile, contributing reusable components across client projects.',
    bullets: [
      'Developed responsive web applications across desktop, tablet, and mobile using Svelte.',
      'Contributed reusable UI components shared across client projects, improving consistency across the team.',
    ],
    track: 'frontend',
  },
];
