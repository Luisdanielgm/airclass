// CardSkeleton.tsx

import React from "react";

export default function CardSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-200 dark:bg-gray-700 h-32 w-full rounded-t-md"></div> {/* Simula la imagen */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div> {/* Simula el título */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div> {/* Simula el contenido */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div> {/* Simula la fecha */}
    </div>
  );
}
