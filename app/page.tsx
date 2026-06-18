import type { JSX } from "react"
import AnimatedHero from "@/components/home/AnimatedHero"

export default function HomePage(): JSX.Element {
  return (
    <div className="flex-1 flex flex-col min-h-dvh lg:min-h-0 lg:h-dvh lg:overflow-hidden">
      <AnimatedHero />
    </div>
  )
}
