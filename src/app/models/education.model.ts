export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: { from: string; to: string | 'present' };
  thesis?: string;
  thesisUrl?: string;
  url?: string;
  status: 'completed' | 'in-progress';
}
