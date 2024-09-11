'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from '@/hooks/use-toast'
import { useState } from 'react'
import { auth } from '@/lib/firebase'

const SignInForm = () => {
  const formSchema = z.object({
    email: z.string().email().toLowerCase(),
    password: z.string(),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      console.log('Attempting to sign in...')
      await signInWithEmailAndPassword(auth, values.email, values.password)
      console.log('Sign in successful!')
    } catch (error) {
      if (error instanceof Error) {
        console.error(error)
        toast({
          title: 'Oops..',
          description: error.message,
        })
      }
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="z-[1] w-[98%] max-w-screen-sm space-y-4 self-center justify-self-center rounded-xl bg-background p-6 sm:w-[60%]"
      >
        <h2 className="text-2xl font-bold">Welcome back!</h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" className="w-full">
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
        <div className="text-sm">
          Need an account?{' '}
          <Link
            href={'/sign-up'}
            className="font-semibold transition hover:underline"
          >
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  )
}
export default SignInForm
