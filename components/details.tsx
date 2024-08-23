import ChatSettings from './details/chat-settings'
import PrivacyHelp from './details/privacy-help'
import SharedFiles from './details/shared-files'
import SharedPhotos from './details/shared-photos'
import UserInfo from './details/user-info'
import { Button } from './ui/button'

const Details = () => {
  return (
    <aside className="flex flex-[1] flex-col gap-2 overflow-hidden rounded-xl bg-background *:px-4 last:pb-4">
      <UserInfo />
      <div className="flex flex-[1] flex-col">
        <ChatSettings />
        <PrivacyHelp />
        <SharedPhotos />
        <SharedFiles />
      </div>

      <Button className="mx-4" variant="destructive" disabled>
        Block user
      </Button>
    </aside>
  )
}

export default Details
