export type Track = {
  id: string;
  title: string;
  area: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  description: string;
  completion: number;
  modules: string[];
};

export const tracks: Track[] = [
  {
    id: '1',
    title: 'Fundamentos de IA para o Trabalho',
    area: 'Inteligência Artificial',
    level: 'Iniciante',
    description:
      'Introdução à IA aplicada ao dia a dia profissional, automação de tarefas e tomada de decisão baseada em dados.',
    completion: 0.3,
    modules: [
      'O que é IA e Machine Learning?',
      'Ferramentas de IA no escritório',
      'Automatizando tarefas repetitivas',
      'Ética e responsabilidade no uso da IA',
    ],
  },
  {
    id: '2',
    title: 'Sustentabilidade e ESG na Prática',
    area: 'Sustentabilidade',
    level: 'Intermediário',
    description:
      'Trilha focada em práticas sustentáveis nas empresas, ESG e oportunidades verdes no mercado de trabalho.',
    completion: 0.6,
    modules: [
      'ODS e Agenda 2030',
      'Conceitos de ESG',
      'Projetos sustentáveis no trabalho',
      'Carreira em economia verde',
    ],
  },
  {
    id: '3',
    title: 'Soft Skills para o Futuro do Trabalho',
    area: 'Soft Skills',
    level: 'Iniciante',
    description:
      'Comunicação, colaboração, pensamento crítico e outras habilidades comportamentais exigidas até 2030.',
    completion: 0.8,
    modules: [
      'Comunicação clara e empática',
      'Trabalho em equipe remoto',
      'Resolução de conflitos',
      'Aprendizado contínuo (lifelong learning)',
    ],
  },
];
