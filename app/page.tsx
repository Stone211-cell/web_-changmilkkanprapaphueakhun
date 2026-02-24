import BannerImg from "@/components/Banner/BannerImg";

import PerformanceShow from "@/components/Performance/PerformanceShow";
import ContactedBox from "@/components/Contacted/ContactedBox";
import CardBox from "@/components/Card/CardBox";
import DetailsProductBox from "@/components/DetailsProduct/DetailsProductBox";
import Mapcontactdetail from "@/components/Mapdetail/Mapcontactdetail";
import DetailsInstallPump from "@/components/DetailsProduct/DetailsInstallPump";
import { Review } from "@/components/DetailsProduct/review";

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <div className="flex flex-col gap-24 md:gap-32 lg:gap-48">
        {/* banner - Full screen cinematic height */}
        <section>
          <BannerImg />
        </section>

        {/* service - Standardized grid items */}
        <section className="container mx-auto px-4">
          <DetailsProductBox />
          <div id="service" className="mt-12">
            <CardBox />
          </div>
        </section>

        {/* โชว์ผลงาน - Professional Gallery */}
        <section>
          <PerformanceShow mainmsg="ดูผลงานทั้งหมดของเรา" />
        </section>

        {/* install pump - Dynamic content section */}
        <section>
          <DetailsInstallPump />
        </section>

        {/* แหล่งติดต่อ - Google Map & Contact Details */}
        <section>
          <Mapcontactdetail />
        </section>

        {/* Review testmonials section */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 mb-16 text-center">
            <div className="inline-block px-4 py-1.5 rounded-xl bg-blue-100/50 text-blue-700 text-xs font-black tracking-widest uppercase mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              เสียงยืนยันจาก <br className="md:hidden" />
              <span className="text-blue-600 italic">ลูกค้าผู้ใช้บริการ</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mt-8 mx-auto rounded-full"></div>
          </div>
          <Review />
        </section>

        {/* Final CTA - Professional call to action */}
        <section className="pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden bg-slate-950 p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] border border-white/5 shadow-2xl">
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-600/20 blur-[120px] rounded-full"></div>

              <div className="relative z-10 text-center flex flex-col items-center gap-12">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                    ต้องการบริการด่วน <br />
                    <span className="text-blue-500 italic">โทรหาช่างมิล 24 ชม.</span>
                  </h2>
                  <p className="text-slate-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto">
                    พร้อมให้คำปรึกษาและประเมินหน้างานฟรี ทั่วกรุงเทพและปริมณฑล
                  </p>
                </div>

                <div className="w-full">
                  <ContactedBox />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default page;
