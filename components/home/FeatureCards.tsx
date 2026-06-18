'use client'
import { memo } from 'react'
import { Terminal, Shield, Code, Network, Server } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Terminal,
    title: 'Commands',
    description: 'Master essential Linux commands from file operations to process management with real examples.',
  },
  {
    icon: Shield,
    title: 'Permissions',
    description: 'Understand users, groups, chmod, chown, and sudo to secure your Linux systems.',
  },
  {
    icon: Code,
    title: 'Shell Scripting',
    description: 'Automate tasks with bash scripts using variables, conditions, loops, and functions.',
  },
  {
    icon: Network,
    title: 'Networking',
    description: 'Configure networks, use SSH, manage firewalls, and troubleshoot connectivity issues.',
  },
  {
    icon: Server,
    title: 'System Administration',
    description: 'Manage services, cron jobs, disk usage, backups, and perform real admin tasks.',
  },
]

const FeatureCards = memo(function FeatureCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-zinc-100 mb-3">What You Will Learn</h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          A structured curriculum covering everything from the Linux command line to advanced system administration.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature: Feature) => (
          <div
            key={feature.title}
            className="bg-[#1a1a1a] rounded-xl border border-zinc-800 p-6 hover:border-green-500/30 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
              <feature.icon className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-200 mb-2">{feature.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
})

export default FeatureCards
