'use client'

import React, { useRef, useCallback, useState, useEffect } from 'react'
import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css'
import type { CloudinaryVideoPlayerProps } from './types'

type CldVideoPlayerProps = React.ComponentProps<typeof CldVideoPlayer>
type CloudinaryVideoPlayer = NonNullable<CldVideoPlayerProps['playerRef']>['current']

export default function CloudinaryVideoPlayer({ 
  videoId,
  onTimeUpdate,
  onPlay, 
  onPause,
  onTimeSelect
}: CloudinaryVideoPlayerProps) {
  const playerRef = useRef<CloudinaryVideoPlayer | null>(null)
  const lastTimeRef = useRef<number>(0)
  const [key, setKey] = useState(videoId)

  useEffect(() => {
    if (playerRef.current?.timeUpdateInterval) {
      clearInterval(playerRef.current.timeUpdateInterval)
    }
    setKey(videoId)
    lastTimeRef.current = 0
    onTimeUpdate?.(0)
  }, [videoId, onTimeUpdate])

  const handleMetadataLoad = useCallback(() => {
    if (!playerRef.current) return
    const currentTime = playerRef.current.currentTime()
    console.log('Metadata loaded, initial time:', currentTime)
    if (typeof currentTime === 'number') {
      onTimeUpdate?.(currentTime)
      lastTimeRef.current = currentTime
    }
  }, [onTimeUpdate])

  const handlePlay = useCallback(() => {
    if (!playerRef.current) return
    
    // Configurar un intervalo para verificar el tiempo
    const intervalId = setInterval(() => {
      const currentTime = playerRef.current?.currentTime()
      if (typeof currentTime === 'number') {
        if (Math.floor(currentTime) !== Math.floor(lastTimeRef.current)) {
          console.log(`Current time: ${currentTime.toFixed(2)} seconds`)
          onTimeUpdate?.(currentTime)
          lastTimeRef.current = currentTime
        }
      }
    }, 100) // Verificar cada 100ms

    // Guardar el ID del intervalo en el player para limpiarlo después
    playerRef.current.timeUpdateInterval = intervalId
    
    console.log('Video playing')
    onPlay?.(true)
  }, [onPlay, onTimeUpdate])

  const handlePause = useCallback(() => {
    if (!playerRef.current) return
    
    // Limpiar el intervalo cuando se pausa
    if (playerRef.current.timeUpdateInterval) {
      clearInterval(playerRef.current.timeUpdateInterval)
    }
    
    console.log('Video paused')
    onPause?.(false)
  }, [onPause])

  const handleSeek = useCallback((time: number) => {
    console.log('Seeking to:', time)
    if (playerRef.current) {
      playerRef.current.currentTime(time)
      onTimeSelect?.(time)
      lastTimeRef.current = time
    }
  }, [onTimeSelect])

  return (
    <div className="relative w-full aspect-video">
      <CldVideoPlayer
        key={key}
        playerRef={playerRef}
        width="1920"
        height="1080"
        src={videoId}
        colors={{
          accent: '#1976d2',
          base: '#ffffff',
          text: '#000000'
        }}
        fontFace="Geist"
        controls
        autoPlay={false}
        onMetadataLoad={handleMetadataLoad}
        onPlay={handlePlay}
        onPause={handlePause}
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