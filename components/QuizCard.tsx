'use client'
import { memo, useState } from 'react'
import { Check, X } from 'lucide-react'

interface QuizCardProps {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const QuizCard = memo(function QuizCard({ question, options, correctAnswer, explanation }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState<boolean>(false)

  const handleSelect = (index: number): void => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setShowExplanation(true)
  }

  const isCorrect: boolean = selectedAnswer === correctAnswer

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 my-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-semibold text-zinc-300">Question</span>
      </div>
      <p className="text-sm text-zinc-100 mb-4 leading-relaxed">{question}</p>

      <div className="flex flex-col gap-2">
        {options.map((option: string, index: number) => {
          let optionStyle: string = 'bg-white/[0.04] border-white/[0.08] text-zinc-300 hover:bg-white/[0.06] hover:border-white/[0.12]'

          if (selectedAnswer !== null) {
            if (index === correctAnswer) {
              optionStyle = 'bg-green-500/10 border-green-500/50 text-green-300'
            } else if (index === selectedAnswer && !isCorrect) {
              optionStyle = 'bg-red-500/10 border-red-500/50 text-red-300'
            } else {
              optionStyle = 'bg-white/[0.02] border-white/[0.04] text-zinc-500'
            }
          }

          return (
            <button
              key={index}
              onClick={(): void => handleSelect(index)}
              disabled={selectedAnswer !== null}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-left smooth-transition ${optionStyle}`}
            >
              <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-xs font-medium ${
                selectedAnswer !== null && index === correctAnswer
                  ? 'border-green-500/50 bg-green-500/10'
                  : selectedAnswer !== null && index === selectedAnswer && !isCorrect
                    ? 'border-red-500/50 bg-red-500/10'
                    : 'border-white/[0.12] bg-white/[0.04]'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1">{option}</span>
              {selectedAnswer !== null && index === correctAnswer && (
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              )}
              {selectedAnswer !== null && index === selectedAnswer && !isCorrect && (
                <X className="w-4 h-4 text-red-400 flex-shrink-0" />
              )}
            </button>
          )
        })}
      </div>

      {showExplanation && (
        <div className={`mt-4 p-4 rounded-xl border text-sm leading-relaxed ${
          isCorrect
            ? 'bg-green-500/[0.05] border-green-500/10 text-green-200'
            : 'bg-red-500/[0.05] border-red-500/10 text-red-200'
        }`}>
          <span className="font-semibold">{isCorrect ? 'Correct!' : 'Not quite.'}</span>{' '}
          {explanation}
        </div>
      )}
    </div>
  )
})

export default QuizCard
