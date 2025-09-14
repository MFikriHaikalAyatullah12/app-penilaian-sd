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
  class: number
  createdAt: string
}

interface StudentForm {
  name: string
  nisn: string
}

export default function StudentsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingStudent, setEditingStudent] = useState<Student | null>(null)
  const [submitting, setSubmitting] = useState(false)

  // Form state dengan controlled components
  const [formData, setFormData] = useState<StudentForm>({
    name: '',
    nisn: ''
  })
  const [errors, setErrors] = useState<Partial<StudentForm>>({})

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
      return
    }

    fetchStudents()
  }, [session, status, router])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/students')
      
      if (response.ok) {
        const data = await response.json()
        setStudents(data)
      } else {
        toast.error('Gagal memuat data siswa')
      }
    } catch (error) {
      console.error('Error fetching students:', error)
      toast.error('Terjadi kesalahan saat memuat data')
    } finally {
      setLoading(false)
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<StudentForm> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nama siswa harus diisi'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nama minimal 2 karakter'
    }

    // NISN opsional, tapi jika diisi harus numerik dan titik saja
    if (formData.nisn && formData.nisn.trim()) {
      if (!/^[\d.]+$/.test(formData.nisn.trim())) {
        newErrors.nisn = 'NISN hanya boleh berisi angka dan titik'
      } else if (formData.nisn.trim().length < 3) {
        newErrors.nisn = 'NISN minimal 3 karakter'
      }
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
    if (errors[name as keyof StudentForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const openModal = (student?: Student) => {
    if (student) {
      setEditingStudent(student)
      setFormData({
        name: student.name,
        nisn: student.nisn || ''
      })
    } else {
      setEditingStudent(null)
      setFormData({ name: '', nisn: '' })
    }
    setErrors({})
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingStudent(null)
    setFormData({ name: '', nisn: '' })
    setErrors({})
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Student form submitted with data:', formData)
    
    if (!validateForm()) {
      toast.error('Mohon perbaiki kesalahan pada form')
      return
    }

    setSubmitting(true)
    
    try {
      const url = editingStudent ? `/api/students/${editingStudent.id}` : '/api/students'
      const method = editingStudent ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          nisn: formData.nisn.trim() || null
        }),
      })

      const result = await response.json()
      console.log('Student API response:', result)

      if (response.ok) {
        toast.success(
          editingStudent ? 'Siswa berhasil diupdate!' : 'Siswa berhasil ditambahkan!'
        )
        fetchStudents()
        closeModal()
      } else {
        toast.error(result.error || 'Terjadi kesalahan')
      }
    } catch (error) {
      console.error('Error saving student:', error)
      toast.error('Terjadi kesalahan saat menyimpan data')
    } finally {
      setSubmitting(false)
    }
  }

  const deleteStudent = async (student: Student) => {
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus siswa "${student.name}"? Semua nilai siswa ini akan ikut terhapus.`
    )
    
    if (!confirmDelete) return

    try {
      const response = await fetch(`/api/students/${student.id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        toast.success('Siswa berhasil dihapus!')
        fetchStudents()
      } else {
        const result = await response.json()
        toast.error(result.error || 'Gagal menghapus siswa')
      }
    } catch (error) {
      console.error('Error deleting student:', error)
      toast.error('Terjadi kesalahan saat menghapus siswa')
    }
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
              Data Siswa Kelas {session.user?.assignedClass}
            </h1>
            <p style={{ color: '#6b7280' }}>
              Total: {students.length} siswa
            </p>
          </div>
          <Button onClick={() => openModal()}>
            Tambah Siswa
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4" style={{ color: '#6b7280' }}>Memuat data siswa...</p>
          </div>
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      NO
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      NAMA SISWA
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      NISN
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider" style={{ color: '#374151' }}>
                      AKSI
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center">
                        <p style={{ color: '#6b7280' }}>Belum ada siswa yang terdaftar</p>
                        <Button 
                          onClick={() => openModal()} 
                          className="mt-4"
                          variant="outline"
                        >
                          Tambah Siswa Pertama
                        </Button>
                      </td>
                    </tr>
                  ) : (
                    students.map((student, index) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#374151' }}>
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium" style={{ color: '#111827' }}>
                            {student.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#6b7280' }}>
                          {student.nisn || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openModal(student)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => deleteStudent(student)}
                            >
                              Hapus
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={editingStudent ? "Edit Siswa" : "Tambah Siswa Baru"}>
        <form onSubmit={onSubmit} className="space-y-6">

          {/* Nama Siswa */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
              Nama Siswa
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masukkan nama siswa"
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

          {/* NISN */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
              NISN (Opsional)
            </label>
            <input
              type="text"
              name="nisn"
              value={formData.nisn}
              onChange={handleInputChange}
              placeholder="Nomor Induk Siswa Nasional (boleh dikosongkan)"
              className={`
                w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.nisn ? 'border-red-500' : 'border-gray-300'}
                text-gray-900 placeholder-gray-500 bg-white
              `}
              style={{ color: '#111827', backgroundColor: '#ffffff' }}
            />
            {errors.nisn && (
              <p className="mt-1 text-sm text-red-600" style={{ color: '#dc2626' }}>
                {errors.nisn}
              </p>
            )}
            <p className="mt-1 text-xs" style={{ color: '#6b7280' }}>
              Nomor Induk Siswa Nasional (boleh dikosongkan)
            </p>
          </div>

          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={closeModal}>
              Batal
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting 
                ? 'Menyimpan...' 
                : editingStudent 
                  ? 'Update' 
                  : 'Tambah'
              }
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}