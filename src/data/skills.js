import {
  Database,
  GitBranch,
  Laptop,
  Layers,
  Shield,
  Terminal,
} from 'lucide-react'

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: Laptop,
    skills: [
      'React.js',
      'Vite',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend',
    icon: Terminal,
    skills: ['Laravel', 'PHP', 'Python', 'Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'Sequelize', 'NoSQL'],
  },
  {
    title: 'Architecture & Security',
    icon: Shield,
    skills: ['UML', 'Modélisation de projets', 'Sécurité des données'],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'PyCharm',
      'XAMPP',
      'MS Office',
      'Canva',
    ],
  },
  {
    title: 'Other',
    icon: Layers,
    skills: ['REST APIs', 'Clean Code'],
  },
]
