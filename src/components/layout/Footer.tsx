'use client'

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Airclass
            </span>
            <span className="text-slate-400">
              por
            </span>
            <a 
              href="https://aiteam.com.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              AITeam
            </a>
          </div>
          
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 