'use client'

import { memo } from 'react'
import Link from 'next/link'
import type { JSX } from 'react'
import { Terminal } from 'lucide-react'

const BASE_PATH = '/linux-admin-learning-platform'

const Navbar = memo(function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href={`${BASE_PATH}/`} className="flex items-center gap-2 group">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30 group-hover:bg-green-500/20 transition-colors">
            <Terminal className="w-4 h-4 text-green-400" aria-hidden="true" />
          </span>
          <span className="text-sm font-bold text-white">
            Linux <span className="text-green-400">Academy</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <Link
            href={`${BASE_PATH}/course`}
            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Course
          </Link>
          <Link
            href={`${BASE_PATH}/roadmap`}
            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href={`${BASE_PATH}/course`}
            className="text-sm px-4 py-2 bg-green-500 hover:bg-green-400 text-zinc-950 font-semibold rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5 transition-all"
          >
            Start Learning
          </Link>
        </nav>
      </div>
    </header>
  )
})

export default Navbar
