import { memo } from 'react'

interface ProgressBarProps {
  completed: number
  total: number
}

const ProgressBar = memo(function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage: number = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-400">
          {completed} of {total} lessons
        </span>
        <span className="text-xs text-zinc-400">{percentage}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-500/80 to-green-400 rounded-full animate-fill-bar gpu-accelerated"
          style={{
            transform: `scaleX(${percentage / 100})`,
            transformOrigin: 'left',
          }}
        />
      </div>
    </div>
  )
})

export default ProgressBar
