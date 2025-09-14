import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/lib/auth'

const prisma = new PrismaClient()

async function main() {
  // Seed mata pelajaran untuk kelas 1-3
  const subjects1to3 = [
    { name: 'Bahasa Indonesia', classLevel: 3 },
    { name: 'Matematika', classLevel: 3 },
    { name: 'IPAS', classLevel: 3 },
    { name: 'Pendidikan Pancasila', classLevel: 3 },
    { name: 'Pendidikan Agama Islam', classLevel: 3 },
    { name: 'PJOK', classLevel: 3 },
    { name: 'Seni', classLevel: 3 },
  ]

  // Seed mata pelajaran untuk kelas 4-6
  const subjects4to6 = [
    { name: 'Bahasa Indonesia', classLevel: 6 },
    { name: 'Bahasa Inggris', classLevel: 6 },
    { name: 'Matematika', classLevel: 6 },
    { name: 'IPAS', classLevel: 6 },
    { name: 'Pendidikan Pancasila', classLevel: 6 },
    { name: 'Pendidikan Agama Islam', classLevel: 6 },
    { name: 'PJOK', classLevel: 6 },
    { name: 'Seni', classLevel: 6 },
  ]

  // Menambahkan mata pelajaran
  for (const subject of [...subjects1to3, ...subjects4to6]) {
    await prisma.subject.upsert({
      where: { 
        id: `${subject.name.toLowerCase().replace(/\s+/g, '-')}-${subject.classLevel}` 
      },
      update: {},
      create: {
        id: `${subject.name.toLowerCase().replace(/\s+/g, '-')}-${subject.classLevel}`,
        name: subject.name,
        classLevel: subject.classLevel,
      },
    })
  }

  // Seed admin user
  const hashedPassword = await hashPassword('123456')
  
  await prisma.user.upsert({
    where: { email: 'devy@gmail.com' },
    update: {},
    create: {
      email: 'devy@gmail.com',
      name: 'DEVY ANGGRAENI, S.Pd',
      password: hashedPassword,
      assignedClass: 6,
    },
  })

  console.log('Seed data berhasil ditambahkan!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })