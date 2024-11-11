import { CourseData } from '@/types';
import { AIRCLASS_SERVER_VIDEOS } from '@/config/airclass_server';
import { introductionCourse } from './subtitles/introduction-course';

export const airTransportEconomy: CourseData = {
  id: 'air-transport-economy',
  title: 'Economía del transporte aéreo',
  sections: [
    {
      id: 'introduction-course',
      title: 'Introducción al Curso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_1,
      path: '/courses/air-transport-economy?section=introduction-course',
      data: introductionCourse
    }
  ]
};