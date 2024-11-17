import { CourseData } from '@/types';
import { AIRCLASS_SERVER_VIDEOS } from '@/config/airclass_server';
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
import { greetingsAndAttendanceRegistration } from './subtitles/greetings-and-attendance-registration';
import { introductionPresentationFirstCase } from './subtitles/introduction-presentation-first-case';
import { firstCasePart1 } from './subtitles/first-case-part-1';
import { firstCasePart2 } from './subtitles/first-case-part-2';
import { firstCasePart3 } from './subtitles/first-case-part-3';
import { firstCasePart4 } from './subtitles/first-case-part-4';
import { introductionToTheSecondCase } from './subtitles/introduction-to-the-second-case';
import { explanationOfTheSecondCase1 } from './subtitles/explanation-of-the-second-case-1';
import { explanationOfTheSecondCase2 } from './subtitles/explanation-of-the-second-case-2';
import { explanationOfTheSecondCase3 } from './subtitles/explanation-of-the-second-case-3';
import { explanationOfTheSecondCase4 } from './subtitles/explanation-of-the-second-case-4';
import { explanationOfTheSecondCase5 } from './subtitles/explanation-of-the-second-case-5';
import { multiCriteriaMethod } from './subtitles/multi-criteria-method';
import { closingFarewell } from './subtitles/closing-farewell';

