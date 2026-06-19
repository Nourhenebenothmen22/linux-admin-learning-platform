import Link from 'next/link'
import { ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer
      className="relative border-t border-zinc-800/50 bg-zinc-950 mt-20"
      aria-label="Site footer"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
              aria-label="Linux Academy home"
            >
              <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-2 ring-green-500/30 group-hover:ring-green-500/60 transition-all bg-zinc-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Linux-Logo.jpg"
                  alt="Linux Academy logo"
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Linux Academy
              </span>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              The complete free interactive course to master Linux from beginner commands
              to professional system administration. Built for learners by learners.
            </p>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-green-300">
                All systems operational
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">
              Learn
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/roadmap"
                  className="text-sm text-zinc-400 hover:text-green-400 transition-colors"
                >
                  Learning Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="/course"
                  className="text-sm text-zinc-400 hover:text-green-400 transition-colors"
                >
                  Full Course
                </Link>
              </li>
              <li>
                <Link
                  href="/course"
                  className="text-sm text-zinc-400 hover:text-green-400 transition-colors"
                >
                  All Lessons
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">
              Resources
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/Nourhenebenothmen22/linux-admin-learning-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-green-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.kernel.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-green-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Kernel.org</span>
                  <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://man7.org/linux/man-pages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-green-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Linux Man Pages</span>
                  <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 flex items-center gap-1.5 flex-wrap justify-center">
            &copy; {currentYear} Linux System Admin Academy. Built with
            <Heart className="w-3 h-3 text-red-500 fill-red-500" aria-hidden="true" />
            using Next.js.
          </p>
          <p className="text-xs text-zinc-600 font-mono">
            <span className="text-green-500">$</span> echo &quot;Learn. Master. Build.&quot;
          </p>
        </div>
      </div>
    </footer>
  )
}
