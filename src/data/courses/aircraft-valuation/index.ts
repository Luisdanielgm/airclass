import { CourseData } from '@/types';
import { introduction } from './subtitles/introduction';
import { instructorBackground } from './subtitles/instructor-background';
import { introductionCovbaero } from './subtitles/introduction-covbaero';
import { participantsPresentation1 } from './subtitles/participants-presentation-1';
import { participantsPresentation2 } from './subtitles/participants-presentation-2';
import { aviationHistory } from './subtitles/aviation-history';
import { aviationLegislation } from './subtitles/aviation-legislation';
import { relevantParticipants } from './subtitles/relevant-participants';
import { aircraftClassification } from './subtitles/aircraft-classification';
import { aircraftParts } from './subtitles/aircraft-parts';
import { primaryControlSurfaces } from './subtitles/primary-control-surfaces';
import { secondaryControlSurfaces } from './subtitles/secondary-control-surfaces';
import { aircraftZones } from './subtitles/aircraft-zones';
import { inspectionWalkAround } from './subtitles/inspection-walk-around';
import { reciprocMotors } from './subtitles/reciproc-motors';
import { turbineMotors } from './subtitles/turbine-motors';
import { scheduledMaintenance } from './subtitles/scheduled-maintenance';
import { unscheduledMaintenance } from './subtitles/unscheduled-maintenance';
import { valueConcepts } from './subtitles/value-concepts';
import { valuationApproaches } from './subtitles/valuation-approaches';
import { replacementValue } from './subtitles/replacement-value';
import { depreciationConcepts } from './subtitles/depreciation-concepts';
import { depreciationMethods } from './subtitles/depreciation-methods';
import { exercisesPresentation } from './subtitles/exercises-presentation';
import { firstExercisePart } from './subtitles/first-exercise-part';
import { secondExercisePart } from './subtitles/second-exercise-part';
import { thirdExercisePart } from './subtitles/third-exercise-part';

