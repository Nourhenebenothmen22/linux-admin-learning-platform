'use client'

import { memo } from 'react'
import type { JSX } from 'react'

interface Command {
  cmd: string
  description: string
  category: string
}

const commands: Command[] = [
  { cmd: 'ls -la', description: 'List all files with details', category: 'Files' },
  { cmd: 'chmod 755', description: 'Set file permissions', category: 'Permissions' },
  { cmd: 'grep -r', description: 'Search recursively in files', category: 'Search' },
  { cmd: 'ssh user@host', description: 'Connect to remote server', category: 'Network' },
  { cmd: 'ps aux', description: 'List all running processes', category: 'Process' },
  { cmd: 'tar -xzf', description: 'Extract compressed archive', category: 'Archive' },
  { cmd: 'df -h', description: 'Check disk usage', category: 'System' },
  { cmd: 'systemctl status', description: 'Manage system services', category: 'Services' },
  { cmd: 'crontab -e', description: 'Edit scheduled tasks', category: 'Automation' },
  { cmd: 'iptables -L', description: 'List firewall rules', category: 'Security' },
  { cmd: 'ping -c 4', description: 'Test network connectivity', category: 'Network' },
  { cmd: 'find / -name', description: 'Find files by name', category: 'Files' },
]

const CommandCheatsheet = memo(function CommandCheatsheet(): JSX.Element {
  return (
    <section aria-label="Command cheatsheet" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase">Cheatsheet</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Commands You&apos;ll{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Master
          </span>
        </h2>
        <p className="text-base md:text-lg text-zinc-400">
          Essential Linux commands you will learn across every category of system administration.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {commands.map((item: Command): JSX.Element => (
          <div
            key={item.cmd}
            className="group bg-zinc-900/50 hover:bg-zinc-900 rounded-xl border border-zinc-800 hover:border-green-500/30 p-4 transition-all hover:shadow-lg hover:shadow-green-500/5"
          >
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-green-400 bg-green-500/10 mb-2">
              {item.category}
            </span>
            <p className="font-mono text-sm font-semibold text-green-300 mb-1 group-hover:text-green-200 transition-colors">
              <span className="text-zinc-500">$ </span>{item.cmd}
            </p>
            <p className="text-xs text-zinc-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
})

export default CommandCheatsheet
