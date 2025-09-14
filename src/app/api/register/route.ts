import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Register request body:', body)
    const { email, password, name, assignedClass } = body

    // Validasi input
    if (!email || !password || !name || assignedClass === undefined || assignedClass === null) {
      console.log('Validation failed - missing fields:', { email: !!email, password: !!password, name: !!name, assignedClass })
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    // Validasi kelas (1-6)
    const classNum = parseInt(assignedClass.toString())
    if (isNaN(classNum) || classNum < 1 || classNum > 6) {
      console.log('Class validation failed:', assignedClass, classNum)
      return NextResponse.json(
        { error: 'Kelas harus antara 1-6' },
        { status: 400 }
      )
    }

    // Cek apakah email sudah digunakan
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      console.log('Email already exists:', email)
      return NextResponse.json(
        { error: 'Email sudah digunakan' },
        { status: 400 }
      )
    }

    // Cek apakah kelas sudah ada guru yang mengajar
    const existingTeacher = await prisma.user.findFirst({
      where: { assignedClass: classNum }
    })

    if (existingTeacher) {
      console.log('Class already has teacher:', classNum)
      return NextResponse.json(
        { error: `Kelas ${classNum} sudah ada guru yang mengajar` },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Buat user baru
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        assignedClass: classNum
      },
      select: {
        id: true,
        email: true,
        name: true,
        assignedClass: true
      }
    })

    console.log('User created successfully:', user)
    return NextResponse.json(
      { message: 'User berhasil dibuat', user },
      { status: 201 }
    )
  } catch (error) {
    console.error('Register error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}