// Tipos globales compartidos
export interface TranscriptionItem {
  time: number
  text: string
}

export interface CourseSection {
  id: string
  title: string
  videoUrl: string
  path: string;
  data: TranscriptionItem[]
}

export interface CourseGroup {
  title: string
  sections: CourseSection[]
}

export interface CourseData {
  id: string
  title: string
  groups: CourseGroup[]
} 