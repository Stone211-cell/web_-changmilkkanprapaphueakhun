import type { Metadata } from 'next';
import BlogLayout from '../content';
import { blogPosts } from '@/lib/blog-data';

const post = blogPosts[2];

export const metadata: Metadata = {
    title: `${post.title} | ช่างมิลการประปา`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [{ url: post.image }],
    }
};

export default function Blog3Page() {
    return (
        <BlogLayout post={post}>
            <h2>วางระบบประปาใหม่: เดินท่อลอย vs กรีดฝังผนัง</h2>
            <p>
                เมื่อบ้านเริ่มมีอายุมากขึ้น ท่อประปาที่เคยใช้งานได้ดีก็อาจจะเริ่มเสื่อมสภาพ แตก หรือรั่วซึมได้
                การเดินระบบประปาใหม่จึงเป็นทางออกที่ดีที่สุด แต่คำถามที่มักพบบ่อยคือ <strong>ควรเลือกเดินท่อแบบไหนดี?</strong>
            </p>

            <h3>1. การเดินท่อประปาแบบลอย (Surface-mounted)</h3>
            <p>
                คือการเดินท่อเกาะไปตามผนังหรือเพดาน โดยไม่ได้ฝังเข้าไปในเนื้อปูน
            </p>
            <ul>
                <li><strong>ข้อดี:</strong> ติดตั้งง่าย รวดเร็ว ราคาถูกกว่า และที่สำคัญคือ <strong>ตรวจสอบและซ่อมแซมได้ง่ายมาก</strong> หากเกิดการรั่วซึมในอนาคต</li>
                <li><strong>ข้อเสีย:</strong> อาจดูไม่สวยงามเกะกะสายตา หากไม่ได้ออกแบบให้เป็นสไตล์ลอฟท์ (Loft) หรือทาสีทับให้กลืนไปกับผนัง</li>
            </ul>

            <h3>2. การเดินท่อประปาแบบฝัง (Concealed)</h3>
            <p>
                คือการสกัดผนังหรือพื้น เพื่อฝังท่อประปาเข้าไป แล้วฉาบปูนปิดทับให้เรียบเนียน
            </p>
            <ul>
                <li><strong>ข้อดี:</strong> สวยงาม เรียบร้อย ไม่เห็นท่อเกะกะสายตา ทำให้บ้านดูสะอาดตา</li>
                <li><strong>ข้อเสีย:</strong> ค่าใช้จ่ายสูงกว่า ติดตั้งยุ่งยาก และหากเกิดปัญหาน้ำรั่วซึมในอนาคต <strong>จะต้องทุบผนังเพื่อซ่อมแซม</strong> ซึ่งสร้างความเสียหายหนักกว่ามาก</li>
            </ul>

            <h3>สรุปแบบไหนดีกว่ากัน?</h3>
            <p>
                หากเน้นความสวยงามระดับพรีเมียม การฝังผนังคือคำตอบ แต่หากเน้นการใช้งานระยะยาว การบำรุงรักษาที่ง่าย และประหยัดงบประมาณ การเดินท่อลอยถือเป็นทางเลือกที่คุ้มค่ากว่า และในยุคปัจจุบัน ช่างประปาสามารถเดินท่อลอยให้ดูเป็นระเบียบและสวยงามได้เช่นกัน
            </p>

            <hr className="my-8 border-slate-200" />

            <div className="bg-blue-50/80 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm mt-12">
                <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">✓</span>
                    ข้อมูลเพิ่มเติม / ติดต่อสอบถาม
                </h3>
                <p className="text-slate-700 mb-6 text-base">
                    หากคุณกำลังมีแพลนจะรีโนเวทบ้าน หรือต้องการเดินระบบประปาใหม่ ช่างมิลยินดีให้คำปรึกษาและประเมินราคาฟรี พร้อมรับประกันผลงาน!
                    สามารถดูรายละเอียดบริการอื่นๆ ของเรา หรือติดต่อทีมงานได้ทันทีผ่านเว็บไซต์หลักของเราด้านล่างนี้
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://www.xn--12cli4ea7apbo8ioaeft01a.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md shadow-blue-600/20 transform hover:-translate-y-0.5 no-underline"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        เว็บไซต์หลัก: ช่างมิลการประปา.com
                    </a>
                </div>
            </div>
        </BlogLayout>
    );
}
