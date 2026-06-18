'use client'

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Terminal, Shield, Code, Network, Server } from 'lucide-react'
import type { JSX, PointerEvent, KeyboardEvent } from 'react'

interface Feature {
  id: string
  title: string
  description: string
  Icon: typeof Terminal
}

const features: Feature[] = [
  {
    id: 'commands',
    title: 'Commands',
    description: 'Master essential Linux commands from file operations to process management with real examples.',
    Icon: Terminal,
  },
  {
    id: 'permissions',
    title: 'Permissions',
    description: 'Understand users, groups, chmod, chown, and sudo to secure your Linux systems.',
    Icon: Shield,
  },
  {
    id: 'scripting',
    title: 'Shell Scripting',
    description: 'Automate tasks with bash scripts using variables, conditions, loops, and functions.',
    Icon: Code,
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Configure networks, use SSH, manage firewalls, and troubleshoot connectivity issues.',
    Icon: Network,
  },
  {
    id: 'sysadmin',
    title: 'System Administration',
    description: 'Manage services, cron jobs, disk usage, backups, and perform real admin tasks.',
    Icon: Server,
  },
]

const FeaturesCarousel = memo(function FeaturesCarousel(): JSX.Element {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false)
  const [canScrollNext, setCanScrollNext] = useState<boolean>(true)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const startXRef = useRef<number>(0)
  const scrollLeftRef = useRef<number>(0)

  const updateScrollState = useCallback((): void => {
    const el = scrollerRef.current
    if (el === null) return
    setCanScrollPrev(el.scrollLeft > 10)
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect((): (() => void) | undefined => {
    const el = scrollerRef.current
    if (el === null) return undefined
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    return (): void => el.removeEventListener('scroll', updateScrollState)
  }, [updateScrollState])

  useEffect((): (() => void) | undefined => {
    const el = scrollerRef.current
    if (el === null) return undefined
    const slides = el.querySelectorAll<HTMLElement>('[data-slide]')
    if (slides.length === 0) return undefined
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = (entry.target as HTMLElement).getAttribute('data-index')
            if (idx !== null) setActiveIndex(parseInt(idx, 10))
          }
        }
      },
      { root: el, threshold: [0.5, 0.75, 1] },
    )
    slides.forEach((s: HTMLElement) => observer.observe(s))
    return (): void => observer.disconnect()
  }, [])

  const scrollToIndex = useCallback((index: number): void => {
    const el = scrollerRef.current
    if (el === null) return
    const slide = el.querySelector<HTMLElement>(`[data-index="${index}"]`)
    if (slide === null) return
    el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: 'smooth' })
  }, [])

  const scrollPrev = useCallback((): void => {
    const el = scrollerRef.current
    if (el === null) return
    const cardWidth = el.clientWidth / 3
    el.scrollBy({ left: -cardWidth, behavior: 'smooth' })
  }, [])

  const scrollNext = useCallback((): void => {
    const el = scrollerRef.current
    if (el === null) return
    const cardWidth = el.clientWidth / 3
    el.scrollBy({ left: cardWidth, behavior: 'smooth' })
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>): void => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); scrollPrev() }
      else if (e.key === 'ArrowRight') { e.preventDefault(); scrollNext() }
      else if (e.key === 'Home') { e.preventDefault(); scrollToIndex(0) }
      else if (e.key === 'End') { e.preventDefault(); scrollToIndex(features.length - 1) }
    },
    [scrollPrev, scrollNext, scrollToIndex],
  )

  const handlePointerDown = useCallback((e: PointerEvent<HTMLDivElement>): void => {
    const el = scrollerRef.current
    if (el === null) return
    setIsDragging(true)
    startXRef.current = e.clientX
    scrollLeftRef.current = el.scrollLeft
    el.setPointerCapture(e.pointerId)
  }, [])

  const handlePointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>): void => {
      if (!isDragging) return
      const el = scrollerRef.current
      if (el === null) return
      const dx = e.clientX - startXRef.current
      el.scrollLeft = scrollLeftRef.current - dx
    },
    [isDragging],
  )

  const handlePointerUp = useCallback((e: PointerEvent<HTMLDivElement>): void => {
    setIsDragging(false)
    const el = scrollerRef.current
    if (el === null) return
    el.releasePointerCapture(e.pointerId)
    updateScrollState()
  }, [updateScrollState])

  const dots = useMemo((): number[] => features.map((_, i) => i), [])

  return (
    <section
      aria-label="What you will learn carousel"
      className="w-full max-w-7xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-zinc-100 mb-3">What You Will Learn</h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          A structured curriculum covering everything from the Linux command line to advanced system administration.
        </p>
      </div>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Course topics"
        className="relative select-none"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <button
          type="button"
          aria-label="Previous slide"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-green-400 hover:border-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors -ml-4 focus-visible:outline-2 focus-visible:outline-green-500"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {features.map((feature: Feature, index: number): JSX.Element => {
            const Icon = feature.Icon
            return (
              <div
                key={feature.id}
                data-slide
                data-index={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${features.length}: ${feature.title}`}
                className="flex-none w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] snap-start"
              >
                <article className="h-full bg-[#1a1a1a] rounded-xl border border-zinc-800 p-6 hover:border-green-500/30 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-200 mb-2">{feature.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{feature.description}</p>
                </article>
              </div>
            )
          })}
        </div>

        <button
          type="button"
          aria-label="Next slide"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-green-400 hover:border-green-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors -mr-4 focus-visible:outline-2 focus-visible:outline-green-500"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>

        <div
          className="flex items-center justify-center gap-2 mt-6"
          role="tablist"
          aria-label="Carousel pagination"
        >
          {dots.map((dotIndex: number): JSX.Element => (
            <button
              key={dotIndex}
              type="button"
              role="tab"
              aria-selected={activeIndex === dotIndex}
              aria-label={`Go to slide ${dotIndex + 1}`}
              onClick={(): void => scrollToIndex(dotIndex)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-green-500 ${
                activeIndex === dotIndex
                  ? 'w-8 bg-green-500'
                  : 'w-2 bg-zinc-700 hover:bg-zinc-600'
              }`}
            />
          ))}
        </div>

        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {activeIndex + 1} of {features.length}
        </div>
      </div>

      <style>{`
        .FeaturesCarousel [style*="overflow-x:auto"]::-webkit-scrollbar,
        [class*="scroll-smooth"]::-webkit-scrollbar { display: none }
        @media (prefers-reduced-motion: reduce) {
          [class*="scroll-smooth"] { scroll-behavior: auto }
        }
      `}</style>
    </section>
  )
})

export default FeaturesCarousel
