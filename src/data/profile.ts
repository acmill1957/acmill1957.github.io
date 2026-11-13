export interface Link {
  label: string;
  href: string | null;
}

export const profile = {
  name: 'Austin Miller',
  title: 'Web / Software Developer',
  summary: 'Full-stack developer building and modernizing Laravel applications. Detail-oriented, eager to learn, and focused on shipping work that helps the whole team.',
  about: 'Full-stack web developer with a Computer Science degree from the University of Georgia and hands-on professional experience building and maintaining Laravel applications. I specialize in PHP/Laravel development, database design, and modernizing legacy codebases, working closely with cross-functional teams to deliver scalable solutions.',
  email: 'austimanmiller@gmail.com',
  phone: '563-940-4417',
  photo: 'images/austin-profile.jpg',
  brand: { first: 'austin', last: 'miller' },
  pageTitle: 'Austin Miller — Portfolio',
  copyrightYear: 2026,
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

// TODO: Replace placeholder labels and null hrefs with the real destinations.
// Null hrefs render as text so unfinished links do not jump to the top.
export const ctas: Link[] = [
  { label: 'Get in touch', href: `mailto:${profile.email}` },
  { label: '[Résumé PDF]', href: null },
  { label: '[GitHub]', href: null },
];

export const footerLinks: Link[] = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: '[GitHub]', href: null },
  { label: '[LinkedIn]', href: null },
];

export const sections = [
  { id: 'about', number: '01', title: 'About' },
  { id: 'experience', number: '02', title: 'Experience' },
  { id: 'skills', number: '03', title: 'Skills' },
  { id: 'education', number: '04', title: 'Education' },
] as const;
