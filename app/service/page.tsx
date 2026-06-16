import Bannerbg from "@/components/Banner/Bannerbg";
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

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <section className="relative my-6 sm:my-8 md:my-12">
          <div className="bg-white/90 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-10 lg:p-14 shadow-2xl border border-slate-100 relative overflow-hidden backdrop-blur-3xl">
            <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/10 rounded-full blur-3xl -mr-10 sm:-mr-20 -mt-10 sm:-mt-20 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-purple-500/10 rounded-full blur-3xl -ml-10 sm:-ml-20 -mb-10 sm:-mb-20 opacity-60"></div>

            <div className="relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-black text-slate-900 leading-tight border-l-4 sm:border-l-8 border-blue-600 pl-4 sm:pl-6 md:pl-8 mb-6 sm:mb-8 md:mb-12 tracking-tighter">
                ช่างซ่อมท่อประปา รับซ่อมประปาภายในบ้าน ตรวจหาท่อประปารั่ว
                ซ่อมท่อรั่ว ท่อแตก ช่างท่อน้ำรั่วภายในบ้าน
                <span className="block text-blue-600 mt-2 sm:mt-4 text-sm sm:text-lg md:text-xl lg:text-3xl font-black">ด้วยเครื่องมือและเทคโนโลยีที่ทันสมัย</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-12 bg-slate-50 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-slate-100">
                <div>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-red-100 flex items-center justify-center text-red-600 font-black text-base sm:text-lg md:text-xl shadow-lg border border-red-200 flex-shrink-0">1</div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-slate-800 tracking-tight">
                      สาเหตุท่อน้ำรั่วซึมใต้พื้นดิน
                    </h3>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base md:text-lg pl-6 sm:pl-8 md:pl-12 pr-2 sm:pr-4 relative font-bold">
                    <li className="relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 sm:before:w-2 sm:before:h-2 before:bg-red-400 before:rounded-full before:-left-4 sm:before:-left-6 before:top-2">
                      เกิดจากการทรุดตัวของตัวบ้านไปกดทับเส้นท่อทำให้ท่อที่อยู่ใต้พื้นดินเกิดชำรุดและแตกหัก
                    </li>
                    <li className="relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 sm:before:w-2 sm:before:h-2 before:bg-red-400 before:rounded-full before:-left-4 sm:before:-left-6 before:top-2">
                      เกิดจากใต้พื้นบ้านอาจมีโพรงหรือช่องที่หนูสามารถมุดเข้าไปกัดแทะท่อทำให้ท่อรั่วซึมได้
                    </li>
                    <li className="relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 sm:before:w-2 sm:before:h-2 before:bg-red-400 before:rounded-full before:-left-4 sm:before:-left-6 before:top-2">
                      เกิดจากรากไม้ที่อยู่ใต้พื้นดินไปกดทับหรือเบียดท่อทำให้ท่อเกิดการชำรุดและรั่วซึมได้
                    </li>
                    <li className="relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 sm:before:w-2 sm:before:h-2 before:bg-red-400 before:rounded-full before:-left-4 sm:before:-left-6 before:top-2">
                      เกิดจากอายุการใช้งานของท่อน้ำประปาที่ใช้งานมานานทำให้ท่อเสื่อมสภาพ
                    </li>
                    <li className="relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 sm:before:w-2 sm:before:h-2 before:bg-red-400 before:rounded-full before:-left-4 sm:before:-left-6 before:top-2">
                      เกิดจากการเสื่อมสภาพของกาวผสานเมื่อกาวหมดอายุทำให้ระหว่างท่อกับข้อต่อหลุดออกจากกัน
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 font-black text-base sm:text-lg md:text-xl shadow-lg border border-blue-200 flex-shrink-0">2</div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-slate-800 tracking-tight">
                      วิธีสังเกตุด้วยตนเอง
                    </h3>
                  </div>

                  <div className="space-y-4 sm:space-y-6 text-slate-600 text-sm sm:text-base md:text-lg pl-2 sm:pl-6 md:pl-12">
                    <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden group hover:border-blue-500 transition-all duration-500">
                      <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-blue-500"></div>
                      <p className="font-black text-slate-900 mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl tracking-tight">กรณีที่มีปั๊มน้ำ</p>
                      <p className="font-bold opacity-90 leading-relaxed text-slate-600 text-sm sm:text-base">
                        ให้สังเกตุดูว่า เวลาที่ไม่มีใครใช้น้ำ แต่ปั๊มน้ำยังคงทำงานเป็นระยะๆ
                        ให้สันนิษฐานก่อนเลยว่าอาจจะมีท่อน้ำรั่วใต้พื้นบ้านแน่นอน
                      </p>
                    </div>
                    <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden group hover:border-blue-500 transition-all duration-500">
                      <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-blue-400"></div>
                      <p className="font-black text-slate-900 mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl tracking-tight">กรณีดึงน้ำโดยตรง</p>
                      <p className="font-bold opacity-90 leading-relaxed text-slate-600 text-sm sm:text-base">
                        หากค่าน้ำสูงผิดปกติ ให้ลองหยุดการใช้น้ำทั้งหมด
                        และไปดูที่มิเตอร์น้ำ หากหยุดการใช้น้ำแล้ว แต่มิเตอร์น้ำยังหมุน
                        ให้สันนิษฐานก่อนเลยว่า อาจจะมีท่อน้ำประปารั่ว
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 md:mt-12 text-center bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 rounded-xl sm:rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-blue-900/40 group">
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
                <h3 className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-white leading-tight mb-3 sm:mb-4 tracking-tighter">
                  ทุกปัญหาเรื่องประปา เราช่วยคุณได้
                </h3>
                <p className="relative z-10 text-blue-100 mt-1 sm:mt-2 text-sm sm:text-base md:text-xl lg:text-2xl font-bold opacity-90 max-w-2xl mx-auto">
                  ช่างมิลการประปา บริการระดับมืออาชีพ รู้จริง ชำนาญจริง ซ่อมตรงจุดจบทุกงาน 💦
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 relative z-10 w-full max-w-4xl mx-auto">
              <ContactedBox />
            </div>
          </div>
        </section>

        <section className="my-12 sm:my-16 md:my-24 lg:my-32">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 inline-block relative tracking-tighter">
              การบริการของเรา
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 sm:h-1.5 bg-blue-600 rounded-full"></div>
            </h2>
          </div>
          <div className="bg-transparent">
            <CardHoverEffect />
          </div>
        </section>
      </div>

      <section className="bg-white py-12 sm:py-16 md:py-24 border-t border-slate-200 shadow-inner">
        <PerformanceShow mainmsg="ดูผลงานทั้งหมดของเรา" />
      </section>

      <div className="py-12 sm:py-16 md:py-24 bg-slate-50 text-center border-t border-slate-200">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-black text-slate-800 mb-6 sm:mb-8 md:mb-10 tracking-tighter px-4">สอบถามข้อมูลเพิ่มเติม ตลอด 24 ชม.</h3>
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <ContactedBox />
        </div>
      </div>
    </div>
  );
};
export default page;
