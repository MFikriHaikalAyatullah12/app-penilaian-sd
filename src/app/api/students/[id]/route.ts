import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { prisma } from '@/lib/prisma'

// PUT - Update siswa
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
    const { name, nisn } = body
    const studentId = params.id

    if (!name) {
      return NextResponse.json(
        { error: 'Nama siswa harus diisi' },
        { status: 400 }
      )
    }

    // Cek apakah siswa milik guru yang login
    const existingStudent = await prisma.student.findFirst({
      where: {
        id: studentId,
        teacherId: session.user.id
      }
    })

    if (!existingStudent) {
      return NextResponse.json(
        { error: 'Siswa tidak ditemukan' },
        { status: 404 }
      )
    }

    // Cek apakah NISN sudah digunakan oleh siswa lain (jika diisi)
    if (nisn) {
      const duplicateStudent = await prisma.student.findFirst({
        where: { 
          nisn,
          id: { not: studentId }
        }
      })

      if (duplicateStudent) {
        return NextResponse.json(
          { error: 'NISN sudah digunakan' },
          { status: 400 }
        )
      }
    }

    const student = await prisma.student.update({
      where: { id: studentId },
      data: {
        name,
        nisn: nisn || null
      }
    })

    return NextResponse.json(
      { message: 'Siswa berhasil diupdate', student }
    )
  } catch (error) {
    console.error('Update student error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

// DELETE - Hapus siswa
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

    const studentId = params.id

    // Cek apakah siswa milik guru yang login
    const existingStudent = await prisma.student.findFirst({
      where: {
        id: studentId,
        teacherId: session.user.id
      }
    })

    if (!existingStudent) {
      return NextResponse.json(
        { error: 'Siswa tidak ditemukan' },
        { status: 404 }
      )
    }

    // Hapus siswa dan semua nilai terkait
    await prisma.student.delete({
      where: { id: studentId }
    })

    return NextResponse.json(
      { message: 'Siswa berhasil dihapus' }
    )
  } catch (error) {
    console.error('Delete student error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}