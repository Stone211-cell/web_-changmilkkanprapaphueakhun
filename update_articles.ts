import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const updates = [
  {
    slug: '5-ways-to-check-water-leaks-at-home',
    image: '/images/blog/water_leak_checking.png',
  },
  {
    slug: 'why-water-pump-not-stopping-and-how-to-fix',
    image: '/images/blog/water_pump_working.png',
  },
  {
    slug: 'best-water-pipes-for-your-home',
    image: '/images/blog/water_pipes_comparison.png',
  },
  {
    slug: 'why-water-bill-is-so-high',
    image: '/images/blog/high_water_bill.png',
  },
  {
    slug: 'how-to-fix-clogged-drains-at-home',
    image: '/images/blog/clogged_drain_fix.png',
  }
]

async function main() {
  console.log('Start updating articles...')
  
  for (const update of updates) {
    const article = await prisma.article.findUnique({
      where: { slug: update.slug }
    })
    
    if (article) {
      const creditText = '\n\n<p style="color: red; font-weight: bold; margin-top: 2rem;">ภาพประกอบบทความสร้างขึ้นด้วย AI</p>';
      let newContent = article.content;
      if (!newContent.includes('ภาพประกอบบทความสร้างขึ้นด้วย AI')) {
        newContent += creditText;
      }

      await prisma.article.update({
        where: { slug: update.slug },
        data: {
          image: update.image,
          content: newContent
        }
      })
      console.log('Updated article:', update.slug)
    } else {
      console.log('Article not found:', update.slug)
    }
  }
  
  console.log('Updating finished!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