export const aircraftValuation: CourseData = {
  id: 'aircraft-valuation',
  title: 'Valuación de Aeronaves',
  sections: [
    {
      id: 'introduction',
      title: 'Introducción al Curso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_1,
      path: '/courses/aircraft-valuation?section=introduction',
      data: introduction
    },
    {
      id: 'instructor-background',
      title: 'Antecedentes del Instructor',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_2,
      path: '/courses/aircraft-valuation?section=instructor-background',
      data: instructorBackground
    },
    {
      id: 'introduction-covbaero',
      title: 'Introducción a COVBAERO',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_3,
      path: '/courses/aircraft-valuation?section=introduction-covbaero',
      data: introductionCovbaero
    },
    {
      id: 'participants-presentation-1',
      title: 'Presentación de los participantes 1',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_4,
      path: '/courses/aircraft-valuation?section=participants-presentation-1',
      data: participantsPresentation1
    },
    {
      id: 'participants-presentation-2',
      title: 'Presentación de los participantes 2',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_5,
      path: '/courses/aircraft-valuation?section=participants-presentation-2',
      data: participantsPresentation2
    },
    {
      id: 'aviation-history',
      title: 'Hitos de la Aviación',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_6,
      path: '/courses/aircraft-valuation?section=aviation-history',
      data: aviationHistory
    },
    {
      id: 'aviation-legislation',
      title: 'Legislación Aeronáutica',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_1_7,
      path: '/courses/aircraft-valuation?section=aviation-legislation',
      data: aviationLegislation
    },
    {
      id: 'relevant-participants',
      title: 'Participantes Relevantes',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_1,
      path: '/courses/aircraft-valuation?section=relevant-participants',
      data: relevantParticipants
    },
    {
      id: 'aircraft-classification',
      title: 'Clasificación de Aeronaves',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_2,
      path: '/courses/aircraft-valuation?section=aircraft-classification',
      data: aircraftClassification
    },
    {
      id: 'aircraft-parts',
      title: 'Partes de Aeronaves',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_3,
      path: '/courses/aircraft-valuation?section=aircraft-parts',
      data: aircraftParts
    },
    {
      id: 'primary-control-surfaces',
      title: 'Superficies de Control Primarias',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_4,
      path: '/courses/aircraft-valuation?section=primary-control-surfaces',
      data: primaryControlSurfaces
    },
    {
      id: 'secondary-control-surfaces',
      title: 'Superficies de Control Secundarias',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_5,
      path: '/courses/aircraft-valuation?section=secondary-control-surfaces',
      data: secondaryControlSurfaces
    },
    {
      id: 'aircraft-zones',
      title: 'Zonas de las Aeronaves',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_6,
      path: '/courses/aircraft-valuation?section=aircraft-zones',
      data: aircraftZones
    },
    {
      id: 'inspection-walk-around',
      title: 'Inspección Walk Around',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_2_7,
      path: '/courses/aircraft-valuation?section=inspection-walk-around',
      data: inspectionWalkAround
    },
    {
      id: 'reciproc-motors',
      title: 'Tipos de Motores: Reciproco',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_1,
      path: '/courses/aircraft-valuation?section=reciproc-motors',
      data: reciprocMotors
    },
    {
      id: 'turbine-motors',
      title: 'Tipos de Motores: Turbinas',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_2,
      path: '/courses/aircraft-valuation?section=turbine-motors',
      data: turbineMotors
    },
    {
      id: 'scheduled-maintenance',
      title: 'Mantenimiento Programado',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_3,
      path: '/courses/aircraft-valuation?section=scheduled-maintenance',
      data: scheduledMaintenance
    },
    {
      id: 'unscheduled-maintenance',
      title: 'Mantenimiento no Programado',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_4,
      path: '/courses/aircraft-valuation?section=unscheduled-maintenance',
      data: unscheduledMaintenance
    },
    {
      id: 'value-concepts',
      title: 'Conceptos de Valor',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_5,
      path: '/courses/aircraft-valuation?section=value-concepts',
      data: valueConcepts
    },
    {
      id: 'valuation-approaches',
      title: 'Enfoques Principales de Valoración',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_6,
      path: '/courses/aircraft-valuation?section=valuation-approaches',
      data: valuationApproaches
    },
    {
      id: 'replacement-value',
      title: 'Valor de Reposición Nuevo y Valor Neto de Reposición',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_7,
      path: '/courses/aircraft-valuation?section=replacement-value',
      data: replacementValue
    },
    {
      id: 'depreciation-concepts',
      title: 'Conceptos de Depreciación',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_8,
      path: '/courses/aircraft-valuation?section=depreciation-concepts',
      data: depreciationConcepts
    },
    {
      id: 'depreciation-methods',
      title: 'Métodos de Cálculo de Depreciación Acumulada',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_3_9,
      path: '/courses/aircraft-valuation?section=depreciation-methods',
      data: depreciationMethods
    },
    {
      id: 'exercises-presentation',
      title: 'Presentación de los Ejercicios',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_4_1,
      path: '/courses/aircraft-valuation?section=exercises-presentation',
      data: exercisesPresentation
    },
    {
      id: 'first-exercise-part',
      title: 'Primera Parte del Ejercicio',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_4_2,
      path: '/courses/aircraft-valuation?section=first-exercise-part',
      data: firstExercisePart
    },
    {
      id: 'second-exercise-part',
      title: 'Segunda Parte del Ejercicio',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_4_3,
      path: '/courses/aircraft-valuation?section=second-exercise-part',
      data: secondExercisePart
    },
    {
      id: 'third-exercise-part',
      title: 'Tercera Parte del Ejercicio',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_4_4,
      path: '/courses/aircraft-valuation?section=third-exercise-part',
      data: thirdExercisePart
    },
    {
      id: 'greetings-and-attendance-registration',
      title: 'Saludos y Registro de Asistencia',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_1,
      path: '/courses/aircraft-valuation?section=greetings-and-attendance-registration',
      data: greetingsAndAttendanceRegistration
    },
    {
      id: 'introduction-and-presentation-of-the-first-case',
      title: 'Introducción y Presentación del Primer Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_2,
      path: '/courses/aircraft-valuation?section=introduction-and-presentation-of-the-first-case',
      data: introductionPresentationFirstCase
    },
    {
      id: 'explanation-of-the-first-case',
      title: 'Primera Parte del Primer Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_3,
      path: '/courses/aircraft-valuation?section=explanation-of-the-first-case',
      data: firstCasePart1
    },
    {
      id: 'explanation-of-the-first-case-2',
      title: 'Segunda Parte del Primer Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_4,
      path: '/courses/aircraft-valuation?section=explanation-of-the-first-case-2',
      data: firstCasePart2
    },
    {
      id: 'explanation-of-the-first-case-3',
      title: 'Tercera Parte del Primer Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_5,
      path: '/courses/aircraft-valuation?section=explanation-of-the-first-case-3',
      data: firstCasePart3
    },
    {
      id: 'explanation-of-the-first-case-4',
      title: 'Cuarta Parte del Primer Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_6,
      path: '/courses/aircraft-valuation?section=explanation-of-the-first-case-4',
      data: firstCasePart4
    },
    {
      id: 'introduction-to-the-second-case',
      title: 'Quinta Parte del Primer Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_7,
      path: '/courses/aircraft-valuation?section=introduction-to-the-second-case',
      data: introductionToTheSecondCase
    },
    {
      id: 'explanation-of-the-second-case-1',
      title: 'Primera Parte del Segundo Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_8,
      path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-1',
      data: explanationOfTheSecondCase1
    },
    {
      id: 'explanation-of-the-second-case-2',
      title: 'Segunda Parte del Segundo Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_9,
      path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-2',
      data: explanationOfTheSecondCase2
    },
    {
      id: 'explanation-of-the-second-case-3',
      title: 'Tercera Parte del Segundo Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_10,
      path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-3',
      data: explanationOfTheSecondCase3
    },
    {
      id: 'explanation-of-the-second-case-4',
      title: 'Cuarta Parte del Segundo Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_11,
      path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-4',
      data: explanationOfTheSecondCase4
    },
    {
      id: 'explanation-of-the-second-case-5',
      title: 'Quinta Parte del Segundo Caso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_12,
      path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-5',
      data: explanationOfTheSecondCase5
    },
    {
      id: 'multi-criteria-method',
      title: 'Método de Multi Criterio',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_13,
      path: '/courses/aircraft-valuation?section=multi-criteria-method',
      data: multiCriteriaMethod
    },
    {
      id: 'closing-and-farewell',
      title: 'Cierre y Despedida',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIRCRAFT_VALUATION_5_14,
      path: '/courses/aircraft-valuation?section=closing-and-farewell',
      data: closingFarewell
    }
  ]
}; 