'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'

interface LoaderProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
  className?: string
}

const Loader: React.FC<LoaderProps> = ({ 
  size = 'medium', 
  color = 'primary',
  className = ''
}) => {
  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  }

  const circleVariants: Variants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        ease: "linear",
        repeat: Infinity
      }
    }
  }

  const dotVariants: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`relative ${sizeMap[size]}`}
        variants={circleVariants}
        animate="animate"
      >
        {/* Outer rotating circle */}
        <motion.div
          className={`absolute inset-0 rounded-full border-2 border-t-${color} border-r-transparent border-b-transparent border-l-transparent`}
          variants={circleVariants}
          animate="animate"
        />

        {/* Inner rotating circle */}
        <motion.div
          className={`absolute inset-2 rounded-full border-2 border-b-${color} border-r-transparent border-t-transparent border-l-transparent`}
          variants={circleVariants}
          animate="animate"
          style={{ animationDirection: 'reverse' }}
        />

        {/* Center dot */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center`}
          variants={dotVariants}
          animate="animate"
        >
          <div className={`w-2 h-2 rounded-full bg-${color}`} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Loader 