'use client'

import { Suspense } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AirclassVideoPlayer from '@/components/video-player/airclass'
import { TranscriptionPanel } from '@/components/video-player/common/TranscriptionPanel'
import { ChatComponent } from '@/components/chat/ChatComponent'
import { aircraftValuation } from '@/data/courses'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from '@/components/ui/iconos'
import { useSidebar } from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'

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
  const { toggleMobileMenu } = useSidebar()
  
  const allSections = aircraftValuation.groups.flatMap(group => group.sections)
  
  const currentSection = allSections.find(
    section => section.id === sectionId
  ) || allSections[0]

  const currentSectionIndex = allSections.findIndex(
    section => section.id === sectionId
  )

  const previousSection = currentSectionIndex > 0 
    ? allSections[currentSectionIndex - 1]
    : null

  const nextSection = currentSectionIndex < allSections.length - 1
    ? allSections[currentSectionIndex + 1]
    : null

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col">
      <div className="flex-1 p-4">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors duration-200"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {aircraftValuation.title} - {currentSection.title}
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 h-[calc(100vh-120px)] overflow-hidden">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <AirclassVideoPlayer   
                videoUrl={currentSection.videoUrl}
                onTimeUpdate={setCurrentTime}
                onTimeSelect={setCurrentTime}
              />
            </div>
            
            <div className="flex justify-between items-center px-2">
              <Link
                href={previousSection?.path || '#'}
                className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-lg transition-all duration-200 text-sm md:text-base ${
                  previousSection 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
                onClick={e => !previousSection && e.preventDefault()}
              >
                <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
                {previousSection ? 'Video anterior' : 'No hay video anterior'}
              </Link>

              <Link
                href={nextSection?.path || '#'}
                className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-lg transition-all duration-200 text-sm md:text-base ${
                  nextSection 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
                onClick={e => !nextSection && e.preventDefault()}
              >
                {nextSection ? 'Siguiente video' : 'No hay más videos'}
                <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col overflow-hidden">
            <Tabs defaultValue="transcription" className="w-full flex flex-col h-full">
              <div className="bg-slate-900 rounded-lg border border-slate-800">
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
              
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 mt-2 flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto">
                  <TabsContent value="transcription" className="h-full">
                    <TranscriptionPanel 
                      title="Transcripción"
                      transcriptionData={currentSection.data}
                      currentTime={currentTime}
                      onTimeSelect={setCurrentTime}
                    />
                  </TabsContent>
                  <TabsContent value="chat" className="h-full">
                    <ChatComponent transcriptionData={currentSection.data} />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 