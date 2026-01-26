'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/Button'
import { useState } from 'react'

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Data Siswa', href: '/students', icon: '👥' },
  { name: 'Input Nilai', href: '/grades', icon: '📝' },
  { name: 'Absensi', href: '/attendance', icon: '✓' },
]

export default function Navbar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSignOut = async () => {
    // Clear all caches
    if ('caches' in window) {
      const cacheNames = await caches.keys()
      await Promise.all(cacheNames.map(name => caches.delete(name)))
    }
    
    // Sign out and force redirect
    await signOut({ redirect: false })
    
    // Force redirect with cache busting
    window.location.href = '/login?t=' + Date.now()
  }

  if (!session) return null

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">SD</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:block">
                  UPT SD Negeri 117 Inpres Bontomangape
                </h1>
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent sm:hidden">
                  SD 117
                </h1>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* User Info - Hidden on small mobile */}
            <div className="hidden sm:flex sm:items-center sm:space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                <p className="text-xs text-gray-500">Kelas {session.user?.assignedClass}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="hidden sm:block"
              >
                Logout
              </Button>
            </div>

            {/* Mobile Logout Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="sm:hidden text-xs px-2"
            >
              Keluar
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-3 py-3 text-base font-medium rounded-lg transition-all ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-3 border-t border-gray-200 mt-2">
              <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
              <p className="text-xs text-gray-500">Kelas {session.user?.assignedClass}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}