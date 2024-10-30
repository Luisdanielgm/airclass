'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          ¡Bienvenido a la Plataforma de Cursos de Aeronáutica!
        </h1>
        
        <div className="bg-slate-900 p-8 rounded-lg shadow-xl border border-slate-800">
          <p className="text-xl text-slate-300 mb-6">
            Selecciona un curso del menú lateral para comenzar tu aprendizaje
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Experiencia Profesional</h3>
              <p className="text-slate-300">
                Material desarrollado por expertos en valuación de aeronaves con décadas de experiencia en el sector
              </p>
            </div>
            
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Metodología Especializada</h3>
              <p className="text-slate-300">
                Aprenda técnicas profesionales de valuación aplicables al mercado aeronáutico actual
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
