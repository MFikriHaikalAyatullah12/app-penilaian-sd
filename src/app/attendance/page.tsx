'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { Card, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

interface Student {
  id: string
  name: string
  nisn: string | null
  class: number
}

interface Subject {
  id: string
  name: string
  classLevel: number
}

interface AttendanceRecord {
  studentId: string
  status: 'Hadir' | 'Izin' | 'Sakit' | 'Alpa'
  note: string
}

export default function AttendancePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [students, setStudents] = useState<Student[]>([])
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [selectedSubject, setSelectedSubject] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  )
  const [attendanceRecords, setAttendanceRecords] = useState<Record<string, AttendanceRecord>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
      return
    }

    fetchStudents()
    fetchSubjects()
  }, [session, status, router])

  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/students')
      if (response.ok) {
        const data = await response.json()
        setStudents(data)
        
        // Initialize attendance records
        const initialRecords: Record<string, AttendanceRecord> = {}
        data.forEach((student: Student) => {
          initialRecords[student.id] = {
            studentId: student.id,
            status: 'Hadir',
            note: ''
          }
        })
        setAttendanceRecords(initialRecords)
      }
    } catch (error) {
      console.error('Error fetching students:', error)
      toast.error('Gagal memuat data siswa')
    }
  }

  const fetchSubjects = async () => {
    try {
      const response = await fetch('/api/subjects')
      if (response.ok) {
        const data = await response.json()
        setSubjects(data)
      }
    } catch (error) {
      console.error('Error fetching subjects:', error)
      toast.error('Gagal memuat data mata pelajaran')
    }
  }

  const handleStatusChange = (studentId: string, status: 'Hadir' | 'Izin' | 'Sakit' | 'Alpa') => {
    setAttendanceRecords(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        status
      }
    }))
  }

  const handleNoteChange = (studentId: string, note: string) => {
    setAttendanceRecords(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        note
      }
    }))
  }

  const handleSubmit = async () => {
    if (!selectedSubject) {
      toast.error('Pilih mata pelajaran terlebih dahulu')
      return
    }

    if (!selectedDate) {
      toast.error('Pilih tanggal terlebih dahulu')
      return
    }

    setIsSubmitting(true)

    try {
      const attendances = Object.values(attendanceRecords)

      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          attendances,
          subjectId: selectedSubject,
          date: selectedDate
        })
      })

      if (response.ok) {
        toast.success('Absensi berhasil disimpan!')
        
        // Reset to default "Hadir" after successful submission
        const resetRecords: Record<string, AttendanceRecord> = {}
        students.forEach((student) => {
          resetRecords[student.id] = {
            studentId: student.id,
            status: 'Hadir',
            note: ''
          }
        })
        setAttendanceRecords(resetRecords)
      } else {
        const error = await response.json()
        toast.error(error.error || 'Gagal menyimpan absensi')
      }
    } catch (error) {
      console.error('Error submitting attendance:', error)
      toast.error('Terjadi kesalahan saat menyimpan absensi')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleExport = async () => {
    if (!selectedSubject) {
      toast.error('Pilih mata pelajaran terlebih dahulu')
      return
    }

    try {
      // Get start and end of current month
      const now = new Date()
      const startDate = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0]
      const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0]

      const response = await fetch(
        `/api/attendance/export?startDate=${startDate}&endDate=${endDate}&subjectId=${selectedSubject}`
      )

      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `Absensi_Kelas_${session?.user?.assignedClass}_${new Date().toISOString().split('T')[0]}.xlsx`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
        toast.success('Data berhasil diekspor!')
      } else {
        toast.error('Gagal mengekspor data')
      }
    } catch (error) {
      console.error('Export error:', error)
      toast.error('Terjadi kesalahan saat mengekspor data')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hadir':
        return 'bg-green-100 text-green-800 hover:bg-green-200'
      case 'Izin':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      case 'Sakit':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
      case 'Alpa':
        return 'bg-red-100 text-red-800 hover:bg-red-200'
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
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
              Absensi Siswa Kelas {session.user?.assignedClass}
            </h1>
            <p className="mt-2 text-gray-600">
              Kelola absensi siswa untuk mata pelajaran yang Anda ajarkan
            </p>
          </div>

          {/* Filter Section */}
          <Card className="mb-6">
            <CardHeader title="Pilih Mata Pelajaran dan Tanggal" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mata Pelajaran
                </label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Pilih Mata Pelajaran</option>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-end">
                <Button
                  onClick={handleExport}
                  variant="outline"
                  className="w-full"
                  disabled={!selectedSubject}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export Excel
                </Button>
              </div>
            </div>
          </Card>

          {/* Attendance List */}
          {selectedSubject ? (
            <Card>
              <CardHeader title={`Daftar Absensi - ${subjects.find(s => s.id === selectedSubject)?.name}`} />
              
              {students.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Tidak ada siswa di kelas ini</p>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            No
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nama Siswa
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            NISN
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status Kehadiran
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Catatan
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {students.map((student, index) => (
                          <tr key={student.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {student.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {student.nisn || '-'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex gap-2">
                                {(['Hadir', 'Izin', 'Sakit', 'Alpa'] as const).map((status) => (
                                  <button
                                    key={status}
                                    onClick={() => handleStatusChange(student.id, status)}
                                    className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                      attendanceRecords[student.id]?.status === status
                                        ? getStatusColor(status)
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                  >
                                    {status}
                                  </button>
                                ))}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <input
                                type="text"
                                value={attendanceRecords[student.id]?.note || ''}
                                onChange={(e) => handleNoteChange(student.id, e.target.value)}
                                placeholder="Catatan (opsional)"
                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex justify-end">
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-6"
                      >
                        {isSubmitting ? 'Menyimpan...' : 'Simpan Absensi'}
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          ) : (
            <Card>
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  Pilih Mata Pelajaran
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Silakan pilih mata pelajaran dan tanggal untuk memulai absensi
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
