import { Bannerbg } from "@/components/Banner/BannerImg";
import { CardHoverEffect } from "@/components/Card/CardHoverEffect";
import ContactedBox from "@/components/Contacted/ContactedBox";
import PerformanceShow from "@/components/Performance/PerformanceShow";

const page = () => {
  const img = "/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg";
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <div>
        <Bannerbg
          img={img}
          text="บริการของเรา"
          des="บริการตรวจสอบหาจุดท่อรั่วในบ้าน อาคาร แก้ไขปัญหาค่าน้ำขึ้นสูง ปั้มน้ำทำงานตลอด มิเตอร์หมุนตลอด โดยไม่มีการใช้น้ำ ย้าย-ติดตั้งสุขภัณฑ์ เช่น อ่างล้างหน้า ฝักบัว ก๊อก ชักโครก และแก้ไขระบบประปาน้ำดี/น้ำทิ้ง เดินท่อประปาใหม่ เดินท่อประปาระบบกรีดฝัง-เดินท่อประปาลอยแก้ปัญหาประปารั่วในบ้านระยะยาว"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative my-12">
          <div className="bg-white/90 rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-slate-100 relative overflow-hidden backdrop-blur-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-20 -mb-20 opacity-60"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-slate-900 leading-tight border-l-8 border-blue-600 pl-8 mb-12 tracking-tighter">
                ช่างซ่อมท่อประปา รับซ่อมประปาภายในบ้าน ตรวจหาท่อประปารั่ว
                ซ่อมท่อรั่ว ท่อแตก ช่างท่อน้ำรั่วภายในบ้าน
                <span className="block text-blue-600 mt-4 text-xl md:text-3xl font-black">ด้วยเครื่องมือและเทคโนโลยีที่ทันสมัย</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-10 mt-12 bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 font-black text-xl shadow-lg border border-red-200">1</div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                      สาเหตุท่อน้ำรั่วซึมใต้พื้นดิน
                    </h3>
                  </div>

                  <ul className="space-y-4 text-slate-600 text-base md:text-lg pl-12 pr-4 relative font-bold">
                    <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-red-400 before:rounded-full before:-left-6 before:top-2">
                      เกิดจากการทรุดตัวของตัวบ้านไปกดทับเส้นท่อทำให้ท่อที่อยู่ใต้พื้นดินเกิดชำรุดและแตกหัก
                    </li>
                    <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-red-400 before:rounded-full before:-left-6 before:top-2">
                      เกิดจากใต้พื้นบ้านอาจมีโพรงหรือช่องที่หนูสามารถมุดเข้าไปกัดแทะท่อทำให้ท่อรั่วซึมได้
                    </li>
                    <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-red-400 before:rounded-full before:-left-6 before:top-2">
                      เกิดจากรากไม้ที่อยู่ใต้พื้นดินไปกดทับหรือเบียดท่อทำให้ท่อเกิดการชำรุดและรั่วซึมได้
                    </li>
                    <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-red-400 before:rounded-full before:-left-6 before:top-2">
                      เกิดจากอายุการใช้งานของท่อน้ำประปาที่ใช้งานมานานทำให้ท่อเสื่อมสภาพ
                    </li>
                    <li className="relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-red-400 before:rounded-full before:-left-6 before:top-2">
                      เกิดจากการเสื่อมสภาพของกาวผสานเมื่อกาวหมดอายุทำให้ระหว่างท่อกับข้อต่อหลุดออกจากกัน
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xl shadow-lg border border-blue-200">2</div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                      วิธีสังเกตุด้วยตนเอง
                    </h3>
                  </div>

                  <div className="space-y-6 text-slate-600 text-base md:text-lg pl-12">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden group hover:border-blue-500 transition-all duration-500">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
                      <p className="font-black text-slate-900 mb-2 text-xl tracking-tight">กรณีที่มีปั๊มน้ำ</p>
                      <p className="font-bold opacity-90 leading-relaxed text-slate-600">
                        ให้สังเกตุดูว่า เวลาที่ไม่มีใครใช้น้ำ แต่ปั๊มน้ำยังคงทำงานเป็นระยะๆ
                        ให้สันนิษฐานก่อนเลยว่าอาจจะมีท่อน้ำรั่วใต้พื้นบ้านแน่นอน
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden group hover:border-blue-500 transition-all duration-500">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-400"></div>
                      <p className="font-black text-slate-900 mb-2 text-xl tracking-tight">กรณีดึงน้ำโดยตรง</p>
                      <p className="font-bold opacity-90 leading-relaxed text-slate-600">
                        หากค่าน้ำสูงผิดปกติ ให้ลองหยุดการใช้น้ำทั้งหมด
                        และไปดูที่มิเตอร์น้ำ หากหยุดการใช้น้ำแล้ว แต่มิเตอร์น้ำยังหมุน
                        ให้สันนิษฐานก่อนเลยว่า อาจจะมีท่อน้ำประปารั่ว
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 rounded-[2rem] p-10 relative overflow-hidden shadow-2xl shadow-blue-900/40 group">
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
                <h3 className="relative z-10 text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tighter">
                  ทุกปัญหาเรื่องประปา เราช่วยคุณได้
                </h3>
                <p className="relative z-10 text-blue-100 mt-2 text-xl md:text-2xl font-bold opacity-90 max-w-2xl mx-auto">
                  ช่างมิลการประปา บริการระดับมืออาชีพ รู้จริง ชำนาญจริง ซ่อมตรงจุดจบทุกงาน 💦
                </p>
              </div>
            </div>

            <div className="mt-12 relative z-10 w-full max-w-4xl mx-auto">
              <ContactedBox />
            </div>
          </div>
        </section>

        <section className="my-24 md:my-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 inline-block relative tracking-tighter">
              การบริการของเรา
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-blue-600 rounded-full"></div>
            </h2>
          </div>
          <div className="bg-transparent">
            <CardHoverEffect />
          </div>
        </section>
      </div>

      <section className="bg-white py-24 border-t border-slate-200 shadow-inner">
        <PerformanceShow mainmsg="ดูผลงานทั้งหมดของเรา" />
      </section>

      <div className="py-24 bg-slate-50 text-center border-t border-slate-200">
        <h3 className="text-2xl md:text-4xl font-black text-slate-800 mb-10 tracking-tighter">สอบถามข้อมูลเพิ่มเติม ตลอด 24 ชม.</h3>
        <div className="max-w-4xl mx-auto px-4">
          <ContactedBox />
        </div>
      </div>
    </div>
  );
};
export default page;
