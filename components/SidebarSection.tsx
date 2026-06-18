'use client'
import { useState, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import type { LessonLevel } from '../data/linuxCourse'

interface SidebarLesson {
  id: string
  title: string
  level: LessonLevel
}

interface SidebarSectionProps {
  title: string
  lessons: SidebarLesson[]
  activeLessonId: string
  onLessonClick: (id: string) => void
  defaultOpen?: boolean
}

const levelColors: Record<LessonLevel, string> = {
  Beginner: 'bg-green-500',
  Intermediate: 'bg-yellow-500',
  Advanced: 'bg-red-500',
}

export default function SidebarSection({
  title,
  lessons,
  activeLessonId,
  onLessonClick,
  defaultOpen = false,
}: SidebarSectionProps) {
  const [userExpanded, setUserExpanded] = useState<boolean | null>(null)
  const expanded: boolean = userExpanded !== null ? userExpanded : defaultOpen

  const handleToggle = useCallback((): void => {
    setUserExpanded((prev: boolean | null) => !(prev !== null ? prev : defaultOpen))
  }, [defaultOpen])

  return (
    <div className="mb-1">
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
      >
        <div className="flex items-center gap-2 min-w-0">
          <ChevronDown
            className={`w-3.5 h-3.5 text-zinc-500 flex-shrink-0 transition-transform ${
              expanded ? 'rotate-0' : '-rotate-90'
            }`}
          />
          <span className="text-sm font-medium text-zinc-300 truncate">{title}</span>
        </div>
        <span className="text-xs text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded flex-shrink-0 ml-2">
          {lessons.length}
        </span>
      </button>

      {expanded && (
        <div className="ml-2 mt-1 flex flex-col gap-0.5 animate-slide-down">
          {lessons.map((lesson: SidebarLesson) => {
            const isActive: boolean = lesson.id === activeLessonId

            return (
              <button
                key={lesson.id}
                onClick={(): void => onLessonClick(lesson.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-left transition-all ${
                  isActive
                    ? 'bg-green-500/10 text-green-400 border-l-2 border-green-500'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 border-l-2 border-transparent'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    levelColors[lesson.level]
                  }`}
                />
                <span className="truncate">{lesson.title}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
