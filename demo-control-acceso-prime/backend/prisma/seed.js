const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.accessLog.deleteMany();
  await prisma.visitor.deleteMany();

  const alice = await prisma.visitor.create({ data: { name: 'Alice Pérez', idCard: 'CARD1234', bioUid: 'BIO123' } });
  const bob = await prisma.visitor.create({ data: { name: 'Bob Gómez', idCard: 'CARD5678', bioUid: 'BIO999' } });

  await prisma.accessLog.createMany({ data: [
    { visitorId: alice.id, method: 'card', methodUid: 'CARD1234', allowed: true },
    { visitorId: bob.id, method: 'bio', methodUid: 'BIO999', allowed: true }
  ]});

  console.log('Seed completed');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
