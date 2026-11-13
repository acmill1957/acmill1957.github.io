export interface Experience {
  role: string;
  company: string;
  logo: string;
  dates: string;
  bullets: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    role: 'Junior Web Developer',
    company: 'CablesAndKits',
    logo: 'images/cablesandkits.jpeg',
    dates: '[Start] — Present', // TODO: Add employment start date.
    bullets: [
      'Develop and maintain a hybrid web application combining a modern Laravel backend with legacy PHP components for order management, customer relations, and business operations.',
      'Manage the feature lifecycle through GitHub workflows — coordinating requirements with business teams, code reviews, and deployment of bug fixes and performance improvements.',
      'Refactor legacy code to Laravel best practices, including replacing env() calls with config() helpers to enable configuration caching.',
      'Implement full-stack features from database schema design through frontend interfaces.',
      'Experience with highly Agentic workflows used to boost productivity'
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'GitHub Actions'],
  },
];
