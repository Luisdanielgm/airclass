'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import Link from 'next/link'
import { 
  MenuIcon, 
  ChevronDownIcon, 
  ChevronRightIcon, 
  LayoutDashboardIcon, 
  XIcon 
} from '@/components/ui/iconos'
import { AIRCLASS_SERVER_VIDEOS } from '@/config/airclass_server'

// Tipos
interface CourseSection {
  title: string
  videoUrl: string
  path: string
}

interface Course {
  id: string
  title: string
  sections: CourseSection[]
}

interface SidebarContextType {
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

// Contexto
const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

// Provider
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <SidebarContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </SidebarContext.Provider>
  )
}

// Hook personalizado
export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

// Botón del Sidebar
export function SidebarTrigger() {
  const { toggleMobileMenu } = useSidebar()

  return (
    <button
      onClick={toggleMobileMenu}
      className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors duration-200"
    >
      <MenuIcon className="w-6 h-6" />
    </button>
  )
}

// Datos de los cursos
const COURSES: Course[] = [
  {
    id: 'aircraft-valuation',
    title: 'Valuación de Aeronaves',
    sections: [
      {
        title: 'Introducción al Curso',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_1,
        path: '/courses/aircraft-valuation?section=introduction'
      },
      {
        title: 'Biografía del ponente',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_2,
        path: '/courses/aircraft-valuation?section=instructor-background'
      },
      {
        title: 'Introducción a COVBAERO',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_3,
        path: '/courses/aircraft-valuation?section=introduction-covbaero'
      },
      {
        title: 'Presentación de los participantes 1',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_4,
        path: '/courses/aircraft-valuation?section=participants-presentation-1'
      },
      {
        title: 'Presentación de los participantes 2',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_5,
        path: '/courses/aircraft-valuation?section=participants-presentation-2'
      },
      {
        title: 'Hitos de la Aviación',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_6,
        path: '/courses/aircraft-valuation?section=aviation-history'
      },
      {
        title: 'Legislación Aeronáutica',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_7,
        path: '/courses/aircraft-valuation?section=aviation-legislation'
      },
      {
        title: 'Participantes Relevantes',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_1,
        path: '/courses/aircraft-valuation?section=participants-relevant'
      },
      {
        title: 'Clasificación de Aeronaves',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_2,
        path: '/courses/aircraft-valuation?section=aircraft-classification'
      }
    ]
  },
  {
    id: 'air-transport-economy',
    title: 'Economía del transporte aéreo',
    sections: [
      {
        title: 'Introducción al Curso',
        videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_1,
        path: '/courses/air-transport-economy?section=introduction-course'
      }
    ]
  }
]

// Componente principal del Sidebar
export function Sidebar() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { isMobileMenuOpen, toggleMobileMenu } = useSidebar()

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <>
      <aside
        className={`${
          isMobile
            ? 'fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out'
            : 'fixed left-0 top-0 w-64 h-screen'
        } ${
          isMobile && !isMobileMenuOpen ? '-translate-x-full' : 'translate-x-0'
        } bg-slate-900 border-r border-slate-800 shadow-lg`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Cursos
            </h2>
            {isMobile && (
              <button onClick={toggleMobileMenu} className="text-slate-300 hover:text-slate-100">
                <XIcon className="w-6 h-6" />
              </button>
            )}
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 text-sm font-medium text-slate-300 rounded-lg hover:bg-slate-800/50 transition-all duration-200 ease-in-out"
              >
                <LayoutDashboardIcon className="w-5 h-5 text-blue-400" />
                <span>Dashboard</span>
              </Link>

              <div className="h-px bg-slate-800 my-4" />

              {COURSES.map((course) => (
                <div key={course.id} className="rounded-lg overflow-hidden bg-slate-800/20">
                  <button
                    className="flex items-center justify-between w-full p-3 text-sm font-medium text-slate-300 hover:bg-slate-800/50 transition-all duration-200 ease-in-out"
                    onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                  >
                    <span className="font-semibold">{course.title}</span>
                    {expandedCourse === course.id ? (
                      <ChevronDownIcon className="w-5 h-5 text-blue-400 transition-transform duration-200" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5 text-blue-400 transition-transform duration-200" />
                    )}
                  </button>
                  {expandedCourse === course.id && (
                    <div className="bg-slate-950/50 py-2">
                      {course.sections.map((section) => (
                        <Link
                          key={section.path}
                          href={section.path}
                          className="block px-6 py-2.5 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 transition-all duration-200 ease-in-out"
                        >
                          {section.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      {/* Overlay para móvil */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  )
} 