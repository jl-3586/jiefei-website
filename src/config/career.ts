// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'The Feinstein Institutes for Medical Research',
      title: 'Visiting Scholar',
      logo: 'college',
      start: 'Mar. 2024',
      end: 'Present'
    },
    {
      company: 'Psychological Models and Measurement Lab',
      title: 'Research Assistant',
      logo: 'college',
      start: 'Mar. 2021',
      end: 'Aug. 2021'
    }
  ]