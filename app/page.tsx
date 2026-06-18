import dynamic from "next/dynamic"
import type { JSX } from "react"
import AnimatedHero from "@/components/home/AnimatedHero"

const StatsBar = dynamic(() => import("@/components/home/StatsBar"), {
  ssr: true,
  loading: (): JSX.Element => <div className="h-28 bg-zinc-900/50 animate-pulse" />,
})

const FeaturesCarousel = dynamic(() => import("@/components/home/FeaturesCarousel"), {
  ssr: true,
  loading: (): JSX.Element => (
    <section className="w-full max-w-7xl mx-auto px-4 py-20" aria-busy="true">
      <div className="text-center mb-12">
        <div className="h-8 bg-zinc-800 rounded w-64 mx-auto mb-3 animate-pulse" />
        <div className="h-4 bg-zinc-800 rounded w-96 mx-auto animate-pulse" />
      </div>
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 3 }, (_: unknown, i: number): JSX.Element => (
          <div key={i} className="flex-none w-full lg:w-[calc(33.333%-0.667rem)] h-44 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse" />
        ))}
      </div>
    </section>
  ),
})

const DistroShowcase = dynamic(() => import("@/components/home/DistroShowcase"), {
  ssr: true,
  loading: (): JSX.Element => (
    <section className="max-w-7xl mx-auto px-6 py-20" aria-busy="true">
      <div className="text-center mb-12">
        <div className="h-8 bg-zinc-800 rounded w-64 mx-auto mb-3 animate-pulse" />
        <div className="h-4 bg-zinc-800 rounded w-96 mx-auto animate-pulse" />
      </div>
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 6 }, (_: unknown, i: number): JSX.Element => (
          <div key={i} className="h-32 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse" />
        ))}
      </div>
    </section>
  ),
})

const LiveTerminal = dynamic(() => import("@/components/home/LiveTerminal"), {
  ssr: true,
  loading: (): JSX.Element => (
    <section className="max-w-5xl mx-auto px-6 py-20" aria-busy="true">
      <div className="text-center mb-10">
        <div className="h-8 bg-zinc-800 rounded w-64 mx-auto mb-3 animate-pulse" />
        <div className="h-4 bg-zinc-800 rounded w-96 mx-auto animate-pulse" />
      </div>
      <div className="h-64 bg-zinc-900 border border-zinc-800 rounded-2xl animate-pulse" />
    </section>
  ),
})

const CommandCheatsheet = dynamic(() => import("@/components/home/CommandCheatsheet"), {
  ssr: true,
  loading: (): JSX.Element => (
    <section className="max-w-7xl mx-auto px-6 py-20" aria-busy="true">
      <div className="text-center mb-12">
        <div className="h-8 bg-zinc-800 rounded w-64 mx-auto mb-3 animate-pulse" />
        <div className="h-4 bg-zinc-800 rounded w-96 mx-auto animate-pulse" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 12 }, (_: unknown, i: number): JSX.Element => (
          <div key={i} className="h-24 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse" />
        ))}
      </div>
    </section>
  ),
})

const CTASection = dynamic(() => import("@/components/home/CTASection"), {
  ssr: true,
  loading: (): JSX.Element => (
    <section className="relative overflow-hidden py-24" aria-busy="true">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="h-12 w-12 mx-auto mb-6 bg-zinc-800 rounded-2xl animate-pulse" />
        <div className="h-8 bg-zinc-800 rounded w-96 mx-auto mb-4 animate-pulse" />
        <div className="h-4 bg-zinc-800 rounded w-[600px] mx-auto mb-8 animate-pulse" />
      </div>
    </section>
  ),
})

export default function HomePage(): JSX.Element {
  return (
    <>
      <AnimatedHero />
      <StatsBar />
      <FeaturesCarousel />
      <DistroShowcase />
      <LiveTerminal />
      <CommandCheatsheet />
      <CTASection />
    </>
  )
}
