import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { prisma } from '@/lib/prisma'

// GET - Ambil semua siswa untuk guru yang login
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const students = await prisma.student.findMany({
      where: {
        teacherId: session.user.id,
        class: session.user.assignedClass!
      },
      orderBy: {
        name: 'asc'
      }
    })

    return NextResponse.json(students)
  } catch (error) {
    console.error('Get students error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

// POST - Tambah siswa baru
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
    const { name, nisn } = body

    if (!name) {
      return NextResponse.json(
        { error: 'Nama siswa harus diisi' },
        { status: 400 }
      )
    }

    // Cek apakah NISN sudah digunakan (jika diisi)
    if (nisn) {
      const existingStudent = await prisma.student.findFirst({
        where: { nisn }
      })

      if (existingStudent) {
        return NextResponse.json(
          { error: 'NISN sudah digunakan' },
          { status: 400 }
        )
      }
    }

    const student = await prisma.student.create({
      data: {
        name,
        nisn: nisn || null,
        class: session.user.assignedClass!,
        teacherId: session.user.id
      }
    })

    return NextResponse.json(
      { message: 'Siswa berhasil ditambahkan', student },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create student error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}