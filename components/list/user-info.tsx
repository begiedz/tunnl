import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ellipsis, UserRoundPen, Video } from "lucide-react";

const UserInfo = () => {
  return (
    <section className="flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>UP</AvatarFallback>
        </Avatar>
        <h2 className="text-ellipsis">User Profile</h2>
      </div>

      <ul className="flex gap-1">
        <li><Ellipsis size={16} /></li>
        <li><Video size={16} /></li>
        <li><UserRoundPen size={16} /></li>
      </ul>
    </section>
  );
}

export default UserInfo;