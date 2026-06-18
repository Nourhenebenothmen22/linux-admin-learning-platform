'use client'

import { memo } from 'react'
import type { JSX } from 'react'
import { BookOpen, Terminal, Users, Award } from 'lucide-react'

interface Stat {
  icon: typeof BookOpen
  value: string
  label: string
}

const stats: Stat[] = [
  { icon: BookOpen, value: '50+', label: 'Interactive Lessons' },
  { icon: Terminal, value: '200+', label: 'Linux Commands' },
  { icon: Users, value: '8', label: 'Course Sections' },
  { icon: Award, value: '100%', label: 'Free Forever' },
]

const StatsBar = memo(function StatsBar(): JSX.Element {
  return (
    <section aria-label="Course statistics" className="border-y border-zinc-800/50 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat: Stat): JSX.Element => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex items-center gap-4 justify-center md:justify-start">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 shrink-0">
                  <Icon className="w-5 h-5 text-green-400" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-zinc-400">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default StatsBar
