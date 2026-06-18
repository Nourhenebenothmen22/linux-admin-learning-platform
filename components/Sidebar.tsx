'use client'
import { memo } from 'react'
import Link from 'next/link'
import { Terminal, X } from 'lucide-react'
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
  mobileOpen?: boolean
  onMobileClose?: () => void
}

function SidebarPanel({
  sections,
  activeLessonId,
  onLessonClick,
  completedLessons,
  searchQuery,
  onSearch,
  showClose,
  onClose,
}: SidebarProps & { showClose?: boolean; onClose?: () => void }) {
  const totalLessons: number = sections.reduce((sum: number, s: SidebarSectionData) => sum + s.lessons.length, 0)

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-white/[0.06] flex items-center justify-center group-hover:border-green-500/30 smooth-transition">
            <Terminal className="w-4 h-4 text-green-400" />
          </div>
          <span className="text-sm font-semibold text-zinc-100">Linux Academy</span>
        </Link>
        {showClose && onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.06] smooth-transition"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="px-4 py-3 border-b border-white/[0.06] space-y-3">
        <SearchLessons onSearch={onSearch} />
        <ProgressBar completed={completedLessons.length} total={totalLessons} />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
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
    </div>
  )
}

const Sidebar = memo(function Sidebar(props: SidebarProps) {
  const { mobileOpen, onMobileClose } = props

  return (
    <>
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onMobileClose} />
          <aside className="fixed left-0 top-0 bottom-0 w-72 bg-[#0a0a0a] border-r border-white/[0.06] flex flex-col animate-slide-in-left">
            <SidebarPanel {...props} showClose onClose={onMobileClose} />
          </aside>
        </div>
      )}

      <aside className="hidden lg:flex fixed left-0 top-16 bottom-0 w-72 bg-[#0a0a0a] border-r border-white/[0.06] flex-col z-30">
        <SidebarPanel {...props} />
      </aside>
    </>
  )
})

export default Sidebar
