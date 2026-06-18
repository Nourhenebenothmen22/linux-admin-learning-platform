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
      className="relative overflow-hidden flex-1 flex items-center bg-zinc-950"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 lg:py-12 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center w-full">

        <div className="space-y-5 lg:space-y-6">
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
            <span className="block text-[clamp(2.2rem,5vw,4rem)] sm:text-5xl lg:text-6xl xl:text-[5.5rem] text-white animate-fade-up">
              Master
            </span>
            <span className="block text-[clamp(2.2rem,5vw,4rem)] sm:text-5xl lg:text-6xl xl:text-[5.5rem] text-white animate-fade-up animation-delay-100">
              Linux Like
            </span>
            <span
              className="block text-[clamp(2.2rem,5vw,4rem)] sm:text-5xl lg:text-6xl xl:text-[5.5rem] animate-fade-up animation-delay-200"
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

        <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-0 lg:h-full py-4 lg:py-0">

          {/* Layered glow effects */}
          <div
            className="absolute inset-0 m-auto w-[450px] h-[450px] rounded-full blur-[80px] opacity-50 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.6) 0%, transparent 60%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 m-auto w-[380px] h-[380px] rounded-full blur-[40px] opacity-40 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.8) 0%, transparent 50%)' }}
            aria-hidden="true"
          />

          {/* THE LINUX LOGO - PERFECT CIRCULAR PREMIUM LOOK */}
          <div className="relative animate-float z-10">

            {/* Animated gradient border ring */}
            <div
              className="absolute -inset-1 rounded-full opacity-75 pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, #22c55e, #10b981, #06b6d4, #22c55e)",
                animation: "gradient-rotate 8s linear infinite"
              }}
              aria-hidden="true"
            />

            {/* Image container with circular frame */}
            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[320px] lg:h-[320px] xl:w-[360px] xl:h-[360px]">

              {/* Dark inner ring */}
              <div className="absolute inset-0 rounded-full bg-zinc-950 p-[3px]">

                {/* Image circle - black bg blends with dark frame */}
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/linux-admin-learning-platform/Linux-Logo.jpg"
                    alt="Linux Tux Penguin Mascot"
                    width={380}
                    height={380}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />

                  {/* Inner shadow for depth + vignette */}
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 40px rgba(0,0,0,0.6), inset 0 0 80px rgba(34,197,94,0.1)"
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Highlight reflection on glass */}
              <div
                className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-20 blur-xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)"
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floor shadow */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[240px] h-[24px] rounded-full blur-2xl opacity-40 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(34,197,94,0.7) 0%, transparent 70%)"
              }}
              aria-hidden="true"
            />
          </div>

          {/* Distro badges floating around the logo */}
          <div className="absolute top-4 right-2 animate-float-slow z-20 max-sm:hidden">
            <DistroBadge name="Ubuntu" letter="U" color="orange" />
          </div>
          <div className="absolute top-12 left-0 animate-float-slow animation-delay-200 z-20 max-sm:hidden">
            <DistroBadge name="Debian" letter="D" color="red" />
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-8 animate-float-slow animation-delay-400 z-20 max-sm:hidden">
            <DistroBadge name="Fedora" letter="F" color="blue" />
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-8 animate-float-slow animation-delay-100 z-20 max-sm:hidden">
            <DistroBadge name="Arch" letter="A" color="cyan" />
          </div>
          <div className="absolute bottom-16 left-4 animate-float-slow animation-delay-300 z-20">
            <DistroBadge name="CentOS" letter="C" color="purple" />
          </div>
          <div className="absolute bottom-8 right-8 animate-float-slow animation-delay-500 z-20 max-sm:hidden">
            <DistroBadge name="Kali" letter="K" color="zinc" />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <style>{`
        @keyframes gradient-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="gradient-rotate"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
})

export default AnimatedHero
