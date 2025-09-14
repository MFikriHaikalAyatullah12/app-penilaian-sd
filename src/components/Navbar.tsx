'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/Button'

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Data Siswa', href: '/students' },
  { name: 'Input Nilai', href: '/grades' },
]

export default function Navbar() {
  const { data: session } = useSession()
  const pathname = usePathname()

  const handleSignOut = () => {
    signOut({ callbackUrl: '/login' })
  }

  if (!session) return null

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <h1 className="text-xl font-bold text-blue-600">
                Penilaian SD
              </h1>
            </Link>
            
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                    pathname === item.href
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              <span className="text-sm text-gray-700">
                {session.user?.name} - Kelas {session.user?.assignedClass}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="sm:hidden pb-3 pt-2 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block pl-3 pr-4 py-2 text-base font-medium transition-colors ${
                pathname === item.href
                  ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pl-3 pr-4 py-2 text-sm text-gray-600">
            {session.user?.name} - Kelas {session.user?.assignedClass}
          </div>
        </div>
      </div>
    </nav>
  )
}