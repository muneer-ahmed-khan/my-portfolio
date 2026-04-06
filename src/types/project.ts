export interface Project {
  id: number
  title: string
  description: string
  imgPath: string
  ghLink: string
  demoLink?: string
  isBlog: boolean
  techStack: string[]
}
