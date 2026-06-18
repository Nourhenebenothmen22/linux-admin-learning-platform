import { memo } from 'react'
import { TriangleAlert, Info } from 'lucide-react'

interface AlertBoxProps {
  type: 'warning' | 'info'
  children: React.ReactNode
}

const AlertBox = memo(function AlertBox({ type, children }: AlertBoxProps) {
  const isWarning: boolean = type === 'warning'

  return (
    <div
      className={`flex gap-3 p-4 rounded-lg border-l-4 my-4 ${
        isWarning
          ? 'bg-yellow-500/10 border-yellow-500 text-yellow-200'
          : 'bg-blue-500/10 border-blue-500 text-blue-200'
      }`}
    >
      <div className="flex-shrink-0 mt-0.5">
        {isWarning ? (
          <TriangleAlert className="w-5 h-5 text-yellow-400" />
        ) : (
          <Info className="w-5 h-5 text-blue-400" />
        )}
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
})

export default AlertBox
