'use client'

import { memo } from 'react'
import Link from 'next/link'
import type { JSX } from 'react'
import { Terminal } from 'lucide-react'

const BASE_PATH = '/linux-admin-learning-platform'

const Footer = memo(function Footer(): JSX.Element {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/30">
                <Terminal className="w-5 h-5 text-green-400" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold text-white">Linux Academy</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md mb-4">
              The complete free interactive course to master Linux from beginner commands to professional system administration.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-green-400">All systems operational</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Learn</h3>
            <ul className="space-y-2">
              <li><Link href={`${BASE_PATH}/course`} className="text-sm text-zinc-400 hover:text-green-400 transition-colors">Course</Link></li>
              <li><Link href={`${BASE_PATH}/roadmap`} className="text-sm text-zinc-400 hover:text-green-400 transition-colors">Roadmap</Link></li>
              <li><Link href={`${BASE_PATH}/course`} className="text-sm text-zinc-400 hover:text-green-400 transition-colors">All Lessons</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/Nourhenebenothmen22/linux-admin-learning-platform" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-green-400 transition-colors inline-flex items-center gap-1.5"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg> GitHub</a></li>
              <li><a href="https://kernel.org" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-green-400 transition-colors">Kernel.org</a></li>
              <li><a href="https://man7.org" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-green-400 transition-colors">Man Pages</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Linux System Admin Academy. Built with Next.js.
          </p>
          <p className="text-xs text-zinc-600 font-mono">
            <span className="text-green-500">$</span> echo &quot;Learn Linux. Master Administration. Build Your Future.&quot;
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
