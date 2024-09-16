'use client'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { useState } from 'react'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
const AddUser = () => {
  return (
    <Dialog>
      <DialogTrigger className="h-full">
        <Button size="sm" variant="outline" className="h-full">
          <Plus size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto max-w-96">
        <DialogHeader>
          <DialogTitle>Add an user</DialogTitle>
        </DialogHeader>
        <div>
          <form className="mb-4 flex gap-4">
            <Input
              type="text"
              placeholder="Search by username"
              name="username"
            />
            <Button>Search</Button>
          </form>
          <section className="flex w-full space-x-2 rounded-md p-2 text-left transition-colors hover:bg-slate-200">
            <Avatar className="size-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <div className="flex w-full items-center">
              <h3 className="font-semibold">{`User`}</h3>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddUser
