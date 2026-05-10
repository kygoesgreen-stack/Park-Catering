'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import clsx from 'clsx'

type Direction = 'up' | 'down' | 'left' | 'right'

interface FadeInProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px 0px' })

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return { y: distance }
      case 'down': return { y: -distance }
      case 'left': return { x: distance }
      case 'right': return { x: -distance }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialTransform() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}