export const aircraftValuation: CourseData = {
  id: 'aircraft-valuation',
  title: 'Valuación de Aeronaves',
  groups:[
    {
      title: 'Módulo 1: Introducción',
      sections: [
        {
          id: 'introduction',
          title: 'Introducción al Curso',
          videoUrl: 'cursos/valuacion_de_aeronaves/1_1_introduccion.mp4',
          path: '/courses/aircraft-valuation?section=introduction',
          data: introduction
        },
        {
          id: 'instructor-background',
          title: 'Antecedentes del Instructor',
          videoUrl: 'cursos/valuacion_de_aeronaves/1_2_biografia_ponente.mp4',
          path: '/courses/aircraft-valuation?section=instructor-background',
          data: instructorBackground
        },
        {
          id: 'introduction-covbaero',
          title: 'Introducción a COVBAERO',
          videoUrl: 'cursos/valuacion_de_aeronaves/1_3_introduccion_covbaero.mp4',
          path: '/courses/aircraft-valuation?section=introduction-covbaero',
          data: introductionCovbaero
        },
        {
          id: 'participants-presentation-1',
          title: 'Presentación de los participantes 1',
          videoUrl: 'cursos/valuacion_de_aeronaves/1_4_presentacion_participantes_1.mp4',
          path: '/courses/aircraft-valuation?section=participants-presentation-1',
          data: participantsPresentation1
        },
        {
          id: 'participants-presentation-2',
          title: 'Presentación de los participantes 2',
          videoUrl: 'cursos/valuacion_de_aeronaves/1_5_presentacion_participantes_2.mp4',
          path: '/courses/aircraft-valuation?section=participants-presentation-2',
          data: participantsPresentation2
        },
        {
          id: 'aviation-history',
          title: 'Hitos de la Aviación',
          videoUrl: 'cursos/valuacion_de_aeronaves/1_6_hitos_aviacion.mp4',
          path: '/courses/aircraft-valuation?section=aviation-history',
          data: aviationHistory
        },
        {
          id: 'aviation-legislation',
          title: 'Legislación Aeronáutica',
          videoUrl: 'cursos/valuacion_de_aeronaves/1_7_legislacion_aeronautica.mp4',
          path: '/courses/aircraft-valuation?section=aviation-legislation',
          data: aviationLegislation
        }
      ]
    },
    {
      title: 'Módulo 2: Aspectos Técnicos',
      sections: [
        {
          id: 'relevant-participants',
          title: 'Participantes Relevantes',
          videoUrl: 'cursos/valuacion_de_aeronaves/2_1_participantes_relevantes.mp4',
          path: '/courses/aircraft-valuation?section=relevant-participants',
          data: relevantParticipants
        },
        {
          id: 'aircraft-classification',
          title: 'Clasificación de Aeronaves',
          videoUrl: 'cursos/valuacion_de_aeronaves/2_2_clasificacion_aeronaves.mp4',
          path: '/courses/aircraft-valuation?section=aircraft-classification',
          data: aircraftClassification
        },
        {
          id: 'aircraft-parts',
          title: 'Partes de Aeronaves',
          videoUrl: 'cursos/valuacion_de_aeronaves/2_3_partes_aeronaves.mp4',
          path: '/courses/aircraft-valuation?section=aircraft-parts',
          data: aircraftParts
        },
        {
          id: 'primary-control-surfaces',
          title: 'Superficies de Control Primarias',
          videoUrl: 'cursos/valuacion_de_aeronaves/2_4_superficies_control_primarias.mp4',
          path: '/courses/aircraft-valuation?section=primary-control-surfaces',
          data: primaryControlSurfaces
        },
        {
          id: 'secondary-control-surfaces',
          title: 'Superficies de Control Secundarias',
          videoUrl: 'cursos/valuacion_de_aeronaves/2_5_superficies_control_secundarias.mp4',
          path: '/courses/aircraft-valuation?section=secondary-control-surfaces',
          data: secondaryControlSurfaces
        },
        {
          id: 'aircraft-zones',
          title: 'Zonas de las Aeronaves',
          videoUrl: 'cursos/valuacion_de_aeronaves/2_6_zonas_aeronaves.mp4',
          path: '/courses/aircraft-valuation?section=aircraft-zones',
          data: aircraftZones
        },
        {
          id: 'inspection-walk-around',
          title: 'Inspección Walk Around',
          videoUrl: 'cursos/valuacion_de_aeronaves/2_7_inspeccion_walk_around.mp4',
          path: '/courses/aircraft-valuation?section=inspection-walk-around',
          data: inspectionWalkAround
        }
      ]
    },
    {
      title: 'Módulo 3: Aspectos Técnicos 2',
      sections: [
        {
          id: 'reciproc-motors',
          title: 'Tipos de Motores: Reciproco',
          videoUrl: 'cursos/valuacion_de_aeronaves/3_1_tipos_motores_reciproco.mp4',
          path: '/courses/aircraft-valuation?section=reciproc-motors',
          data: reciprocMotors
        },
        {
          id: 'turbine-motors',
          title: 'Tipos de Motores: Turbinas',
          videoUrl: 'cursos/valuacion_de_aeronaves/3_2_tipos_motores_turbinas.mp4',
          path: '/courses/aircraft-valuation?section=turbine-motors',
          data: turbineMotors
        },
        {
          id: 'scheduled-maintenance',
          title: 'Mantenimiento Programado',
          videoUrl: 'cursos/valuacion_de_aeronaves/3_3_mantenimiento_programado.mp4',
          path: '/courses/aircraft-valuation?section=scheduled-maintenance',
          data: scheduledMaintenance
        },
        {
          id: 'unscheduled-maintenance',
          title: 'Mantenimiento no Programado',
          videoUrl: 'cursos/valuacion_de_aeronaves/3_4_mantenimiento_no_programado.mp4',
          path: '/courses/aircraft-valuation?section=unscheduled-maintenance',
          data: unscheduledMaintenance
        },
        {
          id: 'value-concepts',
          title: 'Conceptos de Valor',
          videoUrl: 'cursos/valuacion_de_aeronaves/3_5_conceptos_valor.mp4',
          path: '/courses/aircraft-valuation?section=value-concepts',
          data: valueConcepts
        },
        {
          id: 'valuation-approaches',
          title: 'Enfoques Principales de Valoración',
          videoUrl: 'cursos/valuacion_de_aeronaves/3_6_enfoques_valuacion.mp4',
          path: '/courses/aircraft-valuation?section=valuation-approaches',
          data: valuationApproaches
        },
        {
          id: 'replacement-value',
          title: 'Valor de Reposición Nuevo y Valor Neto de Reposición',
          videoUrl: 'cursos/valuacion_de_aeronaves/3_7_valor_reposicion.mp4',
          path: '/courses/aircraft-valuation?section=replacement-value',
          data: replacementValue
        },
        {
          id: 'depreciation-concepts',
          title: 'Conceptos de Depreciación',
          videoUrl: 'cursos/valuacion_de_aeronaves/3_8_conceptos_depreciacion.mp4',
          path: '/courses/aircraft-valuation?section=depreciation-concepts',
          data: depreciationConcepts
        },
        {
          id: 'depreciation-methods',
          title: 'Métodos de Cálculo de Depreciación Acumulada',
          videoUrl: 'cursos/valuacion_de_aeronaves/3_9_metodos_calculo_depreciacion.mp4',
          path: '/courses/aircraft-valuation?section=depreciation-methods',
          data: depreciationMethods
        }
      ]
    },
    {
      title: 'Módulo 4: Ejercicios',
      sections: [
        {
          id: 'exercises-presentation',
          title: 'Presentación de los Ejercicios',
          videoUrl: 'cursos/valuacion_de_aeronaves/4_1_presentacion_ejercicios.mp4',
          path: '/courses/aircraft-valuation?section=exercises-presentation',
          data: exercisesPresentation
        },
        {
          id: 'first-exercise-part',
          title: 'Primera Parte del Ejercicio',
          videoUrl: 'cursos/valuacion_de_aeronaves/4_2_primera_parte_ejercicio.mp4',
          path: '/courses/aircraft-valuation?section=first-exercise-part',
          data: firstExercisePart
        },
        {
          id: 'second-exercise-part',
          title: 'Segunda Parte del Ejercicio',
          videoUrl: 'cursos/valuacion_de_aeronaves/4_3_segunda_parte_ejercicio.mp4',
          path: '/courses/aircraft-valuation?section=second-exercise-part',
          data: secondExercisePart
        },
        {
          id: 'third-exercise-part',
          title: 'Tercera Parte del Ejercicio',
          videoUrl: 'cursos/valuacion_de_aeronaves/4_4_tercera_parte_ejercicio.mp4',
          path: '/courses/aircraft-valuation?section=third-exercise-part',
          data: thirdExercisePart
        }
      ]
    }
  ]
}; 