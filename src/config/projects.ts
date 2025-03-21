// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
  iconName?: string
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Certificates"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'DBT & snowflake bootcamp',
    description: '',
    date: '2025',
    location: 'Udemy project',
  },
  {
    name: 'SAS Base Programming Specialist',
    description: '',
    date: '2022',
    location: 'Ithaca, NY',
  }
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Formula-One Data pipeline in MS Azure',
    description: 'ELT scalable data solution',
    link: { href: 'https://github.com', label: 'GitHub' },
    tags: ['Data Engineering', 'Microsoft Azure', 'ELT', 'Orchestration'],
    iconName: 'cloud'
  },
  {
    name: 'Extracting Entities from public violation records',
    description: 'ETL end-to-end data pipeline',
    link: { href: 'https://github.com/jl-3586/qf_cornellmps_fall23', label: '' },
    tags: ['Web Scraping', 'ETL', 'OCR', 'Docker'],
    iconName: 'database'
  },
  {
    name: 'Clustering analysis on Chronic Kidney Disease patients',
    description: 'ML time-series modeling',
    link: { href: 'https://drive.google.com/file/d/1tHNpHS0Pz-KHFmz7X3HuL07WAIpk82GG/view', label: 'Project Documentation'},
    tags: ['ML modeling', 'time-series analysis', 'Unsupervised Learning'],
    iconName: 'pill'
  },
]
