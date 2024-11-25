import { CourseData } from '@/types';
import { introductionCourse } from './subtitles/introduction/introduction-course';
import { navigationTips } from './subtitles/introduction/navigation-tips';
import { courseObjectives } from './subtitles/introduction/course-objectives';
import { courseMap } from './subtitles/introduction/course-map';
import { courseMapModule1 } from './subtitles/module_1/course-map-module-1';
import { objectivesModule1 } from './subtitles/module_1/objectives-module-1';
import { resourcesModule1 } from './subtitles/module_1/resources-module-1';
import { capacityRegulatedByGovernments } from './subtitles/module_1/capacity-regulated-by-governments';
import { principlesBehindCapacityRegulationByGovernments } from './subtitles/module_1/principles-behind-capacity-regulation-by-governments';
import { capacityFromThePerspectiveOfGovernment } from './subtitles/module_1/capacity-from-the-perspective-of-government';
import { capacityPolicyDevelopment } from './subtitles/module_1/capacity-policy-development';
import { airCarrierCapacityCommonTerms } from './subtitles/module_1/air-carrier-capacity-common-terms';
import { discoveryActivity } from './subtitles/module_1/discovery-activity';
import { catchingUp } from './subtitles/module_1/catching-up';
import { methodsChartInBilateralAgreements } from './subtitles/module_1/methods-chart-in-bilateral-agreements';
import { discoveryActivity2 } from './subtitles/module_1/discovery-activity-2';
import { catchingUp2 } from './subtitles/module_1/catching-up-2';
import { managingChallengesAirCarrierCapacityRegulation } from './subtitles/module_1/managing-challenges-air-carrier-capacity-regulation';
import { liberalizationAirCarrierCapacity } from './subtitles/module_1/liberalization-air-carrier-capacity';
import { capacityAsViewedByAirCarriers } from './subtitles/module_1/capacity-as-viewed-by-air-carriers';
import { capacityMatchTrafficDemand } from './subtitles/module_1/capacity-match-traffic-demand';
import { challengesAirlinesMatchCapacityWithDemand } from './subtitles/module_1/challenges-airlines-match-capacity-with-demand';
import { strategiesToOvercomeCapacityChallenges } from './subtitles/module_1/strategies-to-overcome-capacity-challenges';
import { factorsInfluenceSupplyDemand } from './subtitles/module_1/factors-influence-supply-demand';
import { leadTime } from './subtitles/module_1/lead-time';
import { toolsOptimizeOperatingResults } from './subtitles/module_1/tools-optimize-operating-results';
import { reviewQuiz } from './subtitles/module_1/review-quiz';
import { moduleSummary } from './subtitles/module_1/module-summary';

