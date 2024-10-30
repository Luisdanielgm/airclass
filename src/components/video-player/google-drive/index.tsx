'use client'

import React, { useRef, useEffect, useCallback, useState } from 'react'
import { Box, Paper } from '@mui/material'
import type { GoogleDriveVideoPlayerProps } from './types'

export default function GoogleDriveVideoPlayer({ 
  videoId,
  onTimeUpdate,
  onPlay,
  onPause,
  onTimeSelect
}: GoogleDriveVideoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeSrc, setIframeSrc] = useState('')

  useEffect(() => {
    setIframeSrc(`https://drive.google.com/file/d/${videoId}/preview?enablejsapi=1&origin=${window.location.origin}&controls=1&modestbranding=1`)
  }, [videoId])

  const handleMessage = useCallback((event: MessageEvent) => {
    if (event.origin !== window.location.origin) return

    try {
      const data = event.data
      if (data.event === 'onStateChange') {
        if (data.info === 1) {
          onPlay?.(true)
        } else {
          onPause?.(false)
        }
      } else if (data.event === 'onTimeUpdate') {
        onTimeUpdate?.(data.info)
      } else if (data.event === 'seekTo' && typeof data.time === 'number') {
        // Manejar la solicitud de seek
        if (iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.postMessage({
            event: 'command',
            func: 'seekTo',
            args: [data.time]
          }, '*')
          onTimeSelect?.(data.time)
        }
      }
    } catch (error) {
      console.error('Error handling message:', error)
    }
  }, [onPlay, onPause, onTimeUpdate, onTimeSelect])

  // Función para manejar las solicitudes de cambio de tiempo desde fuera
  useEffect(() => {
    const handleExternalSeek = (time: number) => {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage({
          event: 'command',
          func: 'seekTo',
          args: [time]
        }, '*')
      }
    }

    // Exponer la función al componente padre
    if (onTimeSelect) {
      window.postMessage({ event: 'seekTo', handler: handleExternalSeek }, window.location.origin)
    }
  }, [onTimeSelect])

  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [handleMessage])

  return (
    <div className="relative w-full aspect-video">
      <Paper elevation={3} sx={{ overflow: 'hidden', borderRadius: 1 }}>
        <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            allow="autoplay"
          />
        </Box>
      </Paper>
    </div>
  )
}
