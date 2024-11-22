import { CourseData } from '@/types';
import { introductionCourse } from './subtitles/introduction-course';
import { courseMapModule1 } from './subtitles/course-map-module-1';
import { objectivesModule1 } from './subtitles/objectives-module-1';
import { resourcesModule1 } from './subtitles/resources-module-1';
import { capacityRegulatedByGovernments } from './subtitles/capacity-regulated-by-governments';
import { principlesBehindCapacityRegulationByGovernments } from './subtitles/principles-behind-capacity-regulation-by-governments';
import { capacityFromThePerspectiveOfGovernment } from './subtitles/capacity-from-the-perspective-of-government';
import { capacityPolicyDevelopment } from './subtitles/capacity-policy-development';

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
          videoUrl: 'cursos/economia_del_transporte_aereo/introduction/1_1_introduction_course.mp4',
          path: '/courses/air-transport-economy?section=introduction-course',
          data: introductionCourse
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