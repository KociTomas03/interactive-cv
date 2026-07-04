export interface Experience {
  id: string;
  company: string;
  role: string;
  period: { from: string; to: string | 'present' };
  stack: string[];
  summary: string;
  bullets: string[];
  track: 'backend' | 'frontend';
}
