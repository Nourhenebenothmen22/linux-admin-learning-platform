'use client'

import { useState, useCallback, useMemo } from 'react'
import Sidebar from '../../components/Sidebar'
import LessonContent from '../../components/LessonContent'
import { linuxCourse } from '../../data/linuxCourse'
import type { Lesson } from '../../data/linuxCourse'

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
      <Sidebar
        sections={sidebarSections}
        activeLessonId={activeLessonId}
        onLessonClick={handleLessonClick}
        completedLessons={completedLessons}
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />
      <main className="flex-1 ml-72 min-h-screen">
        <LessonContent
          lesson={activeLesson}
          onMarkComplete={handleMarkComplete}
          isCompleted={completedLessons.includes(activeLessonId)}
        />
      </main>
    </div>
  )
}
