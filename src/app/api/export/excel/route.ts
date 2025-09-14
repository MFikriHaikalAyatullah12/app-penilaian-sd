import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'
import ExcelJS from 'exceljs'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const assignedClass = session.user.assignedClass!
    const classLevel = assignedClass <= 3 ? 3 : 6

    // Ambil semua siswa dan mata pelajaran
    const students = await prisma.student.findMany({
      where: {
        teacherId: session.user.id,
        class: assignedClass
      },
      orderBy: { name: 'asc' }
    })

    const subjects = await prisma.subject.findMany({
      where: { classLevel },
      orderBy: { name: 'asc' }
    })

    // Ambil semua nilai
    const grades = await prisma.grade.findMany({
      where: {
        teacherId: session.user.id,
        student: {
          class: assignedClass
        }
      },
      include: {
        student: true,
        subject: true
      }
    })

    // Buat workbook Excel
    const workbook = new ExcelJS.Workbook()
    workbook.creator = session.user.name || 'Guru'
    workbook.created = new Date()

    // Buat sheet untuk setiap mata pelajaran
    for (const subject of subjects) {
      const worksheet = workbook.addWorksheet(subject.name)

      // Header
      worksheet.columns = [
        { header: 'No', key: 'no', width: 5 },
        { header: 'Nama Siswa', key: 'studentName', width: 25 },
        { header: 'NISN', key: 'nisn', width: 15 },
        { header: 'Nama Tugas', key: 'taskName', width: 20 },
        { header: 'Nilai', key: 'score', width: 10 },
        { header: 'Nilai Maksimal', key: 'maxScore', width: 15 },
        { header: 'Persentase', key: 'percentage', width: 12 },
        { header: 'Tanggal', key: 'date', width: 15 }
      ]

      // Style header
      worksheet.getRow(1).font = { bold: true }
      worksheet.getRow(1).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFE0E0E0' }
      }

      // Data untuk mata pelajaran ini
      const subjectGrades = grades.filter((g: any) => g.subjectId === subject.id)
      
      let rowNumber = 2
      for (let i = 0; i < subjectGrades.length; i++) {
        const grade = subjectGrades[i]
        const percentage = (grade.score / grade.maxScore) * 100

        worksheet.addRow({
          no: i + 1,
          studentName: grade.student.name,
          nisn: grade.student.nisn || '-',
          taskName: grade.taskName,
          score: grade.score,
          maxScore: grade.maxScore,
          percentage: `${percentage.toFixed(1)}%`,
          date: grade.date.toLocaleDateString('id-ID')
        })
        rowNumber++
      }

      // Tambah summary per siswa
      if (students.length > 0) {
        worksheet.addRow([]) // Empty row
        rowNumber++

        // Header summary
        worksheet.addRow(['REKAPITULASI NILAI PER SISWA'])
        worksheet.getRow(rowNumber).font = { bold: true, size: 12 }
        rowNumber++

        worksheet.addRow([
          'No', 'Nama Siswa', 'NISN', 'Jumlah Tugas', 
          'Total Nilai', 'Rata-rata', 'Nilai Tertinggi', 'Nilai Terendah'
        ])
        worksheet.getRow(rowNumber).font = { bold: true }
        worksheet.getRow(rowNumber).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFFCC00' }
        }
        rowNumber++

        for (let i = 0; i < students.length; i++) {
          const student = students[i]
          const studentGrades = subjectGrades.filter((g: any) => g.studentId === student.id)
          
          if (studentGrades.length > 0) {
            const scores = studentGrades.map((g: any) => (g.score / g.maxScore) * 100)
            const totalScore = scores.reduce((sum: number, score: number) => sum + score, 0)
            const average = totalScore / scores.length
            const highest = Math.max(...scores)
            const lowest = Math.min(...scores)

            worksheet.addRow([
              i + 1,
              student.name,
              student.nisn || '-',
              studentGrades.length,
              totalScore.toFixed(1),
              average.toFixed(1),
              highest.toFixed(1),
              lowest.toFixed(1)
            ])
          } else {
            worksheet.addRow([
              i + 1,
              student.name,
              student.nisn || '-',
              0,
              0,
              0,
              0,
              0
            ])
          }
          rowNumber++
        }
      }
    }

    // Generate buffer
    const buffer = await workbook.xlsx.writeBuffer()

    // Set headers untuk download
    const headers = new Headers()
    headers.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    headers.set('Content-Disposition', `attachment; filename="Rekap_Nilai_Kelas_${assignedClass}_${new Date().toISOString().split('T')[0]}.xlsx"`)

    return new Response(buffer, { headers })

  } catch (error) {
    console.error('Export Excel error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}