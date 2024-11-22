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
import { usePathname } from 'next/navigation'

// Tipos
interface CourseSection {
  title: string
  videoUrl: string
  path: string
}

interface CourseGroup {
  title: string
  sections: CourseSection[]
}

interface Course {
  id: string
  title: string
  groups: CourseGroup[]
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
    groups: [
      {
        title: 'Módulo 1: Introducción',
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
          }
        ]
      },
      {
        title: 'Módulo 2: Aspectos Técnicos',
        sections: [
          {
            title: 'Participantes Relevantes',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_1,
            path: '/courses/aircraft-valuation?section=relevant-participants'
          },
          {
            title: 'Clasificación de Aeronaves',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_2,
            path: '/courses/aircraft-valuation?section=aircraft-classification'
          },
          {
            title: 'Partes de Aeronaves',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_3,
            path: '/courses/aircraft-valuation?section=aircraft-parts'
          },
          {
            title: 'Superficies de Control Primarias',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_4,
            path: '/courses/aircraft-valuation?section=primary-control-surfaces'
          },
          {
            title: 'Superficies de Control Secundarias',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_5,
            path: '/courses/aircraft-valuation?section=secondary-control-surfaces'
          },
          {
            title: 'Zonas de Aeronaves',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_6,
            path: '/courses/aircraft-valuation?section=aircraft-zones'
          },
          {
            title: 'Inspección Walk Around',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_7,
            path: '/courses/aircraft-valuation?section=inspection-walk-around'
          }
        ]
      },
      {
        title: 'Módulo 3: Aspectos Técnicos',
        sections: [
          {
            title: 'Tipos de Motores: Recíprocos',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_1,
            path: '/courses/aircraft-valuation?section=reciproc-motors'
          },
          {
            title: 'Tipos de Motores: Turbinas',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_2,
            path: '/courses/aircraft-valuation?section=turbine-motors'
          },
          {
            title: 'Mantenimiento Programado',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_3,
            path: '/courses/aircraft-valuation?section=scheduled-maintenance'
          },
          {
            title: 'Mantenimiento No Programado',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_4,
            path: '/courses/aircraft-valuation?section=unscheduled-maintenance'
          },
          {
            title: 'Conceptos de Valor',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_5,
            path: '/courses/aircraft-valuation?section=value-concepts'
          },
          {
            title: 'Enfoques Principales de Valoración',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_6,
            path: '/courses/aircraft-valuation?section=valuation-approaches'
          },
          {
            title: 'Valor de Reposición Nuevo y Valor Neto de Reposición',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_7,
            path: '/courses/aircraft-valuation?section=replacement-value'
          },
          {
            title: 'Conceptos de Depreciación',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_8,
            path: '/courses/aircraft-valuation?section=depreciation-concepts'
          },
          {
            title: 'Métodos de Cálculo de Depreciación Acumulada',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_9,
            path: '/courses/aircraft-valuation?section=depreciation-methods'
          }
        ]
      },
      {
        title: 'Módulo 4: Ejercicios',
        sections: [
          {
            title: 'Presentación de los Ejercicios',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_4_1,
            path: '/courses/aircraft-valuation?section=exercises-presentation'
          },
          {
            title: 'Primera Parte del Ejercicio',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_4_2,
            path: '/courses/aircraft-valuation?section=first-exercise-part'
          },
          {
            title: 'Segunda Parte del Ejercicio',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_4_3,
            path: '/courses/aircraft-valuation?section=second-exercise-part'
          },
          {
            title: 'Tercera Parte del Ejercicio',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_4_4,
            path: '/courses/aircraft-valuation?section=third-exercise-part'
          }
        ]
      }
    ]
  },
  {
    id: 'aircraft-valuation-2',
    title: 'Valuación de Aeronaves 2da Parte',
    groups: [
      {
        title: 'Saludos y Registro de Asistencia',
        sections: [
          {
            title: 'Saludos y Registro de Asistencia',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_1,
            path: '/courses/aircraft-valuation?section=greetings-and-attendance-registration'
          }
        ]
      },
      {
        title: 'Explicación del Primer Caso',
        sections: [
          {
            title: 'Introducción y Presentación del Primer Ejercicio',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_2,
            path: '/courses/aircraft-valuation?section=introduction-and-presentation-of-the-first-case'
          },
          {
            title: 'Explicación del Primer Caso 1',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_3,
            path: '/courses/aircraft-valuation?section=explanation-of-the-first-case'
          },
          {
            title: 'Explicación del Primer Caso 2',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_4,
            path: '/courses/aircraft-valuation?section=explanation-of-the-first-case-2'
          },
          {
            title: 'Explicación del Primer Caso 3',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_5,
            path: '/courses/aircraft-valuation?section=explanation-of-the-first-case-3'
          },
          {
            title: 'Explicación del Primer Caso 4',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_6,
            path: '/courses/aircraft-valuation?section=explanation-of-the-first-case-4'
          }
        ]
      },
      {
        title: 'Explicación del Segundo Caso',
        sections: [
          {
            title: 'Introducción al Segundo Caso',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_7,
            path: '/courses/aircraft-valuation?section=introduction-to-the-second-case'
          },
          {
            title: 'Explicación del Segundo Caso 1',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_8,
            path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-1'
          },
          {
            title: 'Explicación del Segundo Caso 2',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_9,
            path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-2'
          },
          {
            title: 'Explicación del Segundo Caso 3',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_10,
            path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-3'
          },
          {
            title: 'Explicación del Segundo Caso 4',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_11,
            path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-4'
          },
          {
            title: 'Explicación del Segundo Caso 5',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_12,
            path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-5'
          }
        ]
      },
      {
        title: 'Explicación del Método Multi-Criterio',
        sections: [
          {
            title: 'Explicación del Método Multi-Criterio',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_13,
            path: '/courses/aircraft-valuation?section=multi-criteria-method'
          }
        ]
      },
      {
        title: 'Cierre y Despedida',
        sections: [
          {
            title: 'Cierre y Despedida',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_14,
            path: '/courses/aircraft-valuation?section=closing-and-farewell'
          }
        ]
      }
    ]
  },
  {
    id: 'air-transport-economy',
    title: 'Economía del transporte aéreo',
    groups: [
      {
        title: 'Introducción al Curso',
        sections: [
          {
            title: 'Introducción al Curso',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_0_1,
            path: '/courses/air-transport-economy?section=introduction-course'
          }
        ]
      },
      {
        title: 'Módulo 1: Capacidad del Transportista Aéreo',
        sections: [
          {
            title: 'Mapa del curso módulo 1',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_1,
            path: '/courses/air-transport-economy?section=course-map-module-1'
          },
          {
            title: 'Objetivos del módulo 1',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_2,
            path: '/courses/air-transport-economy?section=objectives-module-1'
          },
          {
            title: 'Recursos del módulo 1',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_3,
            path: '/courses/air-transport-economy?section=resources-module-1'
          },
          {
            title: 'Capacidad regulada por los gobiernos',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_4,
            path: '/courses/air-transport-economy?section=capacity-regulated-by-governments'
          },
          {
            title: 'Principios detrás de la regulación de capacidad por parte de los gobiernos',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_5,
            path: '/courses/air-transport-economy?section=principles-behind-capacity-regulation-by-governments'
          },
          {
            title: 'Capacidad desde la Perspectiva del Gobierno',
            videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_6,
            path: '/courses/air-transport-economy?section=capacity-from-the-perspective-of-government'
          }
        ]
      },
      {
        title: 'Módulo 2: Tarifas del Transportista Aéreo',
        sections: [

        ]
      },
      {
        title: 'Módulo 3: Carga Aérea',
        sections: [

        ]
      },
      {
        title: 'Módulo 4: Servicios Aéreos No Regulares',
        sections: [

        ]
      },
      {
        title: 'Módulo 5: Actividades Comerciales y Cooperativas de Aerolíneas',
        sections: [

        ]
      },
      {
        title: 'Módulo 6: Gestión Económica y Financiera de Aeropuertos',
        sections: [

        ]
      }
    ]
  }
]

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
                                {group.sections.map((section) => {
                                  const isCurrentSection = () => {
                                    if (pathname !== '/courses/' + course.id) return false;
                                    const searchParams = new URLSearchParams(section.path.split('?')[1]);
                                    const sectionParam = searchParams.get('section');
                                    return sectionParam === (currentSection || 'introduction');
                                  };
                                  
                                  return (
                                    <Link
                                      key={section.path}
                                      href={section.path}
                                      className={`block px-6 py-2.5 text-sm transition-all duration-200 ease-in-out ${
                                        isCurrentSection()
                                          ? 'bg-blue-500/20 text-blue-400'
                                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                                      }`}
                                      onClick={() => handleSectionClick(course.id, groupIndex, section.path)}
                                    >
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