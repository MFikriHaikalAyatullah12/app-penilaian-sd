import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Memulai proses penghapusan data...')

  try {
    // Hapus semua data dalam urutan yang benar (karena foreign key constraints)
    await prisma.grade.deleteMany({})
    console.log('✓ Semua nilai telah dihapus')

    await prisma.student.deleteMany({})
    console.log('✓ Semua data siswa telah dihapus')

    await prisma.user.deleteMany({})
    console.log('✓ Semua akun pengguna telah dihapus')

    // Subject tidak dihapus karena bersifat master data
    
    console.log('\n✅ Semua data akun berhasil dihapus!')
    console.log('Database sekarang sudah kosong dan siap untuk digunakan.')
  } catch (error) {
    console.error('❌ Error saat menghapus data:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
