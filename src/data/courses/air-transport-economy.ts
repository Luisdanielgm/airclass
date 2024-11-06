import { CourseData } from '@/types';
import { AIRCLASS_SERVER_VIDEOS } from '@/config/airclass_server';

export const airTransportEconomy: CourseData = {
  id: 'air-transport-economy',
  title: 'Economía del transporte aéreo',
  sections: [
    {
      id: 'introduction-course',
      title: 'Introducción al Curso',
      videoUrl: AIRCLASS_SERVER_VIDEOS.AIR_TRANSPORT_ECONOMY_1_1,
      path: '/courses/air-transport-economy?section=introduction-course',
      data: [
        { time: 0, text: "Bienvenido al curso en línea de Economía del transporte aéreo." },
        { time: 6, text: "Este curso está dividido en seis módulos de aprendizaje dinámico." },
        { time: 10, text: "Cada módulo de aprendizaje concluye con un cuestionario de repaso." },
        { time: 14, text: "El examen final consta de 32 preguntas de opción múltiple." },
        { time: 18, text: "Se requiere una puntuación igual o superior al 80% para aprobar este curso." },
        { time: 22, text: "Tenga en cuenta que sólo se le concederán tres intentos." },
        { time: 25, text: "Al completar con éxito el examen, recibirá el certificado electrónico de la OACI." },
        { time: 30, text: "La duración de este curso a su propio ritmo y la evaluación final es de aproximadamente seis horas." }
      ]
    }
  ]
}; 