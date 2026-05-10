'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { hero } from '@/config/content'

const stagger = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  },
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-charcoal-900/60 z-10" aria-hidden="true" />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsInline="true"
        disablePictureInPicture
        controls={false}
        controlsList="nodownload nofullscreen"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-poster.jpg"
        preload="auto"
        aria-hidden="true"
        style={{ WebkitTouchCallout: 'none' }}
      >
        <source src={hero.videoPlaceholder} type="video/mp4" />
      </video>

      <motion.div
        variants={stagger.container}
        initial="hidden"
        animate="show"
        className="relative z-20 section-container text-center text-cream-50 px-4"
      >
        <motion.p variants={stagger.item} className="eyebrow text-cream-200/70 mb-6 md:mb-8">
          {hero.subheadline}
        </motion.p>

        <motion.h1
          variants={stagger.item}
          className="font-serif font-light leading-[1.02] mb-6 md:mb-8"
          style={{ fontSize: 'clamp(2.5rem, 8vw + 1rem, 7rem)' }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          variants={stagger.item}
          className="body-lg text-cream-200/80 max-w-xl mx-auto mb-10 md:mb-14"
        >
          {hero.body}
        </motion.p>

        <motion.div
          variants={stagger.item}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center"
        >
          {hero.ctas.map((cta) =>
            cta.variant === 'primary' ? (
              <Link key={cta.href} href={cta.href} className="btn-primary text-base md:text-sm px-6 md:px-8 py-3 md:py-4">
                {cta.label}
              </Link>
            ) : (
              <Link key={cta.href} href={cta.href} className="btn-secondary text-base md:text-sm px-6 md:px-8 py-3 md:py-4">
                {cta.label}
              </Link>
            )
          )}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col items-center gap-2 text-cream-50/40"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-sans">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
              <path d="M8 4v16M2 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}