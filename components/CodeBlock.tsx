'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  command: string
  language?: string
  label?: string
}

export default function CodeBlock({ command, language, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg overflow-hidden border border-zinc-800 my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          {label && <span className="text-xs text-zinc-400 font-medium">{label}</span>}
          {language && (
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-green-400 font-mono">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-green-400 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 bg-[#0d0d0d] overflow-x-auto">
        <code className="text-sm font-mono text-green-400 leading-relaxed">{command}</code>
      </pre>
    </div>
  )
}
