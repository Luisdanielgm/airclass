import type { TranscriptionItem } from '@/types'

export interface BaseVideoPlayerProps {
  videoId: string
  onTimeUpdate?: (currentTime: number) => void
  onPlay?: (isPlaying: boolean) => void
  onPause?: (isPlaying: boolean) => void
  onTimeSelect?: (time: number) => void
}

export interface TranscriptionPanelProps {
  title: string
  transcriptionData: TranscriptionItem[]
  currentTime: number
  onTimeSelect?: (time: number) => void
} 