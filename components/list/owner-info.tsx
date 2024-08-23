import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Ellipsis, UserRoundPen, Video } from 'lucide-react'
import { Button } from '../ui/button'

const OwnerInfo = () => {
  return (
    <section className="flex items-center justify-between border-b-2 border-slate-200 py-4">
      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>UP</AvatarFallback>
        </Avatar>
        <h2 className="line-clamp-1 text-xl font-bold">User Profile</h2>
      </div>

      <div className="flex gap-1">
        <Button variant="outline" size="sm">
          <Ellipsis size={16} />
        </Button>
        <Button variant="outline" size="sm">
          <Video size={16} />
        </Button>
        <Button variant="outline" size="sm">
          <UserRoundPen size={16} />
        </Button>
      </div>
    </section>
  )
}

export default OwnerInfo
