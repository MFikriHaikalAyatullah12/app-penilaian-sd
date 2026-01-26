import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { prisma } from '@/lib/prisma'
import ExcelJS from 'exceljs'

// GET - Export attendance data to Excel
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const subjectId = searchParams.get('subjectId')

    const where: any = {
      teacherId: session.user.id,
      student: {
        class: session.user.assignedClass
      }
    }

    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate)
      }
    }

    if (subjectId) {
      where.subjectId = subjectId
    }

    // Optimize query - fetch only needed fields
    const attendances = await prisma.attendance.findMany({
      where,
      select: {
        date: true,
        status: true,
        note: true,
        student: {
          select: {
            name: true,
            nisn: true,
            class: true
          }
        },
        subject: {
          select: {
            name: true
          }
        }
      },
      orderBy: [
        { subject: { name: 'asc' } },
        { date: 'asc' },
        { student: { name: 'asc' } }
      ]
    })

    // Group by subject for faster processing
    const groupedBySubject = attendances.reduce((acc: any, attendance: any) => {
      const subjectName = attendance.subject.name
      if (!acc[subjectName]) {
        acc[subjectName] = []
      }
      acc[subjectName].push(attendance)
      return acc
    }, {})

    // Create workbook
    const workbook = new ExcelJS.Workbook()

    // Create a sheet for each subject
    Object.keys(groupedBySubject).forEach((subjectName: string) => {
      const worksheet = workbook.addWorksheet(subjectName)

      // Add header
      worksheet.columns = [
        { header: 'No', key: 'no', width: 5 },
        { header: 'Tanggal', key: 'date', width: 15 },
        { header: 'Nama Siswa', key: 'studentName', width: 25 },
        { header: 'NISN', key: 'nisn', width: 15 },
        { header: 'Kelas', key: 'class', width: 8 },
        { header: 'Status', key: 'status', width: 12 },
        { header: 'Catatan', key: 'note', width: 30 }
      ]

      // Style header
      const headerRow = worksheet.getRow(1)
      headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
      headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4472C4' }
      }
      headerRow.alignment = { vertical: 'middle', horizontal: 'center' }

      // Add data for this subject
      groupedBySubject[subjectName].forEach((attendance: any, index: number) => {
        worksheet.addRow({
          no: index + 1,
          date: new Date(attendance.date).toLocaleDateString('id-ID'),
          studentName: attendance.student.name,
          nisn: attendance.student.nisn || '-',
          class: attendance.student.class,
          status: attendance.status,
          note: attendance.note || '-'
        })
      })
    })

    // Generate Excel file
    const buffer = await workbook.xlsx.writeBuffer()

    const filename = `Absensi_Kelas_${session.user.assignedClass}_${new Date().toISOString().split('T')[0]}.xlsx`

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Error exporting attendance:', error)
    return NextResponse.json(
      { error: 'Failed to export attendance' },
      { status: 500 }
    )
  }
}
