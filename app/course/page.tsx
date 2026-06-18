'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useCallback, useMemo } from 'react'
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
    <div className="w-72 h-screen bg-[#111111] border-r border-zinc-800 animate-pulse">
      <div className="p-4 space-y-3">
        {Array.from({ length: 8 }, (_: unknown, i: number) => (
          <div key={i} className="h-8 bg-zinc-800 rounded-lg" />
        ))}
      </div>
    </div>
  )
}

function LessonSkeleton() {
  return (
    <div className="flex-1 p-8 space-y-6 animate-pulse">
      <div className="h-8 bg-zinc-800 rounded-lg w-3/4" />
      <div className="h-4 bg-zinc-800 rounded-lg w-1/4" />
      <div className="space-y-3">
        {Array.from({ length: 6 }, (_: unknown, i: number) => (
          <div key={i} className="h-4 bg-zinc-800 rounded-lg" />
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
    <div className="flex min-h-screen">
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar
          sections={sidebarSections}
          activeLessonId={activeLessonId}
          onLessonClick={handleLessonClick}
          completedLessons={completedLessons}
          searchQuery={searchQuery}
          onSearch={handleSearch}
        />
      </Suspense>
      <main className="flex-1 ml-72 min-h-screen">
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
