import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { prisma } from '@/lib/prisma'

// GET - Mendapatkan semua data absensi untuk kelas guru yang login
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const subjectId = searchParams.get('subjectId')

    const where: any = {
      teacherId: session.user.id,
      student: {
        class: session.user.assignedClass
      }
    }

    if (date) {
      const startDate = new Date(date)
      startDate.setHours(0, 0, 0, 0)
      const endDate = new Date(date)
      endDate.setHours(23, 59, 59, 999)
      
      where.date = {
        gte: startDate,
        lte: endDate
      }
    }

    if (subjectId) {
      where.subjectId = subjectId
    }

    const attendances = await prisma.attendance.findMany({
      where,
      include: {
        student: true,
        subject: true,
        teacher: {
          select: {
            name: true
          }
        }
      },
      orderBy: {
        date: 'desc'
      }
    })

    return NextResponse.json(attendances)
  } catch (error) {
    console.error('Error fetching attendances:', error)
    return NextResponse.json(
      { error: 'Failed to fetch attendances' },
      { status: 500 }
    )
  }
}

// POST - Membuat data absensi untuk beberapa siswa sekaligus
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { attendances, subjectId, date } = body

    // Validasi input
    if (!attendances || !Array.isArray(attendances) || attendances.length === 0) {
      return NextResponse.json(
        { error: 'Invalid attendance data' },
        { status: 400 }
      )
    }

    if (!subjectId) {
      return NextResponse.json(
        { error: 'Subject ID is required' },
        { status: 400 }
      )
    }

    // Cek apakah sudah ada absensi untuk tanggal dan mata pelajaran yang sama
    const existingAttendances = await prisma.attendance.findMany({
      where: {
        teacherId: session.user.id,
        subjectId: subjectId,
        date: {
          gte: new Date(new Date(date).setHours(0, 0, 0, 0)),
          lte: new Date(new Date(date).setHours(23, 59, 59, 999))
        }
      }
    })

    // Hapus absensi yang sudah ada untuk tanggal dan mata pelajaran ini
    if (existingAttendances.length > 0) {
      await prisma.attendance.deleteMany({
        where: {
          id: {
            in: existingAttendances.map((a: any) => a.id)
          }
        }
      })
    }

    // Buat data absensi baru
    const attendanceData = attendances.map((att: any) => ({
      studentId: att.studentId,
      subjectId: subjectId,
      teacherId: session.user.id,
      status: att.status,
      note: att.note || null,
      date: new Date(date)
    }))

    const createdAttendances = await prisma.attendance.createMany({
      data: attendanceData
    })

    return NextResponse.json({
      message: 'Attendance recorded successfully',
      count: createdAttendances.count
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating attendance:', error)
    return NextResponse.json(
      { error: 'Failed to create attendance' },
      { status: 500 }
    )
  }
}
