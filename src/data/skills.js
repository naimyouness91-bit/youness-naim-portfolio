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
    id: 'frontend',
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
    id: 'backend',
    title: 'Backend',
    icon: Terminal,
    skills: ['Laravel', 'PHP', 'Python', 'Node.js', 'Express.js'],
  },
  {
    id: 'databases',
    title: { fr: 'Bases de données', en: 'Databases' },
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'Sequelize', 'NoSQL'],
  },
  {
    id: 'architecture',
    title: { fr: 'Architecture & Sécurité', en: 'Architecture & Security' },
    icon: Shield,
    skills: [
      'UML',
      { fr: 'Modélisation de projets', en: 'Project Design' },
      { fr: 'Sécurité des données', en: 'Data Security' },
    ],
  },
  {
    id: 'tools',
    title: { fr: 'Outils', en: 'Tools' },
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
    id: 'other',
    title: { fr: 'Autres', en: 'Other' },
    icon: Layers,
    skills: ['REST APIs', 'Clean Code'],
  },
]
