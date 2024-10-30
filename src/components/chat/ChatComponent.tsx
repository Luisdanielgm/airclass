'use client'

import { useState, useEffect, useRef } from 'react'
import { Send } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getChatResponse } from '@/services/chatService'
import ReactMarkdown from 'react-markdown'
import { TypingEffect } from './TypingEffect'
import { LoadingDots } from './LoadingDots'
import { Message } from '@/types/chat'

interface ChatComponentProps {
  transcriptionData: {
    time: number;
    text: string;
  }[];
}

export function ChatComponent({ transcriptionData }: ChatComponentProps) {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hola! Soy tu asistente para el curso de valuación aeronáutica. ¿En qué puedo ayudarte?", 
      sender: 'bot'
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage: Message = { 
        id: messages.length + 1, 
        text: input, 
        sender: 'user'
      }
      setMessages([...messages, userMessage])
      setInput('')
      setIsTyping(true)
      
      try {
        const transcriptionText = transcriptionData
          .map(item => item.text)
          .join('\n');

        const botResponse = await getChatResponse(input, transcriptionText);
        const botMessage: Message = { 
          id: messages.length + 2, 
          text: botResponse, 
          sender: 'bot',
          isTyping: true 
        }
        setMessages(prev => [...prev, botMessage])
        setTimeout(() => {
          setMessages(prev => prev.map(msg => 
            msg.id === botMessage.id ? { ...msg, isTyping: false } : msg
          ))
          setIsTyping(false)
        }, botResponse.length * 10 + 100)
      } catch (error) {
        console.error('Error al obtener respuesta:', error)
        setIsTyping(false)
      }
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  return (
    <Card className="w-full h-full flex flex-col shadow-xl rounded-lg border border-slate-200 bg-white overflow-hidden">
      <CardHeader className="pb-2 border-b border-slate-200 bg-white flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>✈️</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary dark:text-primary/90">
                Asistente de Valuación Aeronáutica
              </span>
              <span className="text-sm text-primary/70 dark:text-primary/60">
                Consulta tus dudas sobre el curso
              </span>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-y-auto p-4 bg-white scrollbar-custom">
        <ScrollArea className="h-[calc(100vh-400px)]" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#94A3B8 #E2E8F0'
        }}>
          <div className="space-y-4 pr-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.sender === 'bot' && (
                  <Avatar className="h-6 w-6 mr-2 mt-1 flex-shrink-0">
                    <AvatarFallback>✈️</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {message.sender === 'bot' && message.isTyping ? (
                    <TypingEffect text={message.text} />
                  ) : (
                    <ReactMarkdown className="prose max-w-none text-black">
                      {message.text}
                    </ReactMarkdown>
                  )}
                </div>
                {message.sender === 'user' && (
                  <Avatar className="h-6 w-6 ml-2 mt-1 flex-shrink-0">
                    <AvatarFallback>TÚ</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <Avatar className="h-6 w-6 mr-2 mt-1 flex-shrink-0">
                  <AvatarFallback>✈️</AvatarFallback>
                </Avatar>
                <div className="bg-[var(--chat-bot-msg-bg)] border-accent border text-white rounded-lg px-4 py-2 shadow-sm">
                  <LoadingDots />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="border-t border-slate-200 bg-white p-4 flex-shrink-0">
        <form onSubmit={(e) => { e.preventDefault(); handleSend() }} className="flex w-full items-center space-x-2">
          <Input
            id="message"
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-white text-slate-900 focus-visible:ring-blue-500 border-slate-200"
            aria-label="Escribe tu mensaje"
          />
          <Button 
            type="submit" 
            size="icon" 
            className="bg-blue-500 hover:bg-blue-600"
            disabled={!input.trim() || isTyping}
          >
            <Send className="h-4 w-4 text-white" />
            <span className="sr-only">Enviar</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
} 