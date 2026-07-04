import { SkillGroup } from '../models/skill.model';

export const SKILLS: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'Java', 'SQL', 'HTML5', 'CSS'],
  },
  {
    category: 'Frameworks & Tools',
    skills: ['Angular', 'Svelte', 'FastAPI', 'SQLAlchemy', 'Tailwind CSS'],
  },
  {
    category: 'Databases & Infrastructure',
    skills: ['MySQL', 'MongoDB', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Git'],
  },
  {
    category: 'Formal Methods',
    skills: ['Probabilistic model checking', 'POMDPs', 'PAYNT', 'Storm'],
  },
];
