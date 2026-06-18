'use client'

import { memo } from 'react'
import type { JSX } from 'react'

const LiveTerminal = memo(function LiveTerminal(): JSX.Element {
  return (
    <section aria-label="Live terminal preview" className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase">Live Practice</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Real Commands.{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Real Output.
          </span>
        </h2>
        <p className="text-zinc-400">
          Watch Linux commands execute in real-time, just like in your terminal.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 p-[1px] rounded-2xl shadow-2xl shadow-green-500/20">
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs text-zinc-500 ml-2 font-mono">student@academy:~$</span>
          </div>
          <pre className="p-4 md:p-6 overflow-x-auto">
            <code className="text-xs md:text-sm font-mono leading-relaxed text-green-400">
{`$ uname -a
Linux academy-server 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux

$ whoami
student

$ ls -la /home
total 24
drwxr-xr-x  4 root   root   4096 Jun 10 10:00 .
drwxr-xr-x 18 root   root   4096 Jun 10 10:00 ..
drwxr-xr-x  5 student student 4096 Jun 15 14:30 student

$ echo "Welcome to Linux Academy"
Welcome to Linux Academy`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
})

export default LiveTerminal
