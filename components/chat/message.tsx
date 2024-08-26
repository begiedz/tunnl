'use client'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { cn } from '@/lib/utils'

interface MessageProps {
  owner?: boolean
  value?: string
  sentTime?: number
  img?: string
}

const Message = ({ owner, value, img, sentTime }: MessageProps) => {
  return (
    <div
      className={cn('m-2 flex max-w-[80%] flex-col gap-2', owner && 'self-end')}
    >
      <div className="flex gap-2">
        {!owner && (
          <Avatar className="size-6 self-end">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>UP</AvatarFallback>
          </Avatar>
        )}

        <div
          className={cn(
            'border border-input bg-background px-4 py-2',
            'rounded-bl rounded-br-3xl rounded-tl-3xl rounded-tr-3xl',
            owner && 'rounded-bl-3xl rounded-br border-none bg-black text-white'
          )}
        >
          {img && <img src={img} className="rounded-3xl object-cover" />}
          {value}
        </div>
      </div>
      {!!sentTime && (
        <span
          className={cn(
            'w-auto text-xs font-semibold text-black/50',
            owner && 'self-end'
          )}
        >
          {sentTime} min ago
        </span>
      )}
    </div>
  )
}

export default Message
