'use client'
import { memo } from 'react'
import Link from 'next/link'
import { Terminal } from 'lucide-react'
import type { LessonLevel } from '../data/linuxCourse'
import SearchLessons from './SearchLessons'
import ProgressBar from './ProgressBar'
import SidebarSection from './SidebarSection'

interface SidebarLesson {
  id: string
  title: string
  level: LessonLevel
}

interface SidebarSectionData {
  sectionTitle: string
  lessons: SidebarLesson[]
}

interface SidebarProps {
  sections: SidebarSectionData[]
  activeLessonId: string
  onLessonClick: (id: string) => void
  completedLessons: string[]
  searchQuery: string
  onSearch: (query: string) => void
}

const Sidebar = memo(function Sidebar({
  sections,
  activeLessonId,
  onLessonClick,
  completedLessons,
  searchQuery,
  onSearch,
}: SidebarProps) {
  const totalLessons: number = sections.reduce((sum: number, s: SidebarSectionData) => sum + s.lessons.length, 0)

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-72 bg-[#111111] border-r border-zinc-800 flex flex-col z-30">
      <Link href="/" className="flex items-center gap-2 px-4 py-4 border-b border-zinc-800 hover:bg-zinc-800/50 smooth-transition">
        <Terminal className="w-5 h-5 text-green-400" />
        <span className="text-sm font-semibold text-zinc-100">Linux Academy</span>
      </Link>

      <div className="px-4 py-3 border-b border-zinc-800 space-y-3">
        <SearchLessons onSearch={onSearch} />
        <ProgressBar completed={completedLessons.length} total={totalLessons} />
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
        {sections.map((section: SidebarSectionData) => {
          const hasActive: boolean = section.lessons.some((l: SidebarLesson) => l.id === activeLessonId)

          const filtered: SidebarLesson[] = section.lessons.filter((l: SidebarLesson) =>
            l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            section.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase())
          )

          if (searchQuery && filtered.length === 0) return null

          return (
            <SidebarSection
              key={section.sectionTitle}
              title={section.sectionTitle}
              lessons={searchQuery ? filtered : section.lessons}
              activeLessonId={activeLessonId}
              onLessonClick={onLessonClick}
              defaultOpen={hasActive}
            />
          )
        })}
      </nav>
    </aside>
  )
})

export default Sidebar
