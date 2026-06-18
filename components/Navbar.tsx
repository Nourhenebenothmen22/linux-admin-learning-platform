'use client'

import { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { JSX } from 'react'
import { ArrowRight } from 'lucide-react'

const BASE_PATH = '/linux-admin-learning-platform'

const Navbar = memo(function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return (): void => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between"
      >
        <Link
          href={BASE_PATH}
          className="flex items-center gap-2.5 group"
          aria-label="Linux Academy home"
        >
          <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-2 ring-green-500/30 group-hover:ring-green-500/60 transition-all">
            <Image
              src={`${BASE_PATH}/Linux-Logo.jpg`}
              alt="Linux Academy logo"
              width={36}
              height={36}
              className="object-cover"
              priority
            />
          </div>
          <span className="text-base font-bold text-white tracking-tight">
            Linux Academy
          </span>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          <Link
            href={`${BASE_PATH}/course`}
            className="px-3 md:px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Course
          </Link>
          <Link
            href={`${BASE_PATH}/roadmap`}
            className="px-3 md:px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href={`${BASE_PATH}/course`}
            className="group inline-flex items-center gap-1.5 ml-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold text-sm rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all"
          >
            <span>Start Learning</span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </nav>
    </header>
  )
})

export default Navbar
