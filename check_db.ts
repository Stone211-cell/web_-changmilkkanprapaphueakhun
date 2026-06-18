import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const articles = await prisma.article.findMany({
    select: { slug: true, image: true, title: true }
  })
  console.log('--- Articles in DB ---')
  console.log(articles)
  
  const portfolios = await prisma.portfolio.findMany({
    select: { id: true, title: true, mediaType: true, videoUrl: true, image: true }
  })
  console.log('--- Portfolios in DB ---')
  console.log(portfolios)
}

main().catch(console.error).finally(() => prisma.$disconnect())
