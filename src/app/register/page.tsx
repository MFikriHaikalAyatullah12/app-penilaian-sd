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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center p-3 py-3">
      <div className="w-full max-w-md">
        {/* Logo/Icon */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg mb-2">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
            UPT SD Negeri 117 Inpres Bontomangape
          </h1>
          <p className="text-sm font-medium text-blue-100">
            Daftar Akun Baru
          </p>
          <p className="text-xs text-blue-200 mt-0.5">
            Buat akun untuk mengakses sistem penilaian
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-5">
          <form onSubmit={onSubmit} className="space-y-3">

            {/* Nama Lengkap */}
            <div className="w-full">
              <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nama lengkap"
                className={`
                  w-full px-3 py-2 text-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                  ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}
                  text-gray-900 placeholder-gray-400
                `}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="nama@email.com"
                className={`
                  w-full px-3 py-2 text-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                  ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}
                  text-gray-900 placeholder-gray-400
                `}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Kelas yang Diajar */}
            <div className="w-full">
              <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">
                Kelas yang Diajar
              </label>
              <select
                name="assignedClass"
                value={formData.assignedClass}
                onChange={handleInputChange}
                className={`
                  w-full px-3 py-2 text-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                  ${errors.assignedClass ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}
                  text-gray-900
                `}
              >
                <option value={0}>Pilih Kelas</option>
                <option value={1}>Kelas 1</option>
                <option value={2}>Kelas 2</option>
                <option value={3}>Kelas 3</option>
                <option value={4}>Kelas 4</option>
                <option value={5}>Kelas 5</option>
                <option value={6}>Kelas 6</option>
              </select>
              {errors.assignedClass && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.assignedClass}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="w-full">
              <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className={`
                  w-full px-3 py-2 text-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                  ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}
                  text-gray-900 placeholder-gray-400
                `}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Konfirmasi Password */}
            <div className="w-full">
              <label className="block text-xs sm:text-sm font-semibold mb-1 text-gray-700">
                Konfirmasi Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                className={`
                  w-full px-3 py-2 text-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                  ${errors.confirmPassword ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}
                  text-gray-900 placeholder-gray-400
                `}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.confirmPassword}
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
              ) : 'Daftar Sekarang'}
            </button>

            <div className="text-center pt-1">
              <p className="text-gray-600 text-xs sm:text-sm">
                Sudah punya akun?{' '}
                <Link 
                  href="/login" 
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-3 text-xs sm:text-sm text-white/80">
          <p className="font-medium">UPT SD Negeri 117 Inpres Bontomangape</p>
          <p className="mt-0.5">© 2025 - Sistem Penilaian Guru Sekolah Dasar</p>
        </div>
      </div>
    </div>
  )
}