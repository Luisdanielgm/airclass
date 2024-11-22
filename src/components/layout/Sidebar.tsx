'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import Link from 'next/link'
import { MenuIcon, ChevronDownIcon, ChevronRightIcon, LayoutDashboardIcon, XIcon 
} from '@/components/ui/iconos'
import { usePathname } from 'next/navigation'
import { aircraftValuation } from '@/data/courses/aircraft-valuation'
import { aircraftValuation2 } from '@/data/courses/aircraft-valuation-2'
import { airTransportEconomy } from '@/data/courses/air-transport-economy'

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

// Obtenemos los cursos directamente de los archivos de datos
const COURSES = [aircraftValuation, aircraftValuation2, airTransportEconomy]

// Componente principal del Sidebar
export function Sidebar() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { isMobileMenuOpen, toggleMobileMenu } = useSidebar()
  const pathname = usePathname()
  const [currentSection, setCurrentSection] = useState<string | null>(null)

  // Efecto para manejar la expansión inicial y actualización de sección
  useEffect(() => {
    const currentCourseId = pathname.split('/')[2]
    if (currentCourseId) {
      setExpandedCourse(currentCourseId)
      
      // Encontrar el grupo que contiene la sección actual
      const searchParams = new URLSearchParams(window.location.search)
      const currentSectionId = searchParams.get('section') || 'introduction'
      
      const course = COURSES.find(c => c.id === currentCourseId)
      if (course) {
        const groupIndex = course.groups.findIndex(group => 
          group.sections.some(section => 
            new URLSearchParams(section.path.split('?')[1]).get('section') === currentSectionId
          )
        )
        if (groupIndex !== -1) {
          setExpandedGroup(`${currentCourseId}-${groupIndex}`)
        }
      }
      
      setCurrentSection(currentSectionId)
    }
  }, [pathname])

  // Función para manejar el clic en una sección
  const handleSectionClick = (courseId: string, groupIndex: number, sectionPath: string) => {
    setExpandedCourse(courseId)
    setExpandedGroup(`${courseId}-${groupIndex}`)
    const section = new URLSearchParams(sectionPath.split('?')[1]).get('section')
    setCurrentSection(section)
  }

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

          <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500">
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
                    <div className="bg-slate-950/50">
                      {course.groups.map((group, groupIndex) => {
                        const groupId = `${course.id}-${groupIndex}`;
                        return (
                          <div key={groupIndex} className="py-2">
                            <button
                              onClick={() => setExpandedGroup(expandedGroup === groupId ? null : groupId)}
                              className="w-full px-4 py-2 text-sm font-medium text-blue-400 border-b border-slate-800 flex justify-between items-center hover:bg-slate-800/30 text-left"
                            >
                              <span className="flex-1 text-left">{group.title}</span>
                              {expandedGroup === groupId ? (
                                <ChevronDownIcon className="w-4 h-4 flex-shrink-0" />
                              ) : (
                                <ChevronRightIcon className="w-4 h-4 flex-shrink-0" />
                              )}
                            </button>
                            {expandedGroup === groupId && (
                              <div>
                                {group.sections.map((section, sectionIndex) => {
                                  const isCurrentSection = () => {
                                    if (pathname !== '/courses/' + course.id) return false;
                                    const searchParams = new URLSearchParams(section.path.split('?')[1]);
                                    const sectionParam = searchParams.get('section');
                                    return sectionParam === (currentSection || 'introduction');
                                  };
                                  
                                  return (
                                    <Link
                                      key={section.id}
                                      href={section.path}
                                      className={`block px-6 py-2.5 text-sm transition-all duration-200 ease-in-out ${
                                        isCurrentSection()
                                          ? 'bg-blue-500/20 text-blue-400'
                                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                                      }`}
                                      onClick={() => handleSectionClick(course.id, groupIndex, section.path)}
                                    >
                                      <span className="inline-block w-4 text-blue-400">{sectionIndex + 1}.</span>
                                      {section.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
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