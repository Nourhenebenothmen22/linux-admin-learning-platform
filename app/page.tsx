import Link from "next/link";
import dynamic from "next/dynamic";
import { Terminal, BookOpen, ArrowRight, ChevronRight } from "lucide-react";
import type { JSX } from "react";

const FeaturesCarousel = dynamic(
  () => import("../components/home/FeaturesCarousel"),
  {
    ssr: true,
    loading: (): JSX.Element => (
      <section className="w-full max-w-7xl mx-auto px-4 py-20" aria-busy="true">
        <div className="text-center mb-12">
          <div className="h-8 bg-zinc-800 rounded w-64 mx-auto mb-3 animate-pulse" />
          <div className="h-4 bg-zinc-800 rounded w-96 mx-auto animate-pulse" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 3 }, (_: unknown, i: number): JSX.Element => (
            <div
              key={i}
              className="flex-none w-full lg:w-[calc(33.333%-0.667rem)] h-48 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </section>
    ),
  }
)

const TerminalPreview = dynamic(
  () => import("../components/home/TerminalPreview"),
  {
    ssr: true,
    loading: (): JSX.Element => (
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="h-64 bg-zinc-900 rounded-xl border border-zinc-800 animate-pulse" />
      </section>
    ),
  }
)

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-green-400" />
          <span className="text-sm font-semibold text-zinc-100">
            Linux Academy
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/course"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Course
          </Link>
          <Link
            href="/roadmap"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="/course"
            className="text-sm px-4 py-2 bg-green-500 hover:bg-green-400 text-black rounded-lg transition-colors font-medium"
          >
            Start Learning
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />
          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Complete Linux Administrator Course
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 leading-tight mb-6">
                Linux System Admin
                <span className="text-green-400"> Academy</span>
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                Master Linux from beginner commands to real system
                administration. Interactive lessons, hands-on practice, and
                quizzes designed to take you from zero to system administrator.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/course"
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black rounded-lg transition-colors font-medium text-sm"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/roadmap"
                  className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors font-medium text-sm"
                >
                  View Roadmap
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FeaturesCarousel />
        <TerminalPreview />
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-xs text-zinc-400">
              Linux System Admin Academy
            </span>
          </div>
          <p className="text-xs text-zinc-600">
            Learn Linux. Master Administration. Build Your Future.
          </p>
        </div>
      </footer>
    </div>
  );
}
