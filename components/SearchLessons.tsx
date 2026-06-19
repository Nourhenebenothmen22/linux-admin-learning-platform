'use client'
import { memo } from 'react'
import { Search } from 'lucide-react'
import type { ChangeEvent } from 'react'

interface SearchLessonsProps {
  onSearch: (query: string) => void
}

const SearchLessons = memo(function SearchLessons({ onSearch }: SearchLessonsProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onSearch(e.target.value)
  }

  return (
    <div className="relative group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-green-400 smooth-transition" />
      <input
        type="text"
        placeholder="Search lessons..."
        onChange={handleChange}
        className="w-full pl-9 pr-3 py-2 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-green-500/40 focus:bg-white/[0.06] smooth-transition"
      />
    </div>
  )
})

export default SearchLessons
