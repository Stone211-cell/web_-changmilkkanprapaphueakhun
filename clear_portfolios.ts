import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.portfolio.deleteMany({});
  console.log(`Deleted ${result.count} portfolios.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
