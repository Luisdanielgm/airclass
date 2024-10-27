'use client'

import React, { useState, useRef, useEffect } from 'react'
import { 
  Box, 
  Typography, 
  Paper, 
  Container,
  Grid
} from '@mui/material'

const transcriptionData = [
  { time: 0, text: "Hola, ¿qué tal? Muy buenas" },
  { time: 5, text: "tardes, sean bienvenidos a este" },
  { time: 7, text: "curso taller de evaluación de" },
  { time: 8, text: "aeronaves, los saluda" },
  { time: 10, text: "cordialmente y muy contento su" },
  { time: 13, text: "servidor Norberto Ramírez, y" },
  { time: 15, text: "pues vamos a iniciar con esta" },
  { time: 19, text: "actividad, estoy haciendo varias" },
  { time: 21, text: "actividades a la vez, entonces" },
  { time: 23, text: "si de pronto ven que me quedo un" },
  { time: 26, text: "poquito callados porque estoy" },
  { time: 27, text: "tratando de tener algún" },
  { time: 28, text: "compañero que llega rezagado al curso." },
  { time: 32, text: "Sin embargo, pues vamos a ir trabajando" },
  { time: 35, text: "juntos para poder llevar a cabo este" },
  { time: 38, text: "curso de manera adecuada. Sean" },
  { time: 41, text: "bienvenidos. Sé que hay gente de" },
  { time: 43, text: "Colombia, de República Dominicana, de" },
  { time: 47, text: "Ecuador, evidentemente de acá de México" },
  { time: 50, text: "y de muchas partes de Latinoamérica." },
  { time: 53, text: "Agradezco muchísimo su presencia y" },
  { time: 56, text: "además también agradezco mucho la" },
  { time: 57, text: "confianza para que un servidor pueda transmitirles información que consideramos que es relevante" },
  { time: 65, text: "desde el punto de vista de nuestro colegio, el Colegio de Evaluadores de Bienes Aeronáuticos," },
  { time: 74, text: "del cual también platicaremos un poco en el transcurso de esta presentación de este día" },
  { time: 81, text: "uno. Quiero agradecer" },
  { time: 84, text: "la presencia de todos" },
  { time: 85, text: "ustedes y hay personas que" },
  { time: 87, text: "conozco y que también" },
  { time: 89, text: "estoy muy contento de que" },
  { time: 91, text: "participen aquí y que además" },
  { time: 93, text: "tienen también participación" },
  { time: 95, text: "en el colegio y" },
  { time: 97, text: "tienen participación como" },
  { time: 99, text: "amigos y como" },
  { time: 100, text: "han sido también" },
  { time: 103, text: "guías," },
  { time: 105, text: "profesores de un servidor." },
  { time: 108, text: "Por lo tanto, quiero también" },
  { time: 109, text: "agradecerle a su" },
  { time: 111, text: "presencia pues a varios compañeros tal" },
  { time: 115, text: "vez no me alcanzaría el tiempo de" },
  { time: 117, text: "mencionarlos pero algunos a todos les" },
  { time: 119, text: "mando un afectuoso saludo pero agradezco" },
  { time: 122, text: "también que esté por ejemplo Edgar" },
  { time: 124, text: "Bejarano aquí integrado a la sesión que" },
  { time: 127, text: "esté Oscar Rivera que esté Juan Carlos" },
  { time: 129, text: "Mesa que esté Miguel Ángel Álvarez y que" },
  { time: 132, text: "se van a integrar más compañeros que" },
  { time: 135, text: "tengo la fortuna de trabajar de conocer" },
  { time: 138, text: "y además de tener una amistad con ellos" },
  { time: 140, text: "y también pues agradecer a todos ustedes." },
  { time: 144, text: "Creo que a partir de este momento en adelante" },
  { time: 146, text: "podrán contar con un servidor para poder" },
  { time: 150, text: "revisar cualquier tema relacionado con evaluación aeronáutica" },
  { time: 154, text: "y también pues para cualquier situación extracurricular que quieran tratar con un servidor con todo gusto voy a estar disponible para cualquier comentario que tengan muy bien pues sin más preámbulos" },
  { time: 172, text: "vamos a iniciar ya estamos grabando la" },
  { time: 175, text: "sesión solamente déjenme admitir a" },
  { time: 178, text: "varios compañeros que están en proceso" },
  { time: 181, text: "en la sala de espera" },
  { time: 182, text: "para que no se vayan a quedar fuera" },
  { time: 189, text: "Parece que ya están uniendo. Muy bien, perfecto. También está Chile presente, Colombia. De aquí de México está un amigo, un gran amigo Oscar de Mérida y están entrando más personas." },
  { time: 211, text: "Entonces bueno, ustedes disculpen, pero vamos a iniciar ya con esta sesión. Quisiera nada más un poco primero de retroalimentación, si están viendo la pantalla que dice curso, taller, evaluación de aeronaves." },
  { time: 226, text: "Correcto, estamos viendo." },
  { time: 227, text: "excelente muchísimas gracias" },
  { time: 229, text: "también quisiera" },
  { time: 232, text: "comentarles" },
  { time: 234, text: "las reglas para poder" },
  { time: 236, text: "convivir adecuadamente" },
  { time: 238, text: "en esta sesión y para" },
  { time: 240, text: "que ustedes sepan qué expectativas vamos" },
  { time: 242, text: "a tener" },
  { time: 243, text: "las reglas son muy sencillas evidentemente" },
  { time: 246, text: "el respeto ante todo y" },
  { time: 248, text: "también mi disposición" },
  { time: 251, text: "para poder responder" },
  { time: 252, text: "cualquier pregunta duda que tengan" },
  { time: 255, text: "solamente solicitaría" },
  { time: 256, text: "si pudieran levantar la mano cuando" },
  { time: 258, text: "quisieran hacer alguna pregunta" },
  { time: 261, text: "pero si por algún motivo" },
  { time: 262, text: "no hemos" },
  { time: 264, text: "podido contestar la pregunta" },
  { time: 267, text: "y seguimos avanzando" },
  { time: 269, text: "por favor abran su micrófono" },
  { time: 271, text: "y sin interrumpir" },
  { time: 273, text: "si algún compañero está" },
  { time: 274, text: "participando" },
  { time: 275, text: "después de que haya terminado la participación" },
  { time: 279, text: "de algún compañero, con confianza" },
  { time: 281, text: "abran el micrófono" },
  { time: 282, text: "coméntenme qué duda tienen" },
  { time: 284, text: "y les pediría que posteriormente lo cerraran" },
  { time: 288, text: "para que mantengamos el audio de la sesión lo más limpio posible." },
  { time: 293, text: "También quisiera comentarles, estamos grabando la sesión," },
  { time: 298, text: "aquellas personas que por algún motivo se lleguen a desconectar" },
  { time: 301, text: "pues tendrán acceso una vez que me lo soliciten" },
  { time: 305, text: "para que puedan tener algunos días de acceso y puedan revisar la grabación." },
  { time: 310, text: "Esta grabación solamente estará disponible de esa forma." },
  { time: 313, text: "tienen que ser solicitudes que ustedes me hagan por favor para que se puedan tener estos accesos" },
  { time: 320, text: "en tercer lugar algunos compañeros han expresado que tienen un poco de temor en el sentido de que probablemente en su región se pueda ir la energía el suministro de energía eléctrica" },
  { time: 334, text: "Y créanme que también estamos un poco padeciendo lo mismo en la zona donde un servidor está haciendo esta transmisión." },
  { time: 341, text: "Entonces también voy a pedir su comprensión." },
  { time: 345, text: "Todo lo que son los temas que vamos a ver en el curso se tendrán que ver completos." },
  { time: 350, text: "Si por algún motivo se llega a cortar mi transmisión, les pido que tengan paciencia. Probablemente me pueda, me estaré comunicando con todos ustedes a través del chat. Por eso era muy importante que estuviéramos dentro." },
  { time: 363, text: "y me estaré comunicando con ustedes." },
  { time: 367, text: "No sucede siempre, pero justamente cuando hay alguna actividad relevante" },
  { time: 372, text: "que estamos realizando de forma remota, suceden las situaciones que nunca suceden" },
  { time: 379, text: "cuando no estamos haciendo algo." },
  { time: 381, text: "Entonces quiero pedirles de favor, si me dan esa, pues espera," },
  { time: 388, text: "esa facilidad de poder tener un poco de paciencia," },
  { time: 392, text: "si es que se me llega a cortar la transmisión, tengan por seguro que si no se puede reactivar," },
  { time: 399, text: "la vamos a reprogramar para que todos tengan el contenido completo." },
  { time: 404, text: "¿Ok? Y por el lado de ustedes, si se llega a cortar, tendrán acceso sin problemas a las grabaciones" },
  { time: 412, text: "una vez que lo soliciten. Esas son las reglas básicas." },
  { time: 416, text: "Entonces vamos a trabajar en algunas partes del curso con Excel o con cualquier hoja de cálculo que ustedes tengan disponible. Por favor, les sugiero que utilicen una computadora de escritorio o una laptop para que puedan ustedes hacer uso de esas hojas de cálculo y puedan hacer los ejercicios que vamos a ir planteando en la sesión." },
  { time: 444, text: "la sesión será de cuatro horas" },
  { time: 447, text: "y la de mañana también" },
  { time: 449, text: "va a empezar a la misma hora que la del día de hoy" },
  { time: 452, text: "y vamos a tener algunos descansos" },
  { time: 455, text: "porque yo también me dedico" },
  { time: 458, text: "al tema de la docencia" },
  { time: 460, text: "en otros temas de dirección de proyectos" },
  { time: 463, text: "entonces me ha resultado mucho más didáctico" },
  { time: 468, text: "hacer algunos descansos de 10 minutos" },
  { time: 471, text: "cada 60 minutos de actividad, cada 50 o 60 minutos." },
  { time: 478, text: "Y eso ayuda a que la gente no se canse tanto" },
  { time: 482, text: "y pueda aprovechar mejor." },
  { time: 485, text: "Entonces, muy probablemente hagamos ese mismo proceso." },
  { time: 488, text: "Haremos una actividad de intercambio que vamos a tener en este curso durante 50 o 60 minutos tendremos un pequeño descanso y" },
  { time: 498, text: "posteriormente retomaremos en donde" },
  { time: 500, text: "dejamos el curso para seguir avanzando" },
  { time: 503, text: "tienen alguna duda comentario alguna" },
  { time: 506, text: "sugerencia" },
  { time: 507, text: "todo entendido gracias muchísimas gracias" },
  { time: 516, text: "por la retroalimentación. Muy bien, pues entonces iniciamos con el curso taller evaluación de" },
  { time: 522, text: "aeronaves. Su servidor Norberto Ramírez, a nombre del Colegio de Evaluadores de Bienes Aeronáuticos," },
  { time: 528, text: "le damos la más cordial bienvenida. Y este va a ser nuestro temario del día de hoy. Los puntos" },
  { time: 534, text: "están ordenados, pero algunos temas, sobre todo el tema del manejo de las hojas de cálculo," },
  { time: 542, text: "podrán estar distribuidos en algunos de los temas." },
  { time: 546, text: "Entonces, no quiere decir que hasta el final veamos cálculos," },
  { time: 552, text: "pero en el día de hoy sí tenemos una carga importante de conceptos" },
  { time: 558, text: "porque son fundamentales para poder entender el proceso de evaluación" },
  { time: 563, text: "enfocado a las aeronaves." },
  { time: 566, text: "Vamos a tener que atender estos temas," },
  { time: 569, text: "pero pues creo que la primer parte será una breve presentación de un servidor, también una breve presentación de lo que es nuestro colegio, es el primer colegio que se crea en Latinoamérica con este concepto y probablemente el primer colegio de profesionistas en el mundo." },
  { time: 593, text: "vamos a hacer una presentación de ustedes" },
  { time: 596, text: "para mí es muy muy importante" },
  { time: 598, text: "conocer un poco de lo que" },
  { time: 600, text: "ustedes realizan" },
  { time: 602, text: "y cuál es la intención" },
  { time: 604, text: "de tomar el curso para que" },
  { time: 606, text: "podamos empatar" },
  { time: 607, text: "esas necesidades y requerimientos" },
  { time: 610, text: "que tienen ustedes" },
  { time: 611, text: "con la presentación que se va a dar" },
  { time: 614, text: "haremos una" },
  { time: 616, text: "breve historia de la aviación" },
  { time: 618, text: "muy puntual" },
  { time: 619, text: "son aproximadamente" },
  { time: 621, text: "diecitos de la aviación." },
  { time: 626, text: "También hablaremos ya temas que son" },
  { time: 629, text: "relevantes para la evaluación que" },
  { time: 631, text: "tienen que ver con legislación" },
  { time: 633, text: "aeronáutica y sobre todo con entidades" },
  { time: 636, text: "que van a estar interviniendo para que" },
  { time: 641, text: "con algunas decisiones pues los aviones" },
  { time: 644, text: "puedan tener la capacidad de volar y" },
  { time: 647, text: "por ende un valor correspondiente por" },
  { time: 650, text: "esa actividad y también hablaremos de actores de la industria en esta parte introductoria del día de hoy" }
];

