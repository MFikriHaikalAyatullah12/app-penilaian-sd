'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

interface LoginForm {
  email: string
  password: string
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Partial<LoginForm>>({})
  const router = useRouter()

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginForm> = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }

    if (!formData.password) {
      newErrors.password = 'Password harus diisi'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof LoginForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login form submitted with data:', formData)
    
    if (!validateForm()) {
      toast.error('Mohon perbaiki kesalahan pada form')
      return
    }

    setLoading(true)
    
    try {
      console.log('Attempting login with:', { email: formData.email })
      
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      console.log('Login result:', result)

      if (result?.error) {
        toast.error('Email atau password salah')
      } else {
        toast.success('Login berhasil!')
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Terjadi kesalahan saat login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center p-3 py-4">
      <div className="w-full max-w-md">
        {/* Logo/Icon */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg mb-2">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">
            UPT SD Negeri 117 Inpres Bontomangape
          </h1>
          <p className="text-sm sm:text-base font-medium text-blue-100">
            Aplikasi Penilaian SD
          </p>
          <p className="text-xs text-blue-200 mt-1">
            Masuk ke akun Anda untuk mengakses sistem penilaian
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6">
          <form onSubmit={onSubmit} className="space-y-4">

            {/* Email */}
            <div className="w-full">
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 text-gray-700">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="nama@email.com"
                  className={`
                    w-full pl-9 pr-3 py-2.5 text-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                    ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}
                    text-gray-900 placeholder-gray-400
                  `}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="w-full">
              <label className="block text-xs sm:text-sm font-semibold mb-1.5 text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={`
                    w-full pl-9 pr-3 py-2.5 text-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                    ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}
                    text-gray-900 placeholder-gray-400
                  `}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 px-4 text-sm rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memproses...
                </span>
              ) : 'Masuk'}
            </button>

            <div className="text-center pt-1">
              <p className="text-gray-600 text-xs sm:text-sm">
                Belum punya akun?{' '}
                <Link 
                  href="/register" 
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Daftar di sini
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 text-xs sm:text-sm text-white/80">
          <p className="font-medium">UPT SD Negeri 117 Inpres Bontomangape</p>
          <p className="mt-0.5">© 2025 - Sistem Penilaian Guru Sekolah Dasar</p>
        </div>
      </div>
    </div>
  )
}