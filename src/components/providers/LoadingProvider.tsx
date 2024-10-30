'use client'

import { Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loading from '@/components/ui/Loading'

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <LoadingContent>{children}</LoadingContent>
    </Suspense>
  )
}

function LoadingContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    
    // Mostrar loading por al menos 2 segundos
    const minLoadingTime = 2000
    const startTime = Date.now()

    const timeout = setTimeout(() => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime)

      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime)
    }, 500) // Mantenemos un pequeño delay inicial

    return () => clearTimeout(timeout)
  }, [pathname, searchParams])

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  )
} 