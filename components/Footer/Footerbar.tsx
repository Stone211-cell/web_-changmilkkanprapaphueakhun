import { faHouse, faTruckFast, faUser, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ContactIcon } from "../Contacted/ContactIcon";
import { faLine } from "@fortawesome/free-brands-svg-icons";

const Footerbar = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-100 pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 mb-8 sm:mb-12">

          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="relative h-10 w-10 sm:h-14 sm:w-14 overflow-hidden rounded-lg sm:rounded-xl bg-white flex items-center justify-center p-0.5 sm:p-1">
                <Image
                  src="/images/service/LOGO.jpg"
                  alt="ช่างมิลการประปา"
                  width={50}
                  height={50}
                  className="rounded-md sm:rounded-lg object-cover"
                />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                ช่างมิล ประปาเพื่อคุณ
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 max-w-md">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">ช่างประปา มืออาชีพ 24 ชั่วโมง</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                รับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับติดตั้งที่เก็บน้ำ
                ทุกประเภท ครบจบในที่เดียว บริการด้วยความซื่อสัตย์ รวดเร็ว และเป็นกันเอง
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col md:pl-4 lg:pl-8">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-4 sm:mb-6 md:mb-8 border-b-2 border-blue-500 pb-2 inline-block w-fit">
              แผนผังเว็บไซต์
            </h3>

            <div className="grid grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-6">
              {[
                { href: "/", icon: faHouse, label: "หน้าหลัก" },
                { href: "/aboutus", icon: faUser, label: "เกี่ยวกับเรา" },
                { href: "/service", icon: faTruckFast, label: "บริการของเรา" },
                { href: "/performance", icon: faUsersRectangle, label: "ผลงานของเรา" }
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <FontAwesomeIcon icon={item.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-4 sm:mb-6 md:mb-8 border-b-2 border-blue-500 pb-2 inline-block lg:mr-auto">
              LINE OFFICIAL
            </h3>

            <div className="flex flex-col items-center gap-y-3 sm:gap-y-4 bg-white/5 p-4 sm:p-6 rounded-2xl sm:rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
              <div className="bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl">
                <Image
                  src="/images/service/QRCODE.jpg"
                  alt="QR Code ช่างมิลการประปา"
                  width={120}
                  height={120}
                  className="rounded-md sm:rounded-lg w-[100px] h-[100px] sm:w-[140px] sm:h-[140px]"
                />
              </div>
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="เพิ่มเพื่อน"
                LINKBTN="tel:0644088510"
                icontype={faLine}
                classtype="bg-transparent border-none p-0 font-black hover:text-green-400 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-800 my-6 sm:my-8 md:my-12"></div>

        <div className="flex flex-col sm:flex-row justify-center items-center text-slate-400 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest uppercase text-center gap-1">
          <p>© {new Date().getFullYear()} ช่างมิลการประปา</p>
          <span className="hidden sm:inline">•</span>
          <p>PROFESSIONAL PLUMBING SERVICE</p>
        </div>
      </div>
    </footer>
  );
};
export default Footerbar;
