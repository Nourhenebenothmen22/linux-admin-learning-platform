'use client'

import { memo } from 'react'
import Link from 'next/link'
import type { JSX } from 'react'
import { ArrowRight, BookOpen, Sparkles, Zap } from 'lucide-react'
import DistroBadge from '@/components/icons/DistroBadge'

const AnimatedHero = memo(function AnimatedHero(): JSX.Element {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden min-h-[90vh] flex items-center bg-zinc-950"
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,197,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center w-full">

        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm w-fit">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/30">
              <BookOpen className="w-3 h-3 text-green-300" aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold text-green-300 tracking-wide uppercase">
              Complete Linux Administrator Course
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
          </div>

          <h1 className="font-bold leading-[0.95] tracking-tight">
            <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] text-white animate-fade-up">
              Master
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] text-white animate-fade-up animation-delay-100">
              Linux Like
            </span>
            <span
              className="block text-5xl sm:text-6xl lg:text-[5.5rem] animate-fade-up animation-delay-200"
              style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #10b981 50%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Pro.
            </span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl animate-fade-up animation-delay-300">
            From your first command to managing production servers. Interactive lessons,
            real terminal practice, and quizzes that take you from{' '}
            <span className="text-green-400 font-semibold">zero to sysadmin</span>.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up animation-delay-400">
            <Link
              href="/course"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold rounded-xl shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all"
            >
              <Zap className="w-4 h-4" aria-hidden="true" />
              <span>Start Free</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all"
            >
              <span>View Roadmap</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-3 text-sm text-zinc-500 animate-fade-up animation-delay-500">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-green-400" aria-hidden="true" />
              <span><strong className="text-white">50+</strong> Lessons</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-700" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span><strong className="text-white">200+</strong> Commands</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-700" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span><strong className="text-white">100%</strong> Free</span>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
          <div
            className="absolute inset-0 m-auto w-[450px] h-[450px] rounded-full blur-3xl opacity-50 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 m-auto w-[480px] h-[480px] rounded-full border border-green-500/20 animate-spin-slow pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 m-auto w-[420px] h-[420px] rounded-full border border-green-500/10 animate-spin-slow-reverse pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative animate-float z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/linux-admin-learning-platform/Linux-Logo.jpg"
              alt="Linux Tux Penguin Mascot"
              width={400}
              height={400}
              loading="eager"
              decoding="async"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-contain drop-shadow-[0_25px_50px_rgba(34,197,94,0.4)] rounded-3xl"
            />
          </div>

          <div className="absolute top-4 right-2 animate-float-slow z-20">
            <DistroBadge name="Ubuntu" letter="U" color="orange" />
          </div>
          <div className="absolute top-12 left-0 animate-float-slow animation-delay-200 z-20">
            <DistroBadge name="Debian" letter="D" color="red" />
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-8 animate-float-slow animation-delay-400 z-20">
            <DistroBadge name="Fedora" letter="F" color="blue" />
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-8 animate-float-slow animation-delay-100 z-20">
            <DistroBadge name="Arch" letter="A" color="cyan" />
          </div>
          <div className="absolute bottom-16 left-4 animate-float-slow animation-delay-300 z-20">
            <DistroBadge name="CentOS" letter="C" color="purple" />
          </div>
          <div className="absolute bottom-8 right-8 animate-float-slow animation-delay-500 z-20">
            <DistroBadge name="Kali" letter="K" color="zinc" />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
          will-change: transform;
          position: absolute;
          top: 50%;
          left: 50%;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
          will-change: transform;
          position: absolute;
          top: 50%;
          left: 50%;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow, .animate-spin-slow-reverse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
})

export default AnimatedHero
