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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#111827' }}>
            Aplikasi Penilaian SD
          </h1>
          <p style={{ color: '#6b7280' }}>
            Masuk ke akun Anda untuk mengakses sistem penilaian
          </p>
        </div>

        <Card>
          <form onSubmit={onSubmit} className="space-y-6">

            {/* Email */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Masukkan email Anda"
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.email ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 placeholder-gray-500 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Masukkan password"
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.password ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 placeholder-gray-500 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.password}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Masuk'}
            </Button>

            <div className="text-center">
              <p style={{ color: '#6b7280' }}>
                Belum punya akun?{' '}
                <Link 
                  href="/register" 
                  className="font-medium text-blue-600 hover:text-blue-500"
                  style={{ color: '#2563eb' }}
                >
                  Daftar di sini
                </Link>
              </p>
            </div>
          </form>
        </Card>

        <div className="text-center text-sm" style={{ color: '#6b7280' }}>
          <p>Sistem Penilaian Guru Sekolah Dasar</p>
          <p>© 2025 - Dibuat untuk memudahkan proses penilaian</p>
        </div>
      </div>
    </div>
  )
}