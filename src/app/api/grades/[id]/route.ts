import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

// PUT - Update nilai
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { taskName, score, maxScore = 100 } = body
    const gradeId = params.id

    if (!taskName || score === undefined) {
      return NextResponse.json(
        { error: 'Nama tugas dan nilai harus diisi' },
        { status: 400 }
      )
    }

    if (score < 0 || score > maxScore) {
      return NextResponse.json(
        { error: `Nilai harus antara 0-${maxScore}` },
        { status: 400 }
      )
    }

    // Cek apakah nilai milik guru yang login
    const existingGrade = await prisma.grade.findFirst({
      where: {
        id: gradeId,
        teacherId: session.user.id
      }
    })

    if (!existingGrade) {
      return NextResponse.json(
        { error: 'Nilai tidak ditemukan' },
        { status: 404 }
      )
    }

    const grade = await prisma.grade.update({
      where: { id: gradeId },
      data: {
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
      { message: 'Nilai berhasil diupdate', grade }
    )
  } catch (error) {
    console.error('Update grade error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

// DELETE - Hapus nilai
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const gradeId = params.id

    // Cek apakah nilai milik guru yang login
    const existingGrade = await prisma.grade.findFirst({
      where: {
        id: gradeId,
        teacherId: session.user.id
      }
    })

    if (!existingGrade) {
      return NextResponse.json(
        { error: 'Nilai tidak ditemukan' },
        { status: 404 }
      )
    }

    await prisma.grade.delete({
      where: { id: gradeId }
    })

    return NextResponse.json(
      { message: 'Nilai berhasil dihapus' }
    )
  } catch (error) {
    console.error('Delete grade error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}