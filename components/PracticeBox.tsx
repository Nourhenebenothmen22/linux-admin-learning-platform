'use client'
import { memo, useState } from 'react'
import { ChevronDown, Lightbulb } from 'lucide-react'

interface PracticeBoxProps {
  task: string
  hint: string
}

const PracticeBox = memo(function PracticeBox({ task, hint }: PracticeBoxProps) {
  const [showHint, setShowHint] = useState<boolean>(false)

  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-zinc-800 p-5 my-4">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-4 h-4 text-yellow-400" />
        <h3 className="text-sm font-semibold text-zinc-200">Practice Exercise</h3>
      </div>

      <p className="text-sm text-zinc-300 leading-relaxed mb-4">{task}</p>

      <button
        onClick={(): void => setShowHint(!showHint)}
        className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-green-400 smooth-transition"
      >
        <ChevronDown
          className={`w-3.5 h-3.5 smooth-transition ${showHint ? 'rotate-0' : '-rotate-90'}`}
        />
        <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
      </button>

      {showHint && (
        <div className="mt-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
          <p className="text-xs text-zinc-400 leading-relaxed">{hint}</p>
        </div>
      )}
    </div>
  )
})

export default PracticeBox
