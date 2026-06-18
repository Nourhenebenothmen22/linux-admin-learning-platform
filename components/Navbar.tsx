'use client'

import { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import type { JSX } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const Navbar = memo(function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

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
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Linux Academy home"
        >
          <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-2 ring-green-500/30 group-hover:ring-green-500/60 transition-all bg-zinc-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/linux-admin-learning-platform/Linux-Logo.jpg"
              alt="Linux Academy logo"
              width={40}
              height={40}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base font-bold text-white tracking-tight">
            Linux Academy
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 md:gap-2">
          <Link
            href="/course"
            className="px-3 md:px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Course
          </Link>
          <Link
            href="/roadmap"
            className="px-3 md:px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="/course"
            className="group inline-flex items-center gap-1.5 ml-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold text-sm rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all"
          >
            <span>Start Learning</span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="md:hidden relative z-50 p-2 text-zinc-300 hover:text-white transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 pt-2 border-t border-zinc-800/60 bg-zinc-950/95 backdrop-blur-xl flex flex-col gap-1">
          <Link
            href="/course"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Course
          </Link>
          <Link
            href="/roadmap"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="/course"
            onClick={() => setMenuOpen(false)}
            className="group inline-flex items-center gap-1.5 mt-1 px-4 py-3 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold text-sm rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all justify-center"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  )
})

export default Navbar
