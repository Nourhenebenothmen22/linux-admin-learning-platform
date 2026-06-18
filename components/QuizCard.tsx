'use client'
import { useState } from 'react'
import { Check, X } from 'lucide-react'

interface QuizCardProps {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export default function QuizCard({ question, options, correctAnswer, explanation }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState<boolean>(false)

  const handleSelect = (index: number): void => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setShowExplanation(true)
  }

  const isCorrect: boolean = selectedAnswer === correctAnswer

  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-zinc-800 p-5 my-4">
      <p className="text-sm font-semibold text-zinc-200 mb-4">{question}</p>

      <div className="flex flex-col gap-2">
        {options.map((option: string, index: number) => {
          let optionStyle: string = 'bg-zinc-800/50 border-zinc-700 text-zinc-300 hover:bg-zinc-700/50 hover:border-zinc-600'

          if (selectedAnswer !== null) {
            if (index === correctAnswer) {
              optionStyle = 'bg-green-500/10 border-green-500 text-green-300'
            } else if (index === selectedAnswer && !isCorrect) {
              optionStyle = 'bg-red-500/10 border-red-500 text-red-300'
            } else {
              optionStyle = 'bg-zinc-800/30 border-zinc-700/50 text-zinc-500'
            }
          }

          return (
            <button
              key={index}
              onClick={(): void => handleSelect(index)}
              disabled={selectedAnswer !== null}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border text-sm text-left transition-all ${optionStyle}`}
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-medium">
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
        <div className={`mt-4 p-3 rounded-lg text-sm ${isCorrect ? 'bg-green-500/10 text-green-200' : 'bg-red-500/10 text-red-200'}`}>
          <span className="font-semibold">{isCorrect ? 'Correct!' : 'Incorrect.'}</span>{' '}
          {explanation}
        </div>
      )}
    </div>
  )
}
