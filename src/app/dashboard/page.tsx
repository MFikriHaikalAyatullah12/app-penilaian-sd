'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { Card, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

interface DashboardStats {
  totalStudents: number
  totalGrades: number
  subjects: Array<{
    id: string
    name: string
    gradeCount: number
  }>
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
      return
    }

    fetchDashboardData()
  }, [session, status, router])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      
      // Fetch students
      const studentsResponse = await fetch('/api/students')
      const students = await studentsResponse.json()
      
      // Fetch grades
      const gradesResponse = await fetch('/api/grades')
      const grades = await gradesResponse.json()
      
      // Fetch subjects
      const subjectsResponse = await fetch('/api/subjects')
      const subjects = await subjectsResponse.json()
      
      // Calculate stats
      const subjectStats = subjects.map((subject: any) => ({
        id: subject.id,
        name: subject.name,
        gradeCount: grades.filter((grade: any) => grade.subjectId === subject.id).length
      }))

      setStats({
        totalStudents: students.length,
        totalGrades: grades.length,
        subjects: subjectStats
      })
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      toast.error('Gagal memuat data dashboard')
    } finally {
      setLoading(false)
    }
  }

  const handleExportExcel = async () => {
    try {
      const response = await fetch('/api/export/excel')
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `Rekap_Nilai_Kelas_${session?.user?.assignedClass}_${new Date().toISOString().split('T')[0]}.xlsx`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
        toast.success('Data berhasil diekspor ke Excel!')
      } else {
        toast.error('Gagal mengekspor data')
      }
    } catch (error) {
      console.error('Export error:', error)
      toast.error('Terjadi kesalahan saat mengekspor data')
    }
  }

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      'Apakah Anda yakin ingin menghapus akun? Semua data siswa dan nilai akan ikut terhapus. Tindakan ini tidak dapat dibatalkan.'
    )
    
    if (!confirmDelete) return

    try {
      const response = await fetch('/api/user/delete', {
        method: 'DELETE'
      })

      if (response.ok) {
        toast.success('Akun berhasil dihapus')
        router.push('/login')
      } else {
        const result = await response.json()
        toast.error(result.error || 'Gagal menghapus akun')
      }
    } catch (error) {
      console.error('Delete account error:', error)
      toast.error('Terjadi kesalahan saat menghapus akun')
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Memuat data...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard Kelas {session.user?.assignedClass}
            </h1>
            <p className="mt-2 text-gray-600">
              Selamat datang, {session.user?.name}! Kelola data siswa dan nilai di dashboard ini.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {stats?.totalStudents || 0}
                </div>
                <div className="text-sm text-gray-600 mt-1">Total Siswa</div>
              </div>
            </Card>
            
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {stats?.totalGrades || 0}
                </div>
                <div className="text-sm text-gray-600 mt-1">Total Nilai</div>
              </div>
            </Card>
            
            <Card>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {stats?.subjects?.length || 0}
                </div>
                <div className="text-sm text-gray-600 mt-1">Mata Pelajaran</div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <Card>
              <CardHeader title="Aksi Cepat" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/students" className="block">
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg border border-blue-200 transition-all duration-200 hover:shadow-md cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-500 rounded-lg group-hover:bg-blue-600 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">Kelola Data Siswa</h3>
                        <p className="text-sm text-gray-600">Tambah, edit, hapus data siswa</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/grades" className="block">
                  <div className="group p-6 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg border border-green-200 transition-all duration-200 hover:shadow-md cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-green-500 rounded-lg group-hover:bg-green-600 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-700">Input & Kelola Nilai</h3>
                        <p className="text-sm text-gray-600">Input nilai dan kelola penilaian</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <div 
                  onClick={handleExportExcel}
                  className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-lg border border-purple-200 transition-all duration-200 hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-purple-500 rounded-lg group-hover:bg-purple-600 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-700">Export ke Excel</h3>
                      <p className="text-sm text-gray-600">Download data dalam format Excel</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Subject Summary */}
          <div className="mb-8">
            <Card>
              <CardHeader title="Ringkasan Mata Pelajaran" />
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {stats?.subjects?.map((subject) => (
                  <div 
                    key={subject.id}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-900">
                      {subject.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {subject.gradeCount} nilai
                    </span>
                  </div>
                ))}
                {!stats?.subjects?.length && (
                  <p className="text-gray-500 text-sm text-center py-4">
                    Belum ada data nilai
                  </p>
                )}
              </div>
            </Card>
          </div>

          {/* Danger Zone */}
          <Card>
            <CardHeader title="Zona Berbahaya" />
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Hapus Akun
                  </h3>
                  <p className="text-sm text-gray-600">
                    Menghapus akun akan menghapus semua data siswa dan nilai. Tindakan ini tidak dapat dibatalkan.
                  </p>
                </div>
                <Button 
                  variant="danger"
                  onClick={handleDeleteAccount}
                >
                  Hapus Akun
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}