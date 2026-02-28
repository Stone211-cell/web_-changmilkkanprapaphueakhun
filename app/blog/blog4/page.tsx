import type { Metadata } from 'next';
import BlogLayout from '../content';
import { blogPosts } from '@/lib/blog-data';

const post = blogPosts[3];

export const metadata: Metadata = {
    title: `${post.title} | ช่างมิลการประปา`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [{ url: post.image }],
    }
};

export default function Blog4Page() {
    return (
        <BlogLayout post={post}>
            <h2>มาตรฐานงานประปาที่คุณวางใจได้ 100%</h2>
            <p>
                ในยุคที่ใครๆ ก็เป็นช่างได้ แต่การหา <strong>"ช่างประปาตัวจริง"</strong> ที่ทำงานจบ ไม่ทิ้งงาน และรับประกันผลงานนั้นไม่ใช่เรื่องง่าย นี่คือเบื้องหลังว่าทำไมลูกค้ากว่าพันหลังคาเรือนถึงเลือกใช้บริการของ <strong>ช่างมิลการประปา</strong>
            </p>

            <h3>1. ใช้เครื่องมือทันสมัย ตรวจหาจุดรั่วไหลแม่นยำ</h3>
            <p>
                เราบอกลาการคาดเดาและทุบสุ่มทำลายบ้าน ด้วยเทคโนโลยีเครื่องฟังสภาพท่อน้ำรั่วซึมใต้พื้นดิน (Acoustic Leak Detector) ที่นำเข้าจากต่างประเทศ ช่วยให้ชี้จุดที่ท่อแตกได้อย่างแม่นยำ ลดความเสียหายที่จะเกิดขึ้นกับตัวบ้านของคุณได้อย่างมหาศาล
            </p>

            <h3>2. ทีมช่างมืออาชีพ ประสบการณ์สูง</h3>
            <p>
                ทีมงานของเราผ่านการฝึกอบรมและมีประสบการณ์แก้ไขสารพัดปัญหางานประปามาอย่างโชกโชน ไม่ว่าจะเป็นระบบท่อน้ำดี ท่อน้ำทิ้ง ปั๊มน้ำ หรือการวางระบบประปาทั้งหลัง เราแก้ปัญหาที่ต้นเหตุ ไม่ได้แก้แค่ปลายเหตุ
            </p>

            <h3>3. ราคามาตรฐาน โปร่งใส</h3>
            <p>
                ก่อนเริ่มงานทุกครั้ง เราจะทำการประเมินหน้างานและแจ้งราคาให้ลูกค้าทราบอย่างชัดเจน ป้องกันปัญหาบานปลาย ลูกค้าสามารถตัดสินใจได้ก่อน โดยไม่มีค่าใช้จ่ายแอบแฝง
            </p>

            <h3>4. การรับประกันผลงานหลังการซ่อม</h3>
            <p>
                เพื่อความอุ่นใจอย่างสูงสุด งานซ่อมแซมและติดตั้งทุกสเกลของเรา มาพร้อมกับการรับประกันผลงาน หากเกิดปัญหาซ้ำในจุดเดิมภายในระยะเวลาที่กำหนด เรายินดีเข้าไปดูแลให้ทันที
            </p>

            <hr className="my-8 border-slate-200" />

            <div className="bg-blue-50/80 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm mt-12">
                <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">✓</span>
                    ข้อมูลเพิ่มเติม / ติดต่อสอบถาม
                </h3>
                <p className="text-slate-700 mb-6 text-base">
                    ต้องการเรียกใช้บริการช่างประปามืออาชีพ หรือสอบถามประเมินราคางานซ่อมต่างๆ ติดต่อเราได้ทันทีผ่านเว็บไซต์หลักของเรา
                    ดูผลงาน แบนเนอร์ หรือข้อมูลติดต่อได้ครบจบในที่เดียว!
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