export const airTransportEconomy: CourseData = {
  id: 'air-transport-economy',
  title: 'Economía del transporte aéreo',
  groups: [
    {
      title: 'Introducción al Curso',
      sections: [
        {
          id: 'introduction-course',
          title: 'Introducción al Curso',
          videoUrl: 'cursos/economia_del_transporte_aereo/introduction/0_1_introduction_course.mp4',
          path: '/courses/air-transport-economy?section=introduction-course',
          data: introductionCourse
        },
        {
          id: 'navigation-tips',
          title: 'Consejos de navegación',
          videoUrl: 'cursos/economia_del_transporte_aereo/introduction/0_2_navigation_tips.mp4',
          path: '/courses/air-transport-economy?section=navigation-tips',
          data: navigationTips
        },
        {
          id: 'course-objectives',
          title: 'Objetivos del Curso',
          videoUrl: 'cursos/economia_del_transporte_aereo/introduction/0_3_course_objectives.mp4',
          path: '/courses/air-transport-economy?section=course-objectives',
          data: courseObjectives
        },
        {
          id: 'course-map',
          title: 'Mapa del Curso',
          videoUrl: 'cursos/economia_del_transporte_aereo/introduction/0_4_course_map.mp4',
          path: '/courses/air-transport-economy?section=course-map',
          data: courseMap
        }
      ]
    },
    {
      title: 'Módulo 1: Capacidad del Transportista Aéreo',
      sections: [
        {
          id: 'course-map-module-1',
          title: 'Mapa del curso módulo 1',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_1_course_map.mp4',
          path: '/courses/air-transport-economy?section=course-map-module-1',
          data: courseMapModule1
        },
        {
          id: 'objectives-module-1',
          title: 'Objetivos del módulo 1',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_2_module_objectives.mp4',
          path: '/courses/air-transport-economy?section=objectives-module-1',
          data: objectivesModule1
        },
        {
          id: 'resources-module-1',
          title: 'Recursos del módulo 1',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_3_modules_resources.mp4',
          path: '/courses/air-transport-economy?section=resources-module-1',
          data: resourcesModule1
        },
        {
          id: 'capacity-regulated-by-governments',
          title: 'Capacidad regulada por gobiernos',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_4_capacity_regulated_by_gobernments.mp4',
          path: '/courses/air-transport-economy?section=capacity-regulated-by-governments',
          data: capacityRegulatedByGovernments
        },
        {
          id: 'principles-behind-capacity-regulation-by-governments',
          title: 'Principios detrás de la regulación de capacidad por gobiernos',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_5_principles_behind_capacity_regulation_by_gobernments.mp4',
          path: '/courses/air-transport-economy?section=principles-behind-capacity-regulation-by-governments',
          data: principlesBehindCapacityRegulationByGovernments
        },
        {
          id: 'capacity-from-the-perspective-of-government',
          title: 'Capacidad desde la Perspectiva del Gobierno',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_6_capacity_from_perspective_government.mp4',
          path: '/courses/air-transport-economy?section=capacity-from-the-perspective-of-government',
          data: capacityFromThePerspectiveOfGovernment
        },
        {
          id: 'capacity-policy-development',
          title: 'Desarrollo de políticas de capacidad',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_7_capacity_policy_development.mp4',
          path: '/courses/air-transport-economy?section=capacity-policy-development',
          data: capacityPolicyDevelopment
        },
        {
          id: 'air-carrier-capacity-common-terms',
          title: 'Términos comunes de capacidad de aerolíneas',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_8_air_carrier_capacity_common_terms.mp4',
          path: '/courses/air-transport-economy?section=air-carrier-capacity-common-terms',
          data: airCarrierCapacityCommonTerms
        },
        {
          id: 'discovery-activity',
          title: 'Actividad de descubrimiento',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_9_discovery_activity.mp4',
          path: '/courses/air-transport-economy?section=discovery-activity',
          data: discoveryActivity
        },
        {
          id: 'catching-up',
          title: 'Poniéndose al Día',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_10_catching_up.mp4',
          path: '/courses/air-transport-economy?section=catching-up',
          data: catchingUp
        },
        {
          id: 'methods-chart-in-bilateral-agreements',
          title: 'Métodos de gráficos en acuerdos bilaterales',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_11_methods_chart_in_bilateral_agreements.mp4',
          path: '/courses/air-transport-economy?section=methods-chart-in-bilateral-agreements',
          data: methodsChartInBilateralAgreements
        },
        {
          id: 'discovery-activity-2',
          title: 'Actividad de descubrimiento 2',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_12_discovery_activity_2.mp4',
          path: '/courses/air-transport-economy?section=discovery-activity-2',
          data: discoveryActivity2
        },
        {
          id: 'catching-up-2',
          title: 'Poniéndose al día 2',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_13_catching_up_2.mp4',
          path: '/courses/air-transport-economy?section=catching-up-2',
          data: catchingUp2
        },
        {
          id: 'managing-challenges-air-carrier-capacity-regulation',
          title: 'Gestión de desafíos de regulación de capacidad de aerolíneas',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_14_managing_challenges_air_carrier_capacity_regulation.mp4',
          path: '/courses/air-transport-economy?section=managing-challenges-air-carrier-capacity-regulation',
          data: managingChallengesAirCarrierCapacityRegulation
        },
        {
          id: 'liberalization-air-carrier-capacity',
          title: 'Liberalización de la capacidad de aerolíneas',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_15_liberalization_air_carrier_capacity.mp4',
          path: '/courses/air-transport-economy?section=liberalization-air-carrier-capacity',
          data: liberalizationAirCarrierCapacity
        },
        {
          id: 'capacity-as-viewed-by-air-carriers',
          title: 'Capacidad desde la perspectiva de las aerolíneas',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_16_capacity_as_viewed_by_air_carriers.mp4',
          path: '/courses/air-transport-economy?section=capacity-as-viewed-by-air-carriers',
          data: capacityAsViewedByAirCarriers
        },
        {
          id: 'capacity-match-traffic-demand',
          title: 'Capacidad que coincide con la demanda de tráfico',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_17_capacity_match_traffic_demand.mp4',
          path: '/courses/air-transport-economy?section=capacity-match-traffic-demand',
          data: capacityMatchTrafficDemand
        },
        {
          id: 'challenges-airlines-match-capacity-with-demand',
          title: 'Desafíos de las aerolíneas para coincidir con la capacidad y la demanda de tráfico',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_18_challenges_airlines_match_capacity_with_demand.mp4',
          path: '/courses/air-transport-economy?section=challenges-airlines-match-capacity-with-demand',
          data: challengesAirlinesMatchCapacityWithDemand
        },
        {
          id: 'strategies-to-overcome-capacity-challenges',
          title: 'Estrategias para superar desafíos de capacidad',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_19_strategies_to_overcome_capacity_challenges.mp4',
          path: '/courses/air-transport-economy?section=strategies-to-overcome-capacity-challenges',
          data: strategiesToOvercomeCapacityChallenges
        },
        {
          id: 'factors-influence-supply-demand',
          title: 'Factores que influyen en la oferta y la demanda',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_20_factors_influence_supply_demand.mp4',
          path: '/courses/air-transport-economy?section=factors-influence-supply-demand',
          data: factorsInfluenceSupplyDemand
        },
        {
          id: 'lead-time',
          title: 'Plazo de entrega',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_21_lead_time.mp4',
          path: '/courses/air-transport-economy?section=lead-time',
          data: leadTime
        },
        {
          id: 'tools-optimize-operating-results',
          title: 'Herramientas para optimizar resultados operativos',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_22_tools_optimize_operating_results.mp4',
          path: '/courses/air-transport-economy?section=tools-optimize-operating-results',
          data: toolsOptimizeOperatingResults
        },
        {
          id: 'review-quiz',
          title: 'Revisión de cuestionario',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_23_review_quiz.mp4',
          path: '/courses/air-transport-economy?section=review-quiz',
          data: reviewQuiz
        },
        {
          id: 'module-summary',
          title: 'Resumen del módulo 1',
          videoUrl: 'cursos/economia_del_transporte_aereo/modulo_1/1_24_module_summary.mp4',
          path: '/courses/air-transport-economy?section=module-summary',
          data: moduleSummary
        }
      ]
    },
    {
      title: 'Módulo 2: Tarifas del Transportista Aéreo',
      sections: []
    },
    {
      title: 'Módulo 3: Carga Aérea',
      sections: []
    },
    {
      title: 'Módulo 4: Servicios Aéreos No Regulares',
      sections: []
    },
    {
      title: 'Módulo 5: Actividades Comerciales y Cooperativas de Aerolíneas',
      sections: []
    },
    {
      title: 'Módulo 6: Gestión Económica y Financiera de Aeropuertos',
      sections: []
    }
  ]
};