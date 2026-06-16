// ไฟล์นี้ใช้สำหรับรัน Next.js บน HostAtom (cPanel Node.js App / Phusion Passenger)
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
// กำหนดพอร์ตที่ cPanel จ่ายมาให้ (ผ่าน Passenger)
const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
