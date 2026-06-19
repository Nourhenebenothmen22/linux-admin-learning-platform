import type { JSX } from "react"
import AnimatedHero from "@/components/home/AnimatedHero"

export default function HomePage(): JSX.Element {
  return (
    <main className="flex-1 flex flex-col lg:overflow-hidden">
      <AnimatedHero />
    </main>
  )
}
