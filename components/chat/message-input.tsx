'use client'
import { Image, Camera, Mic, Send, Smile } from 'lucide-react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useEffect, useRef, useState } from 'react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'
import { MouseDownEvent } from 'emoji-picker-react/dist/config/config'

const MessageInput = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [openEmoji, setOpenEmoji] = useState(false)
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleEmoji = (emojiData: EmojiClickData, e: MouseEvent) => {
    setText((prev) => prev + emojiData.emoji)
    setOpenEmoji(false)
  }

  const textAreaAdjust = () => {
    const element = textareaRef.current
    if (element) {
      element.style.height = '1px'
      element.style.height = element.scrollHeight + 'px'
    }
  }

  return (
    <section className="relative flex w-full items-center gap-2">
      {!isFocused && (
        <>
          <Button className="aspect-square p-0" variant={'outline'}>
            <Image />
          </Button>
          <Button className="aspect-square p-0" variant={'outline'}>
            <Camera />
          </Button>
          <Button className="aspect-square p-0" variant={'outline'}>
            <Mic />
          </Button>
        </>
      )}

      <Textarea
        className="h-11 max-h-full min-h-11 resize-none overflow-scroll text-lg sm:text-base"
        placeholder="Message"
        ref={textareaRef}
        value={text}
        onKeyUp={textAreaAdjust}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        className="hidden sm:block"
        onClick={() => {
          setOpenEmoji((prev) => !prev)
        }}
      >
        <Smile />
      </Button>
      <div className="absolute bottom-14 right-4">
        <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
      </div>
      <Button>
        <Send />
      </Button>
    </section>
  )
}

export default MessageInput
