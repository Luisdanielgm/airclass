'use client'

import { Suspense } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CloudinaryVideoPlayer from '@/components/video-player/cloudinary'
import { TranscriptionPanel } from '@/components/video-player/common/TranscriptionPanel'
import { ChatComponent } from '@/components/chat/ChatComponent'
import { aircraftValuation } from '@/data/courses'

export default function AircraftValuationPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AircraftValuationContent />
    </Suspense>
  )
}

function AircraftValuationContent() {
  const [currentTime, setCurrentTime] = useState(0)
  const searchParams = useSearchParams()
  const sectionId = searchParams.get('section') || 'introduction'
  
  const currentSection = aircraftValuation.sections.find(
    section => section.id === sectionId
  ) || aircraftValuation.sections[0]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          {aircraftValuation.title} - {currentSection.title}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
          <div className="lg:col-span-7 bg-slate-900 p-4 rounded-lg border border-slate-800 sticky top-4 z-20">
            <CloudinaryVideoPlayer 
              videoId={currentSection.videoId}
              onTimeUpdate={setCurrentTime}
              onTimeSelect={setCurrentTime}
            />
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <Tabs defaultValue="transcription" className="w-full flex flex-col">
              <div className="bg-slate-900 rounded-lg border border-slate-800 sticky top-[calc(56.25vw+2rem)] lg:top-4 z-10">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger 
                    value="transcription"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    Transcripción
                  </TabsTrigger>
                  <TabsTrigger 
                    value="chat"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    Chat
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 mt-2">
                <div className="h-[calc(100vh-200px)]">
                  <TabsContent value="transcription" className="flex-1 overflow-hidden h-full sticky z-10">
                    <TranscriptionPanel 
                      title="Transcripción"
                      transcriptionData={currentSection.data}
                      currentTime={currentTime}
                      onTimeSelect={setCurrentTime}
                    />
                  </TabsContent>
                  <TabsContent value="chat" className="flex-1 overflow-hidden h-full">
                    <ChatComponent transcriptionData={currentSection.data} />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
} 