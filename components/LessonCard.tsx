'use client'
import { memo } from 'react'
import type { LessonLevel } from '../data/linuxCourse'

interface LessonCardProps {
  title: string
  level: LessonLevel
  estimatedTime: string
  onClick: () => void
}

const levelStyles: Record<LessonLevel, string> = {
  Beginner: 'bg-green-500/10 text-green-400 border-green-500/20',
  Intermediate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Advanced: 'bg-red-500/10 text-red-400 border-red-500/20',
}

const LessonCard = memo(function LessonCard({ title, level, estimatedTime, onClick }: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-[#1a1a1a] rounded-lg border border-zinc-800 p-4 hover:border-green-500/50 smooth-transition group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-zinc-200 group-hover:text-green-400 smooth-transition truncate">
            {title}
          </h3>
        </div>
        <span
          className={`flex-shrink-0 text-xs px-2 py-0.5 rounded border ${levelStyles[level]}`}
        >
          {level}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs text-zinc-400">{estimatedTime}</span>
      </div>
    </button>
  )
})

export default LessonCard
