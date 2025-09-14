import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Hapus semua data terkait user
    await prisma.$transaction(async (tx: any) => {
      // Hapus semua nilai yang dibuat oleh guru
      await tx.grade.deleteMany({
        where: { teacherId: session.user.id }
      })

      // Hapus semua siswa yang diajar oleh guru
      await tx.student.deleteMany({
        where: { teacherId: session.user.id }
      })

      // Hapus user
      await tx.user.delete({
        where: { id: session.user.id }
      })
    })

    return NextResponse.json(
      { message: 'Akun berhasil dihapus' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Delete account error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}