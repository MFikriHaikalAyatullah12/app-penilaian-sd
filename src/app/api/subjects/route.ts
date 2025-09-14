import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
import { prisma } from '@/lib/prisma'

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
    
    // Tentukan level kelas untuk mata pelajaran
    const classLevel = assignedClass <= 3 ? 3 : 6

    const subjects = await prisma.subject.findMany({
      where: {
        classLevel: classLevel
      },
      orderBy: {
        name: 'asc'
      }
    })

    return NextResponse.json(subjects)
  } catch (error) {
    console.error('Get subjects error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}