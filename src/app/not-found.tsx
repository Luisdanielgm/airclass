'use client'

import { Suspense } from 'react'

export default function NotFound() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <NotFoundContent />
    </Suspense>
  )
}

function NotFoundContent() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          404 - Página no encontrada
        </h1>
        <p className="text-xl text-slate-300">
          Lo sentimos, la página que buscas no existe.
        </p>
      </div>
    </div>
  )
} 