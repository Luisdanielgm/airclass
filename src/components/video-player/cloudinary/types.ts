import { BaseVideoPlayerProps } from '../common/types'

declare module 'next-cloudinary' {
  interface CloudinaryVideoPlayer {
    timeUpdateInterval?: ReturnType<typeof setInterval>
  }
}

export interface CloudinaryVideoPlayerProps extends BaseVideoPlayerProps {
  videoId: string
  onTimeUpdate?: (time: number) => void
  onPlay?: (isPlaying: boolean) => void
  onPause?: (isPlaying: boolean) => void
  onTimeSelect?: (time: number) => void
}