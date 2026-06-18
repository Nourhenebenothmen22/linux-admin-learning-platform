'use client'

import { memo } from 'react'
import type { JSX } from 'react'

interface DistroBadgeProps {
  name: string
  letter: string
  color: string
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  orange: { bg: 'bg-orange-500', text: 'text-orange-300', border: 'border-orange-500/30' },
  red: { bg: 'bg-red-500', text: 'text-red-300', border: 'border-red-500/30' },
  blue: { bg: 'bg-blue-500', text: 'text-blue-300', border: 'border-blue-500/30' },
  cyan: { bg: 'bg-cyan-500', text: 'text-cyan-300', border: 'border-cyan-500/30' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-300', border: 'border-purple-500/30' },
  zinc: { bg: 'bg-zinc-800', text: 'text-zinc-300', border: 'border-zinc-700/30' },
}

const DistroBadge = memo(function DistroBadge({ name, letter, color }: DistroBadgeProps): JSX.Element {
  const styles = colorMap[color] ?? colorMap.zinc

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-full ${styles.border} backdrop-blur-md shadow-xl`}>
      <span className={`flex items-center justify-center w-8 h-8 rounded-full ${styles.bg} text-white font-bold text-sm`}>
        {letter}
      </span>
      <span className={`text-xs font-semibold ${styles.text} pr-1`}>{name}</span>
    </div>
  )
})

export default DistroBadge
