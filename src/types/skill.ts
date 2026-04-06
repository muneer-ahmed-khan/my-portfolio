export interface Skill {
  name: string
  icon: string
  invert?: boolean
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}
