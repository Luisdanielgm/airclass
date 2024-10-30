'use client'

import { useEffect, useState } from 'react'
import { Typography, Paper } from '@mui/material'
import type { TranscriptionPanelProps } from './types'

export function TranscriptionPanel({
  title,
  transcriptionData,
  currentTime,
  onTimeSelect
}: TranscriptionPanelProps) {
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  useEffect(() => {
    console.log('TranscriptionPanel currentTime:', currentTime)
    
    const newIndex = transcriptionData.findIndex(
      (item, index, array) => 
        currentTime >= item.time && 
        (index === array.length - 1 || currentTime < array[index + 1].time)
    )

    console.log('Found index:', newIndex, 'Current highlighted:', highlightedIndex)

    if (newIndex !== -1 && newIndex !== highlightedIndex) {
      setHighlightedIndex(newIndex)
      
      // Scroll al elemento resaltado
      const element = document.getElementById(`transcript-${newIndex}`)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center'
        })
      }
    }
  }, [currentTime, highlightedIndex, transcriptionData])

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 2, 
        bgcolor: 'background.default',
        height: '100%',
        maxHeight: 'calc(100vh - 200px)',
        overflow: 'auto'
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
        <Typography component="span" variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
          ({currentTime.toFixed(1)}s)
        </Typography>
      </Typography>

      {transcriptionData.map((item, index) => (
        <Typography 
          key={index} 
          id={`transcript-${index}`}
          sx={{ 
            cursor: 'pointer', 
            backgroundColor: index === highlightedIndex ? 'primary.light' : 'transparent',
            display: 'block',
            mb: 1,
            p: 0.5,
            borderRadius: 1,
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: index === highlightedIndex ? 'primary.light' : 'action.hover'
            }
          }}
          onClick={() => {
            onTimeSelect?.(item.time)
            setHighlightedIndex(index)
          }}
        >
          {item.text}
        </Typography>
      ))}
    </Paper>
  )
} 