'use client'
import { Search } from 'lucide-react'
import type { ChangeEvent } from 'react'

interface SearchLessonsProps {
  onSearch: (query: string) => void
}

export default function SearchLessons({ onSearch }: SearchLessonsProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onSearch(e.target.value)
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
      <input
        type="text"
        placeholder="Search lessons..."
        onChange={handleChange}
        className="w-full pl-9 pr-3 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all"
      />
    </div>
  )
}
