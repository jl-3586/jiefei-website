export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Jiefei Li'
export const headline = 'Welcome to my porfolio website'
export const introduction =
  "I'm a data professional with expertise in data science and engineering. Graduated from Master's program in Data Science from Cornell University, my experience spans across building scalable data pipelines, implementing machine learning models, and developing insightful visualizations to drive data-driven decision-making."
export const email = 'jl3586@cornell.edu'
export const githubUsername = 'jl-3586'

// about page
export const aboutMeHeadline = 'Jiefei Li – Data Scientist & Engineer'
export const aboutParagraphs = [
  "Welcome! I'm Jiefei Li, a data scientist with a strong foundation in statistics, psychology, and machine learning. I thrive at the intersection of data engineering and AI, leveraging advanced analytics to extract meaningful insights and build impactful solutions.",
  
  "📍 Who Am I?",
  "I hold a Master's in Data Science from Cornell University and a Bachelor's in Statistics and Psychology from UC Davis. My academic background has equipped me with a solid understanding of data-driven decision-making, statistical modeling, and machine learning.",
  
  "💻 What I Do",
  "With experience in natural language processing (NLP), machine learning, and cloud-based data engineering, I've built and optimized data pipelines, developed predictive models, and engineered scalable solutions across multiple domains. Some highlights of my work include:",
  
  "• NLP & AI: Built pipelines to process psychiatric patient audio data, applying speech recognition and large language models (LLMs) to extract high-quality features.",
  "• Machine Learning: Developed hierarchical classification models for mental health diagnoses using LightGBM, achieving high accuracy.",
  "• Data Engineering: Created an end-to-end ELT pipeline for analyzing 20+ years of Formula One data using Microsoft Azure Databricks, Spark, and Power BI.",
  "• Healthcare Analytics: Applied clustering techniques to segment chronic kidney disease (CKD) patients, improving personalized treatment strategies.",
  
  "🛠️ Technical Skills",
  "Programming & Data Tools: Python, SQL, R, SAS, Scala, Power BI, Tableau, Apache Spark, Hadoop",
  "Cloud & Infrastructure: MS Azure, Snowflake, DBT, PostgreSQL",
  "Machine Learning & AI: Scikit-learn, PyTorch, NLP, LightGBM, Random Forest",
  "Certifications: Certified SAS Base Programming Specialist",
  
  "🚀 My Passion",
  "I'm passionate about transforming raw data into actionable insights, developing scalable data solutions, and leveraging AI for impactful real-world applications. Whether it's optimizing machine learning models or architecting efficient data pipelines, I strive to push boundaries in data science.",
  
  "Let's connect! Feel free to reach out via LinkedIn or email me at jl3586@cornell.edu."
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "Check out some amazing blogs about data and AI that I would like to share"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/jiefei-li/',
  },
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/' + githubUsername,
  },
]

// https://simpleicons.org/
export const techIcons = [
  'python',
  'r',
  'scala',
  'apacheairflow',
  'amazonwebservices',
  'apachespark',
  'mysql',
  'apachehadoop',
  'databricks',
  'apachehive',
  'apachespark',
  'postgresql',
  'pytorch',
  'jupyter',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'Snowflake',
  'dbt',
  'Hadoop',
  'apachekafka',
  'dbeaver'
]
