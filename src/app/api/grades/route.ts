import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

// GET - Ambil semua nilai
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const studentId = searchParams.get('studentId')
    const subjectId = searchParams.get('subjectId')

    const whereClause: any = {
      teacherId: session.user.id
    }

    if (studentId) whereClause.studentId = studentId
    if (subjectId) whereClause.subjectId = subjectId

    const grades = await prisma.grade.findMany({
      where: whereClause,
      include: {
        student: {
          select: {
            id: true,
            name: true,
            nisn: true
          }
        },
        subject: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: [
        { date: 'desc' },
        { student: { name: 'asc' } }
      ]
    })

    return NextResponse.json(grades)
  } catch (error) {
    console.error('Get grades error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

// POST - Tambah nilai baru
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { studentId, subjectId, taskName, score, maxScore = 100 } = body

    if (!studentId || !subjectId || !taskName || score === undefined) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    if (score < 0 || score > maxScore) {
      return NextResponse.json(
        { error: `Nilai harus antara 0-${maxScore}` },
        { status: 400 }
      )
    }

    // Verifikasi siswa milik guru yang login
    const student = await prisma.student.findFirst({
      where: {
        id: studentId,
        teacherId: session.user.id
      }
    })

    if (!student) {
      return NextResponse.json(
        { error: 'Siswa tidak ditemukan' },
        { status: 404 }
      )
    }

    // Verifikasi mata pelajaran sesuai dengan tingkat kelas
    const subject = await prisma.subject.findFirst({
      where: {
        id: subjectId,
        classLevel: student.class <= 3 ? 3 : 6
      }
    })

    if (!subject) {
      return NextResponse.json(
        { error: 'Mata pelajaran tidak sesuai dengan tingkat kelas' },
        { status: 400 }
      )
    }

    const grade = await prisma.grade.create({
      data: {
        studentId,
        subjectId,
        teacherId: session.user.id,
        taskName,
        score: parseFloat(score),
        maxScore: parseFloat(maxScore)
      },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            nisn: true
          }
        },
        subject: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    return NextResponse.json(
      { message: 'Nilai berhasil ditambahkan', grade },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create grade error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}