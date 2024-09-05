'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import Link from 'next/link'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'

const SignInForm = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    email: z.string().email().toLowerCase(),
    password: z.string().min(8, {}),
    image: z.any(),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      image: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    console.log(values.username)

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )
    } catch (error) {
      console.log(error)
    }
  }

  interface Avatar {
    file: File | null
    url: string
  }
  const [avatar, setAvatar] = useState<Avatar>({
    file: null,
    url: '',
  })

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      })
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="z-[1] w-[98%] max-w-screen-sm space-y-4 rounded-xl border-2 bg-background p-6 sm:w-[60%]"
      >
        <h2 className="text-2xl font-bold">Sign up</h2>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Avatar className="size-14">
                  <AvatarImage src={avatar.url || ''} />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                <div>Upload an image.</div>
              </FormLabel>
              <FormControl>
                <Input
                  className="hidden"
                  type="file"
                  {...field}
                  onChange={handleAvatar}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className="text-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="text-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="text-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <div>
          <Link
            href={'/sign-in'}
            className="text-sm font-semibold transition hover:underline"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </Form>
  )
}
export default SignInForm
