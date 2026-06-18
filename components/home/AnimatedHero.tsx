'use client'

import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { JSX } from 'react'
import { ArrowRight, BookOpen, Sparkles, Zap } from 'lucide-react'

const BASE_PATH = '/linux-admin-learning-platform'

const AnimatedHero = memo(function AnimatedHero(): JSX.Element {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden min-h-[90vh] flex items-center bg-zinc-950"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
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
              href={`${BASE_PATH}/course`}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold rounded-xl shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all"
            >
              <Zap className="w-4 h-4" aria-hidden="true" />
              <span>Start Free</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href={`${BASE_PATH}/roadmap`}
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
            <Image
              src={`${BASE_PATH}/Linux-Logo.jpg`}
              alt="Linux Tux Penguin Mascot"
              width={400}
              height={400}
              priority
              className="rounded-2xl drop-shadow-[0_25px_50px_rgba(34,197,94,0.3)]"
            />
          </div>

          <div className="absolute top-8 right-4 animate-float-slow">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-md shadow-xl shadow-orange-500/20">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm">U</span>
              <span className="text-xs font-semibold text-orange-300 pr-1">Ubuntu</span>
            </div>
          </div>

          <div className="absolute top-16 left-0 animate-float-slow animation-delay-200">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-md shadow-xl shadow-red-500/20">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white font-bold text-sm">D</span>
              <span className="text-xs font-semibold text-red-300 pr-1">Debian</span>
            </div>
          </div>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 animate-float-slow animation-delay-400">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md shadow-xl shadow-blue-500/20">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-sm">F</span>
              <span className="text-xs font-semibold text-blue-300 pr-1">Fedora</span>
            </div>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 animate-float-slow animation-delay-100">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md shadow-xl shadow-cyan-500/20">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white font-bold text-sm">A</span>
              <span className="text-xs font-semibold text-cyan-300 pr-1">Arch</span>
            </div>
          </div>

          <div className="absolute bottom-12 left-4 animate-float-slow animation-delay-300">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-md shadow-xl shadow-purple-500/20">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-bold text-sm">C</span>
              <span className="text-xs font-semibold text-purple-300 pr-1">CentOS</span>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 animate-float-slow animation-delay-500">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-700/30 border border-zinc-500/30 backdrop-blur-md shadow-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-white font-bold text-sm">K</span>
              <span className="text-xs font-semibold text-zinc-300 pr-1">Kali</span>
            </div>
          </div>
        </div>
      </div>

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
