import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // Additional middleware logic if needed
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/students/:path*',
    '/grades/:path*',
    '/api/students/:path*',
    '/api/grades/:path*',
    '/api/user/:path*'
  ]
}