export default function Component() {
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Función para sincronizar el tiempo del video
  const startTimeSync = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(prev => {
          const newTime = prev + 0.1;
          const maxTime = transcriptionData[transcriptionData.length - 1].time;
          return newTime > maxTime ? maxTime : newTime;
        });
      }
    }, 100);
  }, [isPlaying]);

  // Detener la sincronización
  const stopTimeSync = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Manejar el play/pause
  const togglePlay = React.useCallback(() => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    
    if (newIsPlaying) {
      startTimeSync();
      iframeRef.current?.contentWindow?.postMessage({
        event: 'command',
        func: 'playVideo'
      }, '*');
    } else {
      stopTimeSync();
      iframeRef.current?.contentWindow?.postMessage({
        event: 'command',
        func: 'pauseVideo'
      }, '*');
    }
  }, [isPlaying, startTimeSync, stopTimeSync]);

  // Limpiar el intervalo cuando el componente se desmonte
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Escuchar eventos del iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      try {
        const data = event.data;
        if (data.event === 'onStateChange') {
          setIsPlaying(data.info === 1);
          if (data.info === 1 && !intervalRef.current) {
            startTimeSync();
          } else if (data.info !== 1 && intervalRef.current) {
            stopTimeSync();
          }
        }
      } catch (error) {
        console.error('Error handling message:', error);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [startTimeSync, stopTimeSync]);

  // Modificar la URL del iframe para incluir los parámetros necesarios
  const iframeSrc = `https://drive.google.com/file/d/1Ec5T8Cqxs1LocLJArtEJcmSXe1PNAsBh/preview?enablejsapi=1&origin=${window.location.origin}&controls=1&modestbranding=1`;

  const handleWordClick = (time: number) => {
    setCurrentTime(time)
    
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        event: 'command',
        func: 'seekTo',
        args: [time, true]
      }, '*')
    }
  }

  useEffect(() => {
    // Encontrar el índice del texto que corresponde al tiempo actual
    const newIndex = transcriptionData.findIndex(
      (item, index, array) => 
        currentTime >= item.time && 
        (index === array.length - 1 || currentTime < array[index + 1].time)
    );

    if (newIndex !== -1 && newIndex !== highlightedIndex) {
      setHighlightedIndex(newIndex);
      
      // Scroll al elemento resaltado
      const element = document.getElementById(`transcript-${newIndex}`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center'
        });
      }
    }
  }, [currentTime, highlightedIndex]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Clases de Aeronautica
          </Typography>
        </Grid>
        {/* Video Player Column */}
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={3} 
            sx={{ 
              bgcolor: 'background.default',
              overflow: 'hidden',
              borderRadius: 1
            }}
          >
            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                ref={iframeRef}
                src={iframeSrc}
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="autoplay"
              />
            </Box>
            {/* Agregar botones de control */}
            <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
              <button 
                onClick={togglePlay}
                style={{
                  padding: '8px 16px',
                  cursor: 'pointer',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px'
                }}
              >
                {isPlaying ? 'Pausar' : 'Reproducir'}
              </button>
              <button
                onClick={() => {
                  setCurrentTime(0);
                  setHighlightedIndex(0);
                  stopTimeSync();
                  if (iframeRef.current?.contentWindow) {
                    iframeRef.current.contentWindow.postMessage({
                      event: 'command',
                      func: 'seekTo',
                      args: [0, true]
                    }, '*');
                  }
                }}
                style={{
                  padding: '8px 16px',
                  cursor: 'pointer',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px'
                }}
              >
                Reiniciar
              </button>
            </Box>
          </Paper>
        </Grid>

        {/* Transcription Column */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 2, 
              bgcolor: 'background.default',
              height: '100%',
              maxHeight: 'calc(100vh - 200px)',
              overflow: 'auto'
            }}
          >
            <Typography variant="h6" gutterBottom>
              Transcripción (Tiempo actual: {currentTime.toFixed(1)}s)
            </Typography>
            {transcriptionData.map((item, index) => (
              <Typography 
                key={index} 
                id={`transcript-${index}`}
                sx={{ 
                  cursor: 'pointer', 
                  backgroundColor: index === highlightedIndex ? 'primary.light' : 'transparent',
                  display: 'block',
                  mb: 1,
                  p: 0.5,
                  borderRadius: 1,
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: index === highlightedIndex ? 'primary.light' : 'action.hover'
                  }
                }}
                onClick={() => handleWordClick(item.time)}
              >
                {item.text}
              </Typography>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
