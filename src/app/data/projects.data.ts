import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'cv-site',
    name: 'This CV site',
    description:
      'Interactive personal CV built with Angular 22 and Tailwind CSS, deployed on Cloudflare Pages as a static SPA.',
    stack: ['Angular 22', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],
    status: 'completed',
    repoUrl: 'https://github.com/KociTomas03/interactive-cv',
    track: ['frontend'],
  },
  {
    id: 'bsc-thesis',
    name: 'Synthesis of Explainable Controllers for POMDPs',
    description:
      'Synthesized compact, human-readable finite-state controllers for POMDPs — agents that act optimally under uncertainty while staying small enough to interpret. Extended the PAYNT synthesis tool (built on Storm) in Python.',
    stack: ['Python', 'PAYNT', 'Storm', 'Formal Methods', 'POMDPs'],
    status: 'completed',
    repoUrl: 'https://github.com/KociTomas03/synthesis',
    demoUrl: 'https://www.vut.cz/www_base/zav_prace_soubor_verejne.php?file_id=293227',
    track: ['backend'],
  },
];
