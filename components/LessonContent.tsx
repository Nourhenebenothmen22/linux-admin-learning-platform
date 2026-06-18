'use client'
import { memo, useEffect, useRef } from 'react'
import { StickyNote, Briefcase, CheckCircle, Terminal, Clock, BookOpen, GraduationCap } from 'lucide-react'
import type { Lesson, LessonLevel } from '../data/linuxCourse'
import CodeBlock from './CodeBlock'
import AlertBox from './AlertBox'
import PracticeBox from './PracticeBox'
import QuizCard from './QuizCard'

interface LessonContentProps {
  lesson: Lesson | null
  onMarkComplete?: () => void
  isCompleted?: boolean
}

const levelBadgeColors: Record<LessonLevel, string> = {
  Beginner: 'bg-green-500/10 text-green-400 border-green-500/20',
  Intermediate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Advanced: 'bg-red-500/10 text-red-400 border-red-500/20',
}

function SectionCard({ title, icon, children }: { title?: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 lg:p-6 mb-6">
      {title && (
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
          {icon && <span className="text-green-400">{icon}</span>}
          <h2 className="text-lg font-semibold text-zinc-100">{title}</h2>
        </div>
      )}
      {children}
    </section>
  )
}

function SectionList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/60 mt-1.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

const LessonContent = memo(function LessonContent({ lesson, onMarkComplete, isCompleted }: LessonContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lesson && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.id])

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-8 animate-fade-in">
        <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6">
          <Terminal className="w-10 h-10 text-green-500/40" />
        </div>
        <h2 className="text-xl font-semibold text-zinc-300">Welcome to Linux Academy</h2>
        <p className="text-sm text-zinc-500 mt-2 max-w-md leading-relaxed">
          Select a lesson from the sidebar to start learning Linux administration.
        </p>
      </div>
    )
  }

  return (
    <div ref={contentRef} className="px-4 lg:px-8 py-6 max-w-4xl mx-auto animate-fade-in">
      {/* Hero card */}
      <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-green-500/[0.03] to-transparent p-6 lg:p-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.06] items-center justify-center flex-shrink-0">
              <Terminal className="w-5 h-5 text-green-400" />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold text-zinc-100">{lesson.title}</h1>
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium self-start ${levelBadgeColors[lesson.level]}`}>
            {lesson.level}
          </span>
        </div>

        <div className="flex items-center gap-1.5 mb-4 text-zinc-500">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs">{lesson.estimatedTime}</span>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed">{lesson.description}</p>
      </div>

      {/* Commands */}
      {lesson.commands.length > 0 && (
        <SectionCard title="Commands" icon={<Terminal className="w-4 h-4" />}>
          <div className="space-y-6">
            {lesson.commands.map((cmd, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <h3 className="text-sm font-semibold text-green-400 font-mono mb-2">{cmd.command}</h3>
                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">{cmd.explanation}</p>

                {cmd.options && cmd.options.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-zinc-500 font-medium mb-2 uppercase tracking-wider">Common Options</p>
                    <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-white/[0.06] bg-white/[0.03]">
                            <th className="text-left py-2 px-3 text-zinc-400 font-medium">Flag</th>
                            <th className="text-left py-2 px-3 text-zinc-400 font-medium">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cmd.options.map((opt, oi) => (
                            <tr key={oi} className="border-b border-white/[0.04] last:border-0">
                              <td className="py-2 px-3 text-green-400 font-mono">{opt.flag}</td>
                              <td className="py-2 px-3 text-zinc-300">{opt.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <p className="text-xs text-zinc-500 mb-2 font-medium">Example:</p>
                <CodeBlock command={cmd.example} language="bash" />

                {cmd.output && (
                  <>
                    <p className="text-xs text-zinc-500 mb-2 mt-4 font-medium">Output:</p>
                    <CodeBlock command={cmd.output} />
                  </>
                )}
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* Notes */}
      {lesson.notes.length > 0 && (
        <SectionCard title="Notes" icon={<StickyNote className="w-4 h-4" />}>
          <SectionList items={lesson.notes} />
        </SectionCard>
      )}

      {/* Warnings */}
      {lesson.warnings && lesson.warnings.length > 0 && (
        <SectionCard title="Warnings">
          {lesson.warnings.map((warning, idx) => (
            <AlertBox key={idx} type="warning">
              {warning}
            </AlertBox>
          ))}
        </SectionCard>
      )}

      {/* Use Cases */}
      {lesson.useCases.length > 0 && (
        <SectionCard title="Use Cases" icon={<Briefcase className="w-4 h-4" />}>
          <SectionList items={lesson.useCases} />
        </SectionCard>
      )}

      {/* Practice */}
      {lesson.practice.length > 0 && (
        <SectionCard title="Practice Exercises" icon={<BookOpen className="w-4 h-4" />}>
          {lesson.practice.map((p, idx) => (
            <PracticeBox key={idx} task={p.task} hint={p.hint} />
          ))}
        </SectionCard>
      )}

      {/* Quiz */}
      {lesson.quiz.length > 0 && (
        <SectionCard title="Knowledge Check" icon={<GraduationCap className="w-4 h-4" />}>
          {lesson.quiz.map((q, idx) => (
            <QuizCard
              key={idx}
              question={q.question}
              options={q.options}
              correctAnswer={q.correctAnswer}
              explanation={q.explanation}
            />
          ))}
        </SectionCard>
      )}

      {/* Summary */}
      {lesson.summary && (
        <SectionCard title="Summary" icon={<BookOpen className="w-4 h-4" />}>
          <div className="rounded-xl border border-green-500/10 bg-green-500/[0.03] p-5">
            <p className="text-sm text-zinc-300 leading-relaxed">{lesson.summary}</p>
          </div>
        </SectionCard>
      )}

      {/* Mark complete */}
      <div className="flex items-center justify-center mt-8 mb-12">
        <button
          onClick={onMarkComplete}
          disabled={isCompleted}
          className={`flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-xl smooth-transition ${
            isCompleted
              ? 'bg-green-500/10 text-green-400 border border-green-500/20 cursor-default'
              : 'bg-green-500 hover:bg-green-400 text-black shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5'
          }`}
        >
          <CheckCircle className={`w-4 h-4 ${isCompleted ? 'fill-green-400/20' : ''}`} />
          {isCompleted ? 'Completed' : 'Mark as Completed'}
        </button>
      </div>
    </div>
  )
})

export default LessonContent
