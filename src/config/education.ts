
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Cornell University',
      major: 'Data Science',
      logo: 'college',
      start: 'Aug. 2022',
      end: 'Dec. 2023'
    },
    {
      school: 'University of California, Davis',
      major: 'Statistics and Psychology',
      logo: 'college',
      start: 'Sep. 2018',
      end: 'Jun. 2022'
    },
  ]