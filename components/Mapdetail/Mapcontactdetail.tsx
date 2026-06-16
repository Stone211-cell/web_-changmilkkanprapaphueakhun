import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactIcon } from "../Contacted/ContactIcon";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mapcontactdetail = () => {
  return (
    <div className="my-auto">

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3872.8279941722813!2d100.63774117509318!3d13.909227286499265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDU0JzMzLjIiTiAxMDDCsDM4JzI1LjEiRQ!5e0!3m2!1sth!2sth!4v1749535598325!5m2!1sth!2sth"
          width="100%"
          height="350"
          className="sm:h-[400px] md:h-[500px]"
          loading="lazy"
        ></iframe>
      </div>

      <div className="relative overflow-hidden shadow-2xl ring-1 ring-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/banner/map.png"
            alt="พิกัดช่างมิล"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 p-5 sm:p-8 md:p-14 lg:p-20 min-h-[450px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-center max-w-4xl text-white">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] sm:text-[11px] font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase backdrop-blur-md">
              Contact Location
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 md:mb-8 tracking-tighter leading-none">
            ช่างมิล <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic">ประปาเพื่อคุณ</span>
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-slate-300 mb-8 sm:mb-10 md:mb-12 max-w-xl font-medium leading-relaxed drop-shadow-lg">
            พร้อมให้บริการรับซ่อมประปา หาจุดรั่ว เดินท่อประปา และติดตั้งปั๊มน้ำ
            <span className="hidden sm:inline"> ดูแลทุกปัญหาประปาและระบบน้ำในบ้านคุณ ด้วยคุณภาพมาตรฐานสากล</span>
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16">
            <Link
              href="https://maps.app.goo.gl/bu6t2kMvaarxJroE9"
              target="_blank"
              className="bg-white text-slate-900 hover:bg-blue-50 px-5 sm:px-7 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black transition-all shadow-2xl hover:shadow-blue-500/30 active:scale-95 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              เปิดแผนที่นำทาง
            </Link>
            <Link
              href="tel:0644088510"
              className="bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-xl border border-white/10 text-white px-5 sm:px-7 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black transition-all active:scale-95 text-sm sm:text-base md:text-lg text-center"
            >
              📞 064-408-8510
            </Link>
          </div>

          <div id="map" className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/5 backdrop-blur-2xl p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/5 flex items-start gap-3 sm:gap-5 group hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-400 text-base sm:text-xl" />
              </div>
              <div className="min-w-0">
                <h4 className="font-black text-[10px] sm:text-xs text-blue-400 mb-1.5 sm:mb-2 uppercase tracking-widest">Office Location</h4>
                <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
                  48/23 ซอย หินอ่อน 3 แขวงสายไหม <br className="hidden sm:block" /> เขตสายไหม กรุงเทพมหานคร 10220
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/5 flex items-start gap-3 sm:gap-5 group hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faPhone} className="text-blue-400 text-base sm:text-xl" />
              </div>
              <div className="min-w-0">
                <h4 className="font-black text-[10px] sm:text-xs text-blue-400 mb-1.5 sm:mb-2 uppercase tracking-widest">Emergency Call</h4>
                <p className="text-sm sm:text-base font-black text-slate-100 italic">
                  Hotline: 064-408-8510 <br />
                  Office: 096-979-2757
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Mapcontactdetail;
