import { CourseData } from '@/types';
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

export const aircraftValuation2: CourseData = {
  id: 'aircraft-valuation-2',
  title: 'Valuación de Aeronaves 2',
  groups: [ 
    {
      title: 'Módulo 1: Saludos y Registro de Asistencia',
      sections: [
        {
          id: 'greetings-and-attendance-registration',
          title: 'Saludos y Registro de Asistencia',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_1_saludo_registro_asistencia.mp4',
          path: '/courses/aircraft-valuation?section=greetings-and-attendance-registration',
          data: greetingsAndAttendanceRegistration
        }
      ]
    },
    {
      title: 'Módulo 2: Explicación del Primer Caso',
      sections: [
        {
          id: 'introduction-and-presentation-of-the-first-case',
          title: 'Introducción y Presentación del Primer Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_2_introduccion_presentacion_primer_caso.mp4',
          path: '/courses/aircraft-valuation?section=introduction-and-presentation-of-the-first-case',
          data: introductionPresentationFirstCase
        },
        {
          id: 'explanation-of-the-first-case',
        title: 'Primera Parte del Primer Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_3_primer_caso_1.mp4',
          path: '/courses/aircraft-valuation?section=explanation-of-the-first-case',
          data: firstCasePart1
        },
        {
          id: 'explanation-of-the-first-case-2',
          title: 'Segunda Parte del Primer Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_4_primer_caso_2.mp4',
          path: '/courses/aircraft-valuation?section=explanation-of-the-first-case-2',
          data: firstCasePart2
        },
        {
          id: 'explanation-of-the-first-case-3',
          title: 'Tercera Parte del Primer Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_5_primer_caso_3.mp4',
          path: '/courses/aircraft-valuation?section=explanation-of-the-first-case-3',
          data: firstCasePart3
        },
        {
          id: 'explanation-of-the-first-case-4',
          title: 'Cuarta Parte del Primer Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_6_primer_caso_4.mp4',
          path: '/courses/aircraft-valuation?section=explanation-of-the-first-case-4',
          data: firstCasePart4
        }
      ]
    },
    {
      title: 'Módulo 3: Explicación del Segundo Caso',
      sections: [
        {
          id: 'introduction-to-the-second-case',
          title: 'Quinta Parte del Primer Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_7_presentacion_segundo_caso.mp4',
          path: '/courses/aircraft-valuation?section=introduction-to-the-second-case',
          data: introductionToTheSecondCase
        },
        {
          id: 'explanation-of-the-second-case-1',
          title: 'Primera Parte del Segundo Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_8_segundo_caso_1.mp4',
          path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-1',
          data: explanationOfTheSecondCase1
        },
        {
          id: 'explanation-of-the-second-case-2',
          title: 'Segunda Parte del Segundo Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_9_segundo_caso_2.mp4',
          path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-2',
          data: explanationOfTheSecondCase2
        },
        {
          id: 'explanation-of-the-second-case-3',
          title: 'Tercera Parte del Segundo Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_10_segundo_caso_3.mp4',
          path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-3',
          data: explanationOfTheSecondCase3
        },
        {
          id: 'explanation-of-the-second-case-4',
          title: 'Cuarta Parte del Segundo Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_11_segundo_caso_4.mp4',
          path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-4',
          data: explanationOfTheSecondCase4
        },
        {
          id: 'explanation-of-the-second-case-5',
          title: 'Quinta Parte del Segundo Caso',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_12_segundo_caso_5.mp4',
          path: '/courses/aircraft-valuation?section=explanation-of-the-second-case-5',
          data: explanationOfTheSecondCase5
        }
      ]
    },
    {
      title: 'Módulo 4: Explicación del Método Multi-Criterio',
      sections: [
        {
          id: 'multi-criteria-method',
          title: 'Método de Multi Criterio',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_13_metodo_multi_criterio.mp4',
          path: '/courses/aircraft-valuation?section=multi-criteria-method',
          data: multiCriteriaMethod
        }
      ]
    },
    {
      title: 'Módulo 5: Cierre y Despedida',
      sections: [
        {
          id: 'closing-and-farewell',
          title: 'Cierre y Despedida',
          videoUrl: 'cursos/valuacion_de_aeronaves/5_14_cierre_despedida.mp4',
          path: '/courses/aircraft-valuation?section=closing-and-farewell',
          data: closingFarewell
        }
      ]
    }
  ]
}; 