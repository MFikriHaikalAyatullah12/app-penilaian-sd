import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      assignedClass: number | null
    } & DefaultSession['user']
  }

  interface User {
    id: string
    email: string
    name: string
    assignedClass: number | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    assignedClass: number | null
  }
}