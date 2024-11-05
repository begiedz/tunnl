'use client'
import { Plus, Target } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { db } from '@/lib/firebase'
import { collection, getDoc, getDocs, query, where } from '@firebase/firestore'
import { useState } from 'react'
interface IUser {
  avatar: string
  username: string
}
const AddUser = () => {
  const [user, setUser] = useState<IUser | null>(null)

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //@ts-ignore
    const formData = new FormData(e.target)
    const username = formData.get('username')
    try {
      const userRef = collection(db, 'users')

      const q = query(userRef, where('username', '==', username))

      const querySnapShot = await getDocs(q)
      if (!querySnapShot.empty) {
        //@ts-ignore
        setUser(querySnapShot.docs[0].data())
      }
    } catch (error) {
      console.log(error)
    }
  }
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
          <form onSubmit={handleSearch} className="mb-4 flex gap-4">
            <Input
              type="text"
              placeholder="Search by username"
              name="username"
            />
            <Button>Search</Button>
          </form>
          <section className="space-y-4">
            {/* {[1, 2, 3].map((item) => ( */}
            {user && (
              <div className="flex w-full flex-col rounded-md">
                <div className="flex">
                  <Avatar className="size-12">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                  <div className="flex w-full items-center justify-between">
                    <h3 className="ml-2 font-semibold">{user.username}</h3>
                    <Button>Add user</Button>
                  </div>
                </div>
              </div>
            )}

            {/* ))} */}
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddUser
