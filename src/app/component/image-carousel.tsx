"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  images: Array<{ src: string; alt?: string }>
  autoSlideInterval?: number
  onImageChange?: (index: number) => void
}

export default function ImageCarousel({ images, autoSlideInterval = 3000, onImageChange }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide effect
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSlideInterval])

  // Notify parent of image change
  useEffect(() => {
    onImageChange?.(currentIndex)
  }, [currentIndex, onImageChange])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  if (!images || images.length === 0) {
    return <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">No images</div>
  }

  return (
    <div className="relative w-full h-64  bg-white/5 border border-white/10 rounded-t-lg overflow-hidden group">
      {/* Image Display */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt || `Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-purple-600 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-purple-600 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-purple-600 w-6" : "bg-white/50 hover:bg-white"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Image Counter */}
      <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
