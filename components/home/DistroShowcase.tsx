'use client'

import { memo } from 'react'
import type { JSX } from 'react'

interface Distro {
  name: string
  letter: string
  color: string
  bgClass: string
  textClass: string
  borderClass: string
  description: string
}

const distros: Distro[] = [
  {
    name: 'Ubuntu',
    letter: 'U',
    color: 'orange',
    bgClass: 'bg-orange-500',
    textClass: 'text-orange-300',
    borderClass: 'border-orange-500/20',
    description: 'Most popular Linux distribution for beginners and cloud.',
  },
  {
    name: 'Debian',
    letter: 'D',
    color: 'red',
    bgClass: 'bg-red-500',
    textClass: 'text-red-300',
    borderClass: 'border-red-500/20',
    description: 'Stable and reliable base for countless derivatives.',
  },
  {
    name: 'Fedora',
    letter: 'F',
    color: 'blue',
    bgClass: 'bg-blue-500',
    textClass: 'text-blue-300',
    borderClass: 'border-blue-500/20',
    description: 'Cutting-edge features sponsored by Red Hat.',
  },
  {
    name: 'Arch',
    letter: 'A',
    color: 'cyan',
    bgClass: 'bg-cyan-500',
    textClass: 'text-cyan-300',
    borderClass: 'border-cyan-500/20',
    description: 'Rolling release for users who want total control.',
  },
  {
    name: 'CentOS',
    letter: 'C',
    color: 'purple',
    bgClass: 'bg-purple-500',
    textClass: 'text-purple-300',
    borderClass: 'border-purple-500/20',
    description: 'Enterprise-grade stability for production servers.',
  },
  {
    name: 'Kali',
    letter: 'K',
    color: 'zinc',
    bgClass: 'bg-zinc-800',
    textClass: 'text-zinc-300',
    borderClass: 'border-zinc-700/30',
    description: 'Penetration testing and security auditing distro.',
  },
]

const DistroShowcase = memo(function DistroShowcase(): JSX.Element {
  return (
    <section aria-label="Linux distributions" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase">Ecosystem</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Learn Any{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Distribution
          </span>
        </h2>
        <p className="text-base md:text-lg text-zinc-400">
          The skills you learn apply across all major Linux distributions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {distros.map((distro: Distro): JSX.Element => (
          <div
            key={distro.name}
            className={`group relative bg-zinc-900/50 rounded-xl border ${distro.borderClass} p-5 text-center hover:bg-zinc-900 hover:shadow-2xl transition-all`}
          >
            <span
              className={`flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl ${distro.bgClass} text-white font-bold text-lg shadow-lg`}
            >
              {distro.letter}
            </span>
            <h3 className={`text-sm font-semibold text-white mb-1 ${distro.textClass}`}>
              {distro.name}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              {distro.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
})

export default DistroShowcase
