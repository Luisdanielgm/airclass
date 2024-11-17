import { CourseData } from '@/types';
import { AIRCLASS_SERVER_VIDEOS } from '@/config/airclass_server';
import { introductionCourse } from './subtitles/introduction-course';
import { courseMapModule1 } from './subtitles/course-map-module-1';
import { objectivesModule1 } from './subtitles/objectives-module-1';
import { resourcesModule1 } from './subtitles/resources-module-1';
import { capacityRegulatedByGovernments } from './subtitles/capacity-regulated-by-governments';
import { principlesBehindCapacityRegulationByGovernments } from './subtitles/principles-behind-capacity-regulation-by-governments';

export const airTransportEconomy: CourseData = {
  id: 'air-transport-economy',
  title: 'Economía del transporte aéreo',
  sections: [
    {
      id: 'introduction-course',
      title: 'Introducción al Curso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_0_1,
      path: '/courses/air-transport-economy?section=introduction-course',
      data: introductionCourse
    },
    {
      id: 'course-map-module-1',
      title: 'Mapa del curso módulo 1',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_1,
      path: '/courses/air-transport-economy?section=course-map-module-1',
      data: courseMapModule1
    },
    {
      id: 'objectives-module-1',
      title: 'Objetivos del módulo 1',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_2,
      path: '/courses/air-transport-economy?section=objectives-module-1',
      data: objectivesModule1
    },
    {
      id: 'resources-module-1',
      title: 'Recursos del módulo 1',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_3,
      path: '/courses/air-transport-economy?section=resources-module-1',
      data: resourcesModule1
    },
    {
      id: 'capacity-regulated-by-governments',
      title: 'Capacidad regulada por gobiernos',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_4,
      path: '/courses/air-transport-economy?section=capacity-regulated-by-governments',
      data: capacityRegulatedByGovernments
    },
    {
      id: 'principles-behind-capacity-regulation-by-governments',
      title: 'Principios detrás de la regulación de capacidad por gobiernos',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_5,
      path: '/courses/air-transport-economy?section=principles-behind-capacity-regulation-by-governments',
      data: principlesBehindCapacityRegulationByGovernments
    }
  ]
};