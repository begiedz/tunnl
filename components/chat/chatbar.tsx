import { Info, Phone, Video } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

const Chatbar = ({ onInfoClick }: { onInfoClick: () => void }) => {
  return (
    <section className="flex w-full flex-shrink-0 items-center justify-between border-b-2 border-slate-200 py-4">
      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>UP</AvatarFallback>
        </Avatar>
        <h2 className="line-clamp-1 text-xl font-bold">User Profile</h2>
      </div>

      <div className="flex items-center">
        <Button
          className="aspect-square h-full bg-transparent p-2"
          variant="secondary"
        >
          <Phone size={20} />
        </Button>
        <Button
          className="aspect-square bg-transparent p-2"
          variant="secondary"
        >
          <Video size={20} />
        </Button>
        <Button
          className="aspect-square bg-transparent p-2"
          variant="secondary"
          onClick={onInfoClick}
        >
          <Info size={20} />
        </Button>
      </div>
    </section>
  )
}

export default Chatbar
