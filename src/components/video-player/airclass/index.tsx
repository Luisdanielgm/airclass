'use client'

import React, { useRef, useCallback, useState, useEffect } from 'react'
import type { AirclassVideoPlayerProps } from './types'

export default function AirclassVideoPlayer({
  videoUrl,
  onTimeUpdate,
  onPlay,
  onPause,
  onTimeSelect
}: AirclassVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [key, setKey] = useState(videoUrl)

  useEffect(() => {
    setKey(videoUrl)
    onTimeUpdate?.(0)
  }, [videoUrl, onTimeUpdate])

  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return
    const currentTime = videoRef.current.currentTime
    console.log(`Current time: ${currentTime.toFixed(2)} seconds`)
    onTimeUpdate?.(currentTime)
  }, [onTimeUpdate])

  const handlePlay = useCallback(() => {
    console.log('Video playing')
    onPlay?.(true)
  }, [onPlay])

  const handlePause = useCallback(() => {
    console.log('Video paused')
    onPause?.(false)
  }, [onPause])

  const handleSeek = useCallback((time: number) => {
    console.log('Seeking to:', time)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      onTimeSelect?.(time)
    }
  }, [onTimeSelect])

  const fullVideoUrl = `/videos/${videoUrl}`

  return (
    <div className="relative w-full aspect-video">
      <video
        key={key}
        ref={videoRef}
        className="w-full h-full"
        controls
        onTimeUpdate={handleTimeUpdate}
        onPlay={handlePlay}
        onPause={handlePause}
        src={fullVideoUrl}
      />
      {onTimeSelect && (
        <div 
          className="absolute inset-0" 
          onClick={() => handleSeek(0)}
          style={{ display: 'none' }}
        />
      )}
    </div>
  )
} 