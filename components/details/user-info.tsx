import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const UserInfo = () => {
  return (
    <div className="flex flex-col items-center gap-2 border-b-2 border-border py-4">
      <Avatar className="size-20">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>UP</AvatarFallback>
      </Avatar>

      <h2 className="text-xl font-bold">User Profile</h2>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  )
}

export default UserInfo
