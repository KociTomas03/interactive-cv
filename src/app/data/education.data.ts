import { Education } from '../models/education.model';

export const EDUCATION: Education[] = [
  {
    institution: 'Brno University of Technology (FIT VUT)',
    degree: 'Bc.',
    field: 'Information Technology',
    period: { from: '2022', to: '2026' },
    thesis: 'Synthesis of Explainable Controllers for POMDPs',
    thesisUrl: 'https://www.vut.cz/www_base/zav_prace_soubor_verejne.php?file_id=293227',
    url: 'https://www.fit.vut.cz/',
    status: 'completed',
  },
  {
    institution: 'Grammar School Brno, Vídeňská',
    degree: '',
    field: 'Six-year program with specialization in programming',
    period: { from: '2016', to: '2022' },
    url: 'https://www.gvid.cz/organizace-skolniho-roku/skolni-vzdelavaci-programy/',
    status: 'completed',
  },
];
