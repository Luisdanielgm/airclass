'use client'

import { Suspense } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CloudinaryVideoPlayer from '@/components/video-player/cloudinary'
import { TranscriptionPanel } from '@/components/video-player/common/TranscriptionPanel'
import { ChatComponent } from '@/components/chat/ChatComponent'
import { aircraftValuation } from '@/data/courses/aircraft-valuation'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/iconos'

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

  const currentSectionIndex = aircraftValuation.sections.findIndex(
    section => section.id === sectionId
  )

  const previousSection = currentSectionIndex > 0 
    ? aircraftValuation.sections[currentSectionIndex - 1]
    : null

  const nextSection = currentSectionIndex < aircraftValuation.sections.length - 1
    ? aircraftValuation.sections[currentSectionIndex + 1]
    : null

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          {aircraftValuation.title} - {currentSection.title}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 sticky top-4 z-20">
              <CloudinaryVideoPlayer 
                videoId={currentSection.videoId}
                onTimeUpdate={setCurrentTime}
                onTimeSelect={setCurrentTime}
              />
            </div>
            
            <div className="flex justify-between items-center px-2">
              <Link
                href={previousSection?.path || '#'}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  previousSection 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
                onClick={e => !previousSection && e.preventDefault()}
              >
                <ChevronLeftIcon className="w-5 h-5" />
                {previousSection ? 'Video anterior' : 'No hay video anterior'}
              </Link>

              <Link
                href={nextSection?.path || '#'}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  nextSection 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
                onClick={e => !nextSection && e.preventDefault()}
              >
                {nextSection ? 'Siguiente video' : 'No hay más videos'}
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
            </div>
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