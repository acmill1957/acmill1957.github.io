export interface Skill {
  title: string;
  icon: 'code' | 'coffee' | 'database' | 'monitor';
  items: string[];
}

export const skills: Skill[] = [
  {
    title: 'PHP & Laravel', icon: 'code',
    items: ['Professional PHP and Laravel development', 'Building scalable, secure web applications', 'Eloquent ORM and Blade templating'],
  },
  {
    title: 'Java', icon: 'coffee',
    items: ['Object-oriented design and design patterns', 'Application development with Spring Boot', 'Data structures and algorithms'],
  },
  {
    title: 'Databases', icon: 'database',
    items: ['Relational schema design', 'SQL / MySQL in production systems', 'Query investigation and debugging'],
  },
  {
    title: 'Frontend', icon: 'monitor',
    items: ['HTML, CSS, JavaScript', 'React fundamentals', 'Tailwind CSS'],
  },
];
