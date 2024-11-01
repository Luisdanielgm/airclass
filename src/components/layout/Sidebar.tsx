'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { 
  MenuIcon, 
  ChevronDownIcon, 
  ChevronRightIcon, 
  LayoutDashboardIcon, 
  XIcon 
} from '@/components/ui/iconos'
import { CLOUDINARY_VIDEOS } from '@/config/cloudinary'

interface CourseSection {
  title: string
  videoId: string
  path: string
}

interface Course {
  id: string
  title: string
  sections: CourseSection[]
}

// Ejemplo de datos - Después podrías moverlo a un archivo separado
const COURSES: Course[] = [
  {
    id: 'aircraft-valuation',
    title: 'Valuación de Aeronaves',
    sections: [
      {
        title: 'Introducción al Curso',
        videoId: CLOUDINARY_VIDEOS.AIRCRAFT_VALUATION_1,
        path: '/courses/aircraft-valuation?section=introduction'
      },
      {
        title: 'Antecedentes del Instructor',
        videoId: CLOUDINARY_VIDEOS.AIRCRAFT_VALUATION_2,
        path: '/courses/aircraft-valuation?section=instructor-background'
      }
    ]
  }
]

export function Sidebar() {
  return (
    <Suspense fallback={null}>
      <SidebarContent />
    </Suspense>
  )
}

function SidebarContent() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Botón de menú hamburguesa para móvil */}
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors duration-200"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar para desktop */}
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