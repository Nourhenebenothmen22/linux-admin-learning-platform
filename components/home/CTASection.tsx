'use client'

import { memo } from 'react'
import Link from 'next/link'
import type { JSX } from 'react'
import { ArrowRight, Terminal } from 'lucide-react'

const CTASection = memo(function CTASection(): JSX.Element {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 mb-6">
          <Terminal className="w-8 h-8 text-green-400" aria-hidden="true" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Start Your Linux{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Journey Today
          </span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
          No account needed. No credit card. Just you, your terminal, and 50+
          hands-on lessons that take you from beginner to Linux system administrator.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/course"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold rounded-xl shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all text-lg"
          >
            <span>Begin Free Course</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all text-lg"
          >
            <span>Explore Roadmap</span>
          </Link>
        </div>

        <p className="mt-6 text-xs text-zinc-600">
          No registration required &bull; Open source &bull; Free forever
        </p>
      </div>
    </section>
  )
})

export default CTASection
