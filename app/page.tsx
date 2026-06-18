import type { JSX } from "react"
import AnimatedHero from "@/components/home/AnimatedHero"

export default function HomePage(): JSX.Element {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <AnimatedHero />
    </div>
  )
}
