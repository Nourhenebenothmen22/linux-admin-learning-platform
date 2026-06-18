'use client'
import { memo, useState, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  command: string
  language?: string
}

const CodeBlock = memo(function CodeBlock({ command, language }: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = useCallback(async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout((): void => setCopied(false), 2000)
    } catch {
      const textArea: HTMLTextAreaElement = document.createElement('textarea')
      textArea.value = command
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout((): void => setCopied(false), 2000)
    }
  }, [command])

  return (
    <div className="rounded-xl overflow-hidden border border-green-500/10 my-4 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0a0a] border-b border-zinc-800/60">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          {language && (
            <span className="ml-3 text-xs text-zinc-500 font-mono">{language}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-green-400 smooth-transition"
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
      <pre className="p-4 bg-black overflow-x-auto">
        <code className="text-sm font-mono text-green-400/90 leading-relaxed">{command}</code>
      </pre>
    </div>
  )
})

export default CodeBlock
