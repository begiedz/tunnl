import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUser } from '@/context/UserContext'
import { Button } from '../ui/button'
import { UserRoundX } from 'lucide-react'
import { auth } from '@/lib/firebase'

const OwnerInfo = () => {
  const { currentUser, setCurrentUser } = useUser()

  if (!currentUser) {
    return null
  }
  return (
    <section className="flex items-center justify-between gap-4 border-b-2 border-slate-200 py-4">
      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage src={currentUser.avatar || undefined} />
          <AvatarFallback>{currentUser.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <h2 className="line-clamp-1 text-xl font-bold">
          {currentUser!.username}
        </h2>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={async () => {
          await auth.signOut()
          setCurrentUser(null)
        }}
      >
        <UserRoundX size={18} />
      </Button>
      {/* <div className="flex gap-1">
        <Button variant="outline" size="sm">
          <Ellipsis size={16} />
        </Button>
        <Button variant="outline" size="sm">
          <Video size={16} />
        </Button>
        <Button variant="outline" size="sm">
          <UserRoundPen size={16} />
        </Button>
      </div> */}
    </section>
  )
}

export default OwnerInfo
