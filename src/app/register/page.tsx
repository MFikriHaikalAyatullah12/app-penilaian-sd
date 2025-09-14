'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  assignedClass: number
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<RegisterForm>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    assignedClass: 0
  })
  const [errors, setErrors] = useState<Partial<RegisterForm>>({})
  const router = useRouter()

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterForm> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nama minimal 3 karakter'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }

    if (!formData.password) {
      newErrors.password = 'Password harus diisi'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password harus diisi'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok'
    }

    if (!formData.assignedClass || formData.assignedClass < 1 || formData.assignedClass > 6) {
      newErrors.assignedClass = 'Kelas harus dipilih' as any
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'assignedClass' ? parseInt(value) || 0 : value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof RegisterForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData)
    
    if (!validateForm()) {
      toast.error('Mohon perbaiki kesalahan pada form')
      return
    }

    setLoading(true)
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          assignedClass: formData.assignedClass,
        }),
      })

      const result = await response.json()
      console.log('API response:', result)

      if (response.ok) {
        toast.success('Registrasi berhasil! Silakan login.')
        router.push('/login')
      } else {
        toast.error(result.error || 'Terjadi kesalahan saat registrasi')
      }
    } catch (error) {
      console.error('Registration error:', error)
      toast.error('Terjadi kesalahan saat registrasi')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#111827' }}>
            Daftar Akun Baru
          </h1>
          <p style={{ color: '#6b7280' }}>
            Buat akun untuk mengakses sistem penilaian
          </p>
        </div>

        <Card>
          <form onSubmit={onSubmit} className="space-y-6">

            {/* Nama Lengkap */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Masukkan nama lengkap Anda"
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.name ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 placeholder-gray-500 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.name}
                </p>
              )}
            </div>

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

            {/* Kelas yang Diajar */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Kelas yang Diajar
              </label>
              <select
                name="assignedClass"
                value={formData.assignedClass}
                onChange={handleInputChange}
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.assignedClass ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              >
                <option value={0} style={{ color: '#111827' }}>Pilih Kelas</option>
                <option value={1} style={{ color: '#111827' }}>Kelas 1</option>
                <option value={2} style={{ color: '#111827' }}>Kelas 2</option>
                <option value={3} style={{ color: '#111827' }}>Kelas 3</option>
                <option value={4} style={{ color: '#111827' }}>Kelas 4</option>
                <option value={5} style={{ color: '#111827' }}>Kelas 5</option>
                <option value={6} style={{ color: '#111827' }}>Kelas 6</option>
              </select>
              {errors.assignedClass && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.assignedClass}
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

            {/* Konfirmasi Password */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Konfirmasi Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Konfirmasi password"
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 placeholder-gray-500 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Daftar'}
            </Button>

            <div className="text-center">
              <p style={{ color: '#6b7280' }}>
                Sudah punya akun?{' '}
                <Link 
                  href="/login" 
                  className="font-medium text-blue-600 hover:text-blue-500"
                  style={{ color: '#2563eb' }}
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}