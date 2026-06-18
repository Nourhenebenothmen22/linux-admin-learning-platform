'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useCallback, useMemo } from 'react'
import { Menu } from 'lucide-react'
import { linuxCourse } from '../../data/linuxCourse'
import type { Lesson } from '../../data/linuxCourse'

const Sidebar = dynamic(() => import('../../components/Sidebar'), {
  loading: () => <SidebarSkeleton />,
})

const LessonContent = dynamic(() => import('../../components/LessonContent'), {
  loading: () => <LessonSkeleton />,
})

function SidebarSkeleton() {
  return (
    <div className="w-72 h-full bg-[#0a0a0a] border-r border-white/[0.06] animate-pulse">
      <div className="p-4 space-y-3">
        {Array.from({ length: 8 }, (_: unknown, i: number) => (
          <div key={i} className="h-8 bg-white/[0.04] rounded-lg" />
        ))}
      </div>
    </div>
  )
}

function LessonSkeleton() {
  return (
    <div className="flex-1 p-8 space-y-6 animate-pulse max-w-4xl mx-auto">
      <div className="h-8 bg-white/[0.04] rounded-2xl w-3/4" />
      <div className="h-4 bg-white/[0.04] rounded-lg w-1/4" />
      <div className="space-y-3">
        {Array.from({ length: 6 }, (_: unknown, i: number) => (
          <div key={i} className="h-4 bg-white/[0.04] rounded-lg" />
        ))}
      </div>
    </div>
  )
}

export default function CoursePage() {
  const [activeLessonId, setActiveLessonId] = useState<string>(
    linuxCourse[0]?.lessons[0]?.id ?? ''
  )
  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)

  const sidebarSections = useMemo(
    () =>
      linuxCourse.map((section) => ({
        sectionTitle: section.sectionTitle,
        lessons: section.lessons.map((l) => ({
          id: l.id,
          title: l.title,
          level: l.level,
        })),
      })),
    []
  )

  const activeLesson: Lesson | null = useMemo((): Lesson | null => {
    for (const section of linuxCourse) {
      const found: Lesson | undefined = section.lessons.find((l: Lesson): boolean => l.id === activeLessonId)
      if (found) return found
    }
    return null
  }, [activeLessonId])

  const handleLessonClick = useCallback((id: string): void => {
    setActiveLessonId(id)
    setMobileSidebarOpen(false)
  }, [])

  const handleSearch = useCallback((query: string): void => {
    setSearchQuery(query)
  }, [])

  const handleMarkComplete = useCallback((): void => {
    if (activeLessonId && !completedLessons.includes(activeLessonId)) {
      setCompletedLessons((prev: string[]) => [...prev, activeLessonId])
    }
  }, [activeLessonId, completedLessons])

  return (
    <div className="flex min-h-dvh bg-[#050505]">
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar
          sections={sidebarSections}
          activeLessonId={activeLessonId}
          onLessonClick={handleLessonClick}
          completedLessons={completedLessons}
          searchQuery={searchQuery}
          onSearch={handleSearch}
          mobileOpen={mobileSidebarOpen}
          onMobileClose={(): void => setMobileSidebarOpen(false)}
        />
      </Suspense>

      <main className="flex-1 lg:pl-72 min-h-dvh">
        {/* Mobile top bar with lesson selector */}
        <div className="lg:hidden sticky top-16 z-20 bg-[#050505] border-b border-white/[0.06] px-4 py-3 flex items-center gap-3">
          <button
            onClick={(): void => setMobileSidebarOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-zinc-300 hover:bg-white/[0.06] smooth-transition"
            aria-label="Open lessons sidebar"
          >
            <Menu className="w-4 h-4" />
            <span>Lessons</span>
          </button>
          <span className="text-sm text-zinc-500 truncate">{activeLesson?.title ?? 'Select a lesson'}</span>
        </div>

        <Suspense fallback={<LessonSkeleton />}>
          <LessonContent
            lesson={activeLesson}
            onMarkComplete={handleMarkComplete}
            isCompleted={completedLessons.includes(activeLessonId)}
          />
        </Suspense>
      </main>
    </div>
  )
}
