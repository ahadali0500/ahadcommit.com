'use client'
import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import './globals.css'; // or wherever your Tailwind CSS is

const LoaderExample = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-2xl font-bold mb-4">Loader Examples</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Small Loader */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Small</h2>
          <Loader size="small" color="blue-500" />
        </div>

        {/* Medium Loader */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Medium</h2>
          <Loader size="medium" color="green-500" />
        </div>

        {/* Large Loader */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold">Large</h2>
          <Loader size="large" color="purple-500" />
        </div>
      </div>

      {/* Loading State Example */}
      <div className="mt-12 p-8 border rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Loading State Example</h2>
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader size="medium" color="primary" />
            <p className="text-gray-600">Loading content...</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-medium">Content loaded successfully!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoaderExample 