'use client'

import React, { useRef, useCallback, useState, useEffect } from 'react'
import type { AirclassVideoPlayerProps } from './types'

const url_server = process.env.NEXT_PUBLIC_AIRCLASS_SERVER_URL as string

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

  const fullVideoUrl = `${url_server}/${videoUrl}`

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!videoRef.current) return

      const skipTime = 5 // segundos para adelantar/atrasar
      
      switch (event.key) {
        case 'ArrowRight':
          videoRef.current.currentTime += skipTime
          onTimeSelect?.(videoRef.current.currentTime)
          break
        case 'ArrowLeft':
          videoRef.current.currentTime -= skipTime
          onTimeSelect?.(videoRef.current.currentTime)
          break
      }
    }

    // Agregar event listener
    window.addEventListener('keydown', handleKeyPress)

    // Limpiar event listener
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [onTimeSelect])

  return (
    <div className="relative w-full aspect-video group">
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
      <div className="absolute bottom-9 left-32 flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="bg-white/60 hover:bg-white/80 p-0.5 sm:p-1 rounded-full shadow-lg transition-colors"
          onClick={() => handleSeek(videoRef.current?.currentTime ? videoRef.current.currentTime - 5 : 0)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9m0 0l5 4" />
          </svg>
        </button>
        <button
          className="bg-white/60 hover:bg-white/80 p-0.5 sm:p-1 rounded-full shadow-lg transition-colors"
          onClick={() => handleSeek(videoRef.current?.currentTime ? videoRef.current.currentTime + 5 : 0)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l5 4m0 0l-5 4" />
          </svg>
        </button>
      </div>
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