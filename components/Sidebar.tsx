'use client'
import { Terminal } from 'lucide-react'
import SearchLessons from './SearchLessons'
import ProgressBar from './ProgressBar'
import SidebarSection from './SidebarSection'

interface Lesson {
  id: string
  title: string
  level: string
}

interface Section {
  sectionTitle: string
  lessons: Lesson[]
}

interface SidebarProps {
  sections: Section[]
  activeLessonId: string
  onLessonClick: (id: string) => void
  completedLessons: string[]
  searchQuery: string
  onSearch: (query: string) => void
}

export default function Sidebar({
  sections,
  activeLessonId,
  onLessonClick,
  completedLessons,
  searchQuery,
  onSearch,
}: SidebarProps) {
  const totalLessons = sections.reduce((sum, s) => sum + s.lessons.length, 0)

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-72 bg-[#111111] border-r border-zinc-800 flex flex-col z-30">
      <div className="flex items-center gap-2 px-4 py-4 border-b border-zinc-800">
        <Terminal className="w-5 h-5 text-green-400" />
        <span className="text-sm font-semibold text-zinc-100">Linux Academy</span>
      </div>

      <div className="px-4 py-3 border-b border-zinc-800 space-y-3">
        <SearchLessons onSearch={onSearch} />
        <ProgressBar completed={completedLessons.length} total={totalLessons} />
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
        {sections.map((section) => {
          const hasActive = section.lessons.some((l) => l.id === activeLessonId)

          const filtered = section.lessons.filter((l) =>
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
}
