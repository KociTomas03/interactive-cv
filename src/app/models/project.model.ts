export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  status: 'in-progress' | 'completed';
  repoUrl?: string;
  demoUrl?: string;
  track: ('backend' | 'frontend')[];
}
