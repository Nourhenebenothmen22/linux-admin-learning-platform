'use client'

import { memo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { JSX } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { basePath } from '../lib/basePath'

const Navbar = memo(function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl ${
      isHome ? 'bg-transparent' : 'bg-zinc-950/95'
    }`}>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Linux Academy home"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-green-500/30 group-hover:ring-green-500/60 transition-all bg-zinc-900">
            <img
              src={`${basePath}/Linux-Logo.jpg`}
              alt="Linux Academy logo"
              width={36}
              height={36}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-bold text-white tracking-tight sm:text-base">
            Linux Academy
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/roadmap"
            className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="/course"
            className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            Course
          </Link>
          <Link
            href="/course"
            className="inline-flex items-center gap-1.5 rounded-xl bg-green-500 px-5 py-2.5 text-sm font-bold text-zinc-950 shadow-lg shadow-green-500/25 hover:bg-green-400 transition-all"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={(): void => setMenuOpen((prev: boolean) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden">
          <div className="px-4 py-4 flex flex-col gap-1">
            <Link
              href="/roadmap"
              onClick={(): void => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/course"
              onClick={(): void => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              Course
            </Link>
            <Link
              href="/course"
              onClick={(): void => setMenuOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-zinc-950 hover:bg-green-400 transition-all"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
})

export default Navbar
