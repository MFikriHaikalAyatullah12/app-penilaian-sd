'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { Card, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import toast from 'react-hot-toast'

interface Student {
  id: string
  name: string
  nisn?: string
}

interface Subject {
  id: string
  name: string
}

interface Grade {
  id: string
  taskName: string
  score: number
  maxScore: number
  date: string
  student: {
    id: string
    name: string
    nisn?: string
  }
  subject: {
    id: string
    name: string
  }
}

interface GradeForm {
  studentId: string
  subjectId: string
  taskName: string
  score: number
  maxScore: number
}

interface GradeFormErrors {
  studentId?: string
  subjectId?: string
  taskName?: string
  score?: string
  maxScore?: string
}

export default function GradesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [students, setStudents] = useState<Student[]>([])
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [grades, setGrades] = useState<Grade[]>([])
  const [filteredGrades, setFilteredGrades] = useState<Grade[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingGrade, setEditingGrade] = useState<Grade | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [filterStudent, setFilterStudent] = useState('')
  const [filterSubject, setFilterSubject] = useState('')

  // State untuk bulk input nilai
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false)
  const [bulkFormData, setBulkFormData] = useState({
    subjectId: '',
    taskName: '',
    score: 0,
    maxScore: 100
  })
  const [bulkErrors, setBulkErrors] = useState<{[key: string]: string | undefined}>({})
  const [bulkSubmitting, setBulkSubmitting] = useState(false)

  // Form state dengan controlled components
  const [formData, setFormData] = useState<GradeForm>({
    studentId: '',
    subjectId: '',
    taskName: '',
    score: 0,
    maxScore: 100
  })
  const [errors, setErrors] = useState<GradeFormErrors>({})

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
      return
    }

    fetchData()
  }, [session, status, router])

  useEffect(() => {
    // Filter grades based on selected filters
    let filtered = grades

    if (filterStudent) {
      filtered = filtered.filter(grade => grade.student.id === filterStudent)
    }

    if (filterSubject) {
      filtered = filtered.filter(grade => grade.subject.id === filterSubject)
    }

    setFilteredGrades(filtered)
  }, [grades, filterStudent, filterSubject])

  const fetchData = async () => {
    try {
      setLoading(true)
      
      // Fetch all data in parallel
      const [studentsRes, subjectsRes, gradesRes] = await Promise.all([
        fetch('/api/students'),
        fetch('/api/subjects'),
        fetch('/api/grades')
      ])

      if (studentsRes.ok) {
        const studentsData = await studentsRes.json()
        setStudents(studentsData)
      }

      if (subjectsRes.ok) {
        const subjectsData = await subjectsRes.json()
        setSubjects(subjectsData)
      }

      if (gradesRes.ok) {
        const gradesData = await gradesRes.json()
        setGrades(gradesData)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      toast.error('Terjadi kesalahan saat memuat data')
    } finally {
      setLoading(false)
    }
  }

  const validateForm = (): boolean => {
    const newErrors: GradeFormErrors = {}

    if (!formData.studentId) {
      newErrors.studentId = 'Siswa harus dipilih'
    }

    if (!formData.subjectId) {
      newErrors.subjectId = 'Mata pelajaran harus dipilih'
    }

    if (!formData.taskName.trim()) {
      newErrors.taskName = 'Nama tugas harus diisi'
    } else if (formData.taskName.trim().length < 3) {
      newErrors.taskName = 'Nama tugas minimal 3 karakter'
    }

    if (formData.score < 0) {
      newErrors.score = 'Nilai tidak boleh negatif'
    } else if (formData.score > formData.maxScore) {
      newErrors.score = 'Nilai tidak boleh lebih dari nilai maksimal'
    }

    if (formData.maxScore <= 0) {
      newErrors.maxScore = 'Nilai maksimal harus lebih dari 0'
    } else if (formData.maxScore > 1000) {
      newErrors.maxScore = 'Nilai maksimal tidak boleh lebih dari 1000'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'score' || name === 'maxScore' ? parseFloat(value) || 0 : value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof GradeFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const openModal = (grade?: Grade) => {
    if (grade) {
      setEditingGrade(grade)
      setFormData({
        studentId: grade.student.id,
        subjectId: grade.subject.id,
        taskName: grade.taskName,
        score: grade.score,
        maxScore: grade.maxScore
      })
    } else {
      setEditingGrade(null)
      setFormData({
        studentId: '',
        subjectId: '',
        taskName: '',
        score: 0,
        maxScore: 100
      })
    }
    setErrors({})
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingGrade(null)
    setFormData({
      studentId: '',
      subjectId: '',
      taskName: '',
      score: 0,
      maxScore: 100
    })
    setErrors({})
  }

  const openBulkModal = () => {
    setBulkFormData({
      subjectId: '',
      taskName: '',
      score: 0,
      maxScore: 100
    })
    setBulkErrors({})
    setIsBulkModalOpen(true)
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Grade form submitted with data:', formData)
    
    if (!validateForm()) {
      toast.error('Mohon perbaiki kesalahan pada form')
      return
    }

    setSubmitting(true)
    
    try {
      const url = editingGrade ? `/api/grades/${editingGrade.id}` : '/api/grades'
      const method = editingGrade ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentId: formData.studentId,
          subjectId: formData.subjectId,
          taskName: formData.taskName.trim(),
          score: formData.score,
          maxScore: formData.maxScore
        }),
      })

      const result = await response.json()
      console.log('Grade API response:', result)

      if (response.ok) {
        toast.success(
          editingGrade ? 'Nilai berhasil diupdate!' : 'Nilai berhasil ditambahkan!'
        )
        fetchData()
        closeModal()
      } else {
        toast.error(result.error || 'Terjadi kesalahan')
      }
    } catch (error) {
      console.error('Error saving grade:', error)
      toast.error('Terjadi kesalahan saat menyimpan data')
    } finally {
      setSubmitting(false)
    }
  }

  const deleteGrade = async (grade: Grade) => {
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus nilai "${grade.taskName}" untuk siswa ${grade.student.name}?`
    )
    
    if (!confirmDelete) return

    try {
      const response = await fetch(`/api/grades/${grade.id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        toast.success('Nilai berhasil dihapus!')
        fetchData()
      } else {
        const result = await response.json()
        toast.error(result.error || 'Gagal menghapus nilai')
      }
    } catch (error) {
      console.error('Error deleting grade:', error)
      toast.error('Terjadi kesalahan saat menghapus nilai')
    }
  }

  const exportToExcel = async () => {
    try {
      const response = await fetch('/api/export/excel')
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = `Rekap_Nilai_Kelas_${session?.user?.assignedClass}_${new Date().toISOString().split('T')[0]}.xlsx`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        toast.success('File Excel berhasil diunduh!')
      } else {
        toast.error('Gagal mengexport data')
      }
    } catch (error) {
      console.error('Error exporting to Excel:', error)
      toast.error('Terjadi kesalahan saat export data')
    }
  }

  const validateBulkForm = (): boolean => {
    const newErrors: {[key: string]: string | undefined} = {}

    if (!bulkFormData.subjectId) {
      newErrors.subjectId = 'Mata pelajaran harus dipilih'
    }

    if (!bulkFormData.taskName.trim()) {
      newErrors.taskName = 'Nama tugas harus diisi'
    } else if (bulkFormData.taskName.trim().length < 3) {
      newErrors.taskName = 'Nama tugas minimal 3 karakter'
    }

    if (bulkFormData.score < 0) {
      newErrors.score = 'Nilai tidak boleh negatif'
    } else if (bulkFormData.score > bulkFormData.maxScore) {
      newErrors.score = 'Nilai tidak boleh lebih dari nilai maksimal'
    }

    if (bulkFormData.maxScore <= 0) {
      newErrors.maxScore = 'Nilai maksimal harus lebih dari 0'
    } else if (bulkFormData.maxScore > 1000) {
      newErrors.maxScore = 'Nilai maksimal tidak boleh lebih dari 1000'
    }

    setBulkErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleBulkInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBulkFormData(prev => ({
      ...prev,
      [name]: name === 'score' || name === 'maxScore' ? parseFloat(value) || 0 : value
    }))
    // Clear error when user starts typing
    if (bulkErrors[name]) {
      setBulkErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const onBulkSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Bulk grade form submitted with data:', bulkFormData)
    
    if (!validateBulkForm()) {
      toast.error('Mohon perbaiki kesalahan pada form')
      return
    }

    if (students.length === 0) {
      toast.error('Tidak ada siswa untuk diberi nilai')
      return
    }

    const confirmBulk = window.confirm(
      `Apakah Anda yakin ingin memberikan nilai ${bulkFormData.score}/${bulkFormData.maxScore} untuk tugas "${bulkFormData.taskName}" kepada semua ${students.length} siswa?`
    )
    
    if (!confirmBulk) return

    setBulkSubmitting(true)
    
    try {
      let successCount = 0
      let errorCount = 0

      // Input nilai untuk setiap siswa
      for (const student of students) {
        try {
          const response = await fetch('/api/grades', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              studentId: student.id,
              subjectId: bulkFormData.subjectId,
              taskName: bulkFormData.taskName.trim(),
              score: bulkFormData.score,
              maxScore: bulkFormData.maxScore
            }),
          })

          if (response.ok) {
            successCount++
          } else {
            errorCount++
          }
        } catch (error) {
          errorCount++
        }
      }

      if (successCount > 0) {
        toast.success(`Berhasil memberikan nilai ke ${successCount} siswa!`)
        fetchData()
        setIsBulkModalOpen(false)
        setBulkFormData({
          subjectId: '',
          taskName: '',
          score: 0,
          maxScore: 100
        })
        setBulkErrors({})
      }

      if (errorCount > 0) {
        toast.error(`${errorCount} siswa gagal diberi nilai`)
      }
    } catch (error) {
      console.error('Error bulk saving grades:', error)
      toast.error('Terjadi kesalahan saat menyimpan nilai')
    } finally {
      setBulkSubmitting(false)
    }
  }

  const getPercentage = (score: number, maxScore: number): number => {
    return Math.round((score / maxScore) * 100)
  }

  const getGradeColor = (percentage: number): string => {
    if (percentage >= 80) return '#10b981' // green
    if (percentage >= 70) return '#f59e0b' // yellow
    if (percentage >= 60) return '#f97316' // orange
    return '#ef4444' // red
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4" style={{ color: '#6b7280' }}>Memuat data...</p>
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
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: '#111827' }}>
              Input Nilai Kelas {session.user?.assignedClass}
            </h1>
            <p style={{ color: '#6b7280' }}>
              Total: {filteredGrades.length} nilai
            </p>
          </div>
          <div className="space-x-3">
            <Button variant="outline" onClick={exportToExcel}>
              Export Excel
            </Button>
            <Button variant="outline" onClick={openBulkModal}>
              Nilai Sama Semua
            </Button>
            <Button onClick={() => openModal()}>
              Input Nilai
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="p-4">
            <h3 className="text-lg font-medium mb-4" style={{ color: '#111827' }}>Filter Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Filter Siswa
                </label>
                <select
                  value={filterStudent}
                  onChange={(e) => setFilterStudent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{ color: '#111827', backgroundColor: '#ffffff' }}
                >
                  <option value="">Semua Siswa</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id} style={{ color: '#111827' }}>
                      {student.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Mata Pelajaran
                </label>
                <select
                  value={filterSubject}
                  onChange={(e) => setFilterSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{ color: '#111827', backgroundColor: '#ffffff' }}
                >
                  <option value="">Semua Mata Pelajaran</option>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id} style={{ color: '#111827' }}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </Card>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4" style={{ color: '#6b7280' }}>Memuat data nilai...</p>
          </div>
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      Siswa
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      Mata Pelajaran
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      Tugas
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      Nilai
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      Persentase
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredGrades.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center">
                        <p style={{ color: '#6b7280' }}>
                          {grades.length === 0 ? 'Belum ada nilai yang diinput' : 'Tidak ada data sesuai filter'}
                        </p>
                        <Button 
                          onClick={() => openModal()} 
                          className="mt-4"
                          variant="outline"
                        >
                          Input Nilai Pertama
                        </Button>
                      </td>
                    </tr>
                  ) : (
                    filteredGrades.map((grade) => {
                      const percentage = getPercentage(grade.score, grade.maxScore)
                      return (
                        <tr key={grade.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium" style={{ color: '#111827' }}>
                              {grade.student.name}
                            </div>
                            {grade.student.nisn && (
                              <div className="text-xs" style={{ color: '#6b7280' }}>
                                NISN: {grade.student.nisn}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#374151' }}>
                            {grade.subject.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium" style={{ color: '#111827' }}>
                              {grade.taskName}
                            </div>
                            <div className="text-xs" style={{ color: '#6b7280' }}>
                              {new Date(grade.date).toLocaleDateString('id-ID')}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="text-sm font-medium" style={{ color: '#111827' }}>
                              {grade.score} / {grade.maxScore}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <span 
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                              style={{ 
                                backgroundColor: getGradeColor(percentage) + '20',
                                color: getGradeColor(percentage)
                              }}
                            >
                              {percentage}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => openModal(grade)}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => deleteGrade(grade)}
                              >
                                Hapus
                              </Button>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={editingGrade ? "Edit Nilai" : "Input Nilai Baru"}>
        <form onSubmit={onSubmit} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Siswa */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Siswa
              </label>
              <select
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.studentId ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
                disabled={!!editingGrade}
              >
                <option value="">Pilih Siswa</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id} style={{ color: '#111827' }}>
                    {student.name}
                  </option>
                ))}
              </select>
              {errors.studentId && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.studentId}
                </p>
              )}
            </div>

            {/* Mata Pelajaran */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Mata Pelajaran
              </label>
              <select
                name="subjectId"
                value={formData.subjectId}
                onChange={handleInputChange}
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.subjectId ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              >
                <option value="">Pilih Mata Pelajaran</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id} style={{ color: '#111827' }}>
                    {subject.name}
                  </option>
                ))}
              </select>
              {errors.subjectId && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.subjectId}
                </p>
              )}
            </div>
          </div>

          {/* Nama Tugas */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
              Nama Tugas/Ujian
            </label>
            <input
              type="text"
              name="taskName"
              value={formData.taskName}
              onChange={handleInputChange}
              placeholder="Contoh: Ulangan Harian 1, Tugas Kelompok, UTS"
              className={`
                w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.taskName ? 'border-red-500' : 'border-gray-300'}
                text-gray-900 placeholder-gray-500 bg-white
              `}
              style={{ color: '#111827', backgroundColor: '#ffffff' }}
            />
            {errors.taskName && (
              <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                {errors.taskName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nilai */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Nilai
              </label>
              <input
                type="number"
                name="score"
                value={formData.score}
                onChange={handleInputChange}
                min="0"
                max={formData.maxScore}
                step="0.1"
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.score ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
              {errors.score && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.score}
                </p>
              )}
            </div>

            {/* Nilai Maksimal */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Nilai Maksimal
              </label>
              <input
                type="number"
                name="maxScore"
                value={formData.maxScore}
                onChange={handleInputChange}
                min="1"
                max="1000"
                step="1"
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.maxScore ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
              {errors.maxScore && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {errors.maxScore}
                </p>
              )}
            </div>
          </div>

          {/* Preview Persentase */}
          {formData.score > 0 && formData.maxScore > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span style={{ color: '#374151' }}>Persentase:</span>
                <span 
                  className="font-bold text-lg"
                  style={{ color: getGradeColor(getPercentage(formData.score, formData.maxScore)) }}
                >
                  {getPercentage(formData.score, formData.maxScore)}%
                </span>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={closeModal}>
              Batal
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting 
                ? 'Menyimpan...' 
                : editingGrade 
                  ? 'Update' 
                  : 'Simpan'
              }
            </Button>
          </div>
        </form>
      </Modal>

      {/* Modal untuk Input Nilai Sama Semua */}
      <Modal isOpen={isBulkModalOpen} onClose={() => setIsBulkModalOpen(false)} title="Berikan Nilai Sama untuk Semua Siswa">
        <form onSubmit={onBulkSubmit} className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm" style={{ color: '#1d4ed8' }}>
              Fitur ini akan memberikan nilai yang sama untuk tugas tertentu kepada semua {students.length} siswa di kelas Anda.
            </p>
          </div>

          {/* Mata Pelajaran */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
              Mata Pelajaran
            </label>
            <select
              name="subjectId"
              value={bulkFormData.subjectId}
              onChange={handleBulkInputChange}
              className={`
                w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${bulkErrors.subjectId ? 'border-red-500' : 'border-gray-300'}
                text-gray-900 bg-white
              `}
              style={{ color: '#111827', backgroundColor: '#ffffff' }}
            >
              <option value="">Pilih Mata Pelajaran</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id} style={{ color: '#111827' }}>
                  {subject.name}
                </option>
              ))}
            </select>
            {bulkErrors.subjectId && (
              <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                {bulkErrors.subjectId}
              </p>
            )}
          </div>

          {/* Nama Tugas */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
              Nama Tugas/Ujian
            </label>
            <input
              type="text"
              name="taskName"
              value={bulkFormData.taskName}
              onChange={handleBulkInputChange}
              placeholder="Contoh: Ulangan Harian 1, Tugas Kelompok, UTS"
              className={`
                w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${bulkErrors.taskName ? 'border-red-500' : 'border-gray-300'}
                text-gray-900 placeholder-gray-500 bg-white
              `}
              style={{ color: '#111827', backgroundColor: '#ffffff' }}
            />
            {bulkErrors.taskName && (
              <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                {bulkErrors.taskName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nilai */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Nilai
              </label>
              <input
                type="number"
                name="score"
                value={bulkFormData.score}
                onChange={handleBulkInputChange}
                min="0"
                max={bulkFormData.maxScore}
                step="0.1"
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${bulkErrors.score ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
              {bulkErrors.score && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {bulkErrors.score}
                </p>
              )}
            </div>

            {/* Nilai Maksimal */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Nilai Maksimal
              </label>
              <input
                type="number"
                name="maxScore"
                value={bulkFormData.maxScore}
                onChange={handleBulkInputChange}
                min="1"
                max="1000"
                step="1"
                className={`
                  w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${bulkErrors.maxScore ? 'border-red-500' : 'border-gray-300'}
                  text-gray-900 bg-white
                `}
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
              {bulkErrors.maxScore && (
                <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                  {bulkErrors.maxScore}
                </p>
              )}
            </div>
          </div>

          {/* Preview Persentase */}
          {bulkFormData.score > 0 && bulkFormData.maxScore > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span style={{ color: '#374151' }}>Persentase:</span>
                <span 
                  className="font-bold text-lg"
                  style={{ color: getGradeColor(getPercentage(bulkFormData.score, bulkFormData.maxScore)) }}
                >
                  {getPercentage(bulkFormData.score, bulkFormData.maxScore)}%
                </span>
              </div>
              <div className="mt-2">
                <span className="text-sm" style={{ color: '#374151' }}>
                  Nilai ini akan diberikan kepada {students.length} siswa
                </span>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={() => setIsBulkModalOpen(false)}>
              Batal
            </Button>
            <Button type="submit" disabled={bulkSubmitting}>
              {bulkSubmitting 
                ? 'Menyimpan...' 
                : 'Simpan Nilai untuk Semua Siswa'
              }
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}