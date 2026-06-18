import { memo } from 'react'

const TerminalPreview = memo(function TerminalPreview() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="bg-[#1a1a1a] rounded-xl border border-zinc-800 overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-xl font-bold text-zinc-100 mb-4">Terminal Preview</h2>
          <div className="bg-[#0d0d0d] rounded-lg border border-zinc-800 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-zinc-400 ml-2">terminal</span>
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
      </div>
    </section>
  )
})

export default TerminalPreview
