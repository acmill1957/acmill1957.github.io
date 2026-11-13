export interface Education {
  school: string;
  degree: string;
  logo: string;
  year: string;
  courses?: { title: string; summary: string }[];
}

export const education: Education[] = [
  {
    school: 'University of Georgia',
    degree: 'B.S. Computer Science',
    logo: 'images/uga.png',
    year: '[Year]', // TODO: Add graduation year.
    courses: [
      { title: 'Software Engineering', summary: 'SDLC and development methodologies; final Spring Boot project.' },
      { title: 'Web Development', summary: 'HTML, CSS, JavaScript and React; final web project.' },
      { title: 'Database Management', summary: 'Relational databases and SQL across multiple full-stack projects.' },
      { title: 'Computer Networks', summary: 'Architecture, protocols and security, alongside CCNA study.' },
    ],
  },
  {
    school: 'University of North Georgia',
    degree: 'A.S. Computer Science',
    logo: 'images/ung.png',
    year: '[Year]', // TODO: Add graduation year.
  },
];
