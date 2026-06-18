'use client'

import { useState, useCallback, useMemo } from 'react'
import Sidebar from '../../components/Sidebar'
import LessonContent from '../../components/LessonContent'
import { linuxCourse } from '../../data/linuxCourse'
import type { Lesson } from '../../components/LessonContent'

export default function CoursePage() {
  const [activeLessonId, setActiveLessonId] = useState<string>(
    linuxCourse[0]?.lessons[0]?.id ?? ''
  )
  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

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

  const activeLesson: Lesson | null = useMemo(() => {
    for (const section of linuxCourse) {
      const found = section.lessons.find((l) => l.id === activeLessonId)
      if (found) return found as unknown as Lesson
    }
    return null
  }, [activeLessonId])

  const handleLessonClick = useCallback((id: string) => {
    setActiveLessonId(id)
  }, [])

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const handleMarkComplete = useCallback(() => {
    if (activeLessonId && !completedLessons.includes(activeLessonId)) {
      setCompletedLessons((prev) => [...prev, activeLessonId])
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
