'use client'
import { memo, useEffect, useRef } from 'react'
import { StickyNote, Briefcase, CheckCircle } from 'lucide-react'
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

function TerminalIcon() {
  return (
    <svg className="w-16 h-16 text-green-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
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
        <TerminalIcon />
        <h2 className="text-xl font-semibold text-zinc-300 mt-4">Welcome to Linux Academy</h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-md">
          Select a lesson from the sidebar to start learning Linux administration.
        </p>
      </div>
    )
  }

  return (
    <div ref={contentRef} className="lesson-content animate-fade-in px-8 py-6 max-w-4xl">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-2xl font-bold text-zinc-100">{lesson.title}</h1>
        <span
          className={`text-xs px-2 py-0.5 rounded border ${
            levelBadgeColors[lesson.level]
          }`}
        >
          {lesson.level}
        </span>
      </div>

      <div className="flex items-center gap-1.5 mb-6">
        <ClockIcon />
        <span className="text-xs text-zinc-400">{lesson.estimatedTime}</span>
      </div>

      <p className="text-sm text-zinc-300 leading-relaxed mb-8">{lesson.description}</p>

      {lesson.commands.length > 0 && (
        <section className="mb-8">
          <h2>Commands</h2>
          <div className="space-y-8">
            {lesson.commands.map((cmd, idx) => (
              <div key={idx} className="bg-[#1a1a1a] rounded-lg border border-zinc-800 p-5">
                <h3 className="text-sm font-semibold text-green-400 font-mono mb-2">{cmd.command}</h3>
                <p className="text-sm text-zinc-300 mb-4">{cmd.explanation}</p>

                {cmd.options && cmd.options.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-zinc-400 font-medium mb-2">Common Options:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-zinc-800">
                            <th className="text-left py-1.5 pr-4 text-zinc-400 font-medium">Flag</th>
                            <th className="text-left py-1.5 text-zinc-400 font-medium">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cmd.options.map((opt, oi) => (
                            <tr key={oi} className="border-b border-zinc-800/50">
                              <td className="py-1.5 pr-4 text-green-400 font-mono">{opt.flag}</td>
                              <td className="py-1.5 text-zinc-300">{opt.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <p className="text-xs text-zinc-400 mb-2">Example:</p>
                <CodeBlock command={cmd.example} language="bash" />

                {cmd.output && (
                  <>
                    <p className="text-xs text-zinc-400 mb-2 mt-3">Output:</p>
                    <CodeBlock command={cmd.output} />
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {lesson.notes.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <StickyNote className="w-4 h-4 text-green-400" />
            <h2 className="!mb-0 !mt-0">Notes</h2>
          </div>
          <ul>
            {lesson.notes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </section>
      )}

      {lesson.warnings && lesson.warnings.length > 0 && (
        <section className="mb-8">
          <h2>Warnings</h2>
          {lesson.warnings.map((warning, idx) => (
            <AlertBox key={idx} type="warning">
              {warning}
            </AlertBox>
          ))}
        </section>
      )}

      {lesson.useCases.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-green-400" />
            <h2 className="!mb-0 !mt-0">Use Cases</h2>
          </div>
          <ul>
            {lesson.useCases.map((uc, idx) => (
              <li key={idx}>{uc}</li>
            ))}
          </ul>
        </section>
      )}

      {lesson.practice.length > 0 && (
        <section className="mb-8">
          <h2>Practice Exercises</h2>
          {lesson.practice.map((p, idx) => (
            <PracticeBox key={idx} task={p.task} hint={p.hint} />
          ))}
        </section>
      )}

      {lesson.quiz.length > 0 && (
        <section className="mb-8">
          <h2>Knowledge Check</h2>
          {lesson.quiz.map((q, idx) => (
            <QuizCard
              key={idx}
              question={q.question}
              options={q.options}
              correctAnswer={q.correctAnswer}
              explanation={q.explanation}
            />
          ))}
        </section>
      )}

      {lesson.summary && (
        <section className="mb-8">
          <h2>Summary</h2>
          <div className="bg-green-500/5 border border-green-500/10 rounded-lg p-5">
            <p className="text-sm text-zinc-300 leading-relaxed !mb-0">{lesson.summary}</p>
          </div>
        </section>
      )}

      <div className="mt-10 pt-6 border-t border-zinc-800">
        <button
          onClick={onMarkComplete}
          disabled={isCompleted}
          className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg smooth-transition ${
            isCompleted
              ? 'bg-green-500/10 text-green-400 cursor-default'
              : 'bg-green-500 hover:bg-green-400 text-black'
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
