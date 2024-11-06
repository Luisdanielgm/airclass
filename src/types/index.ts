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

export interface CourseData {
  id: string
  title: string
  sections: CourseSection[]
} 