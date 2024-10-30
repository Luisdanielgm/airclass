'use client'

import { useState, useEffect, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ReactMarkdown from 'react-markdown'

interface TypingEffectProps {
  text: string
}

export const TypingEffect = ({ text }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const [avatarPosition, setAvatarPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const safeText = text || '';
    if (currentIndex < safeText.length) {
      const moveTimer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
        const textTimer = setTimeout(() => {
          setDisplayText((prev) => prev + safeText[currentIndex])
          
          if (textRef.current) {
            const textContent = textRef.current
            const range = document.createRange()
            const tempNode = document.createTextNode('\u200B')
            textContent.appendChild(tempNode)
            
            range.selectNode(tempNode)
            range.collapse(false)
            
            const rect = range.getBoundingClientRect()
            const containerRect = textContent.getBoundingClientRect()
            
            setAvatarPosition({
              x: Math.min(rect.left - containerRect.left, containerRect.width - 24),
              y: rect.top - containerRect.top
            })
            
            textContent.removeChild(tempNode)
          }
        }, 5)
        return () => clearTimeout(textTimer)
      }, 10)
      return () => clearTimeout(moveTimer)
    } else {
      setIsTypingComplete(true)
    }
  }, [text, currentIndex])

  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col space-y-2">
        <div className="relative" ref={textRef}>
          <ReactMarkdown className="prose max-w-none text-black whitespace-pre-wrap">
            {displayText}
          </ReactMarkdown>
          {!isTypingComplete && (
            <Avatar 
              className={`
                h-6 w-6 absolute transition-all duration-50 ease-linear z-10
                ${isTypingComplete ? 'opacity-0' : 'opacity-100'}
              `} 
              style={{ 
                left: `${avatarPosition.x}px`,
                top: `${avatarPosition.y}px`,
                transform: 'translate(4px, -50%)'
              }}
            >
              <AvatarImage 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_sapiensia-NSecxWaejW6cZ3EAe3DsHBQOUtVWfC.png" 
                alt="SapiensAI Logo" 
              />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
          )}
        </div>
        {isTypingComplete && (
          <div className="flex items-center justify-start mt-1">
            <Avatar className="h-4 w-4 animate-fade-in">
              <AvatarImage 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_sapiensia-NSecxWaejW6cZ3EAe3DsHBQOUtVWfC.png" 
                alt="SapiensAI Logo" 
              />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </div>
  )
} 