import { cn } from '@/lib/utils'
import { Input } from './input'
import { Search } from 'lucide-react'
const Searchbar = ({ className }: { className?: string }) => {
  return (
    <div className="relative w-full">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500"
        size={20}
      />
      <Input
        type="search"
        placeholder="Search for chats..."
        className={cn('pl-10', className)}
      />
    </div>
  )
}

export default Searchbar
