import { faHouse, faTruckFast, faUser, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ContactIcon } from "../Contacted/ContactIcon";
import { faLine } from "@fortawesome/free-brands-svg-icons";

const Footerbar = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-100 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white flex items-center justify-center p-1">
                <Image
                  src="/images/service/LOGO.jpg"
                  alt="ช่างมิลการประปา"
                  width={50}
                  height={50}
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                ช่างมิล ประปาเพื่อคุณ
              </h2>
            </div>

            <div className="space-y-4 max-w-md">
              <h3 className="text-xl font-bold text-white tracking-tight">ช่างประปา มืออาชีพ 24 ชั่วโมง</h3>
              <p className="text-slate-300 leading-relaxed font-medium">
                รับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับติดตั้งที่เก็บน้ำ
                ทุกประเภท ครบจบในที่เดียว บริการด้วยความซื่อสัตย์ รวดเร็ว และเป็นกันเอง
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col md:pl-8">
            <h3 className="text-xl font-black text-white mb-8 border-b-2 border-blue-500 pb-2 inline-block w-fit">
              แผนผังเว็บไซต์
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-white">
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="หน้าหลัก"
                LINKBTN="/"
                icontype={faHouse}
                classtype="bg-transparent border-none p-0 group"
              />
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="เกี่ยวกับเรา"
                LINKBTN="/aboutus"
                icontype={faUser}
                classtype="bg-transparent border-none p-0 group"
              />
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="บริการของเรา"
                LINKBTN="/service"
                icontype={faTruckFast}
                classtype="bg-transparent border-none p-0 group"
              />
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="ผลงานของเรา"
                LINKBTN="/performance"
                icontype={faUsersRectangle}
                classtype="bg-transparent border-none p-0 group"
              />
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
            <h3 className="text-xl font-black text-white mb-8 border-b-2 border-blue-500 pb-2 inline-block lg:mr-auto">
              LINE OFFICIAL
            </h3>

            <div className="flex flex-col items-center gap-y-4 bg-white/5 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
              <div className="bg-white p-3 rounded-2xl shadow-2xl">
                <Image
                  src="/images/service/QRCODE.jpg"
                  alt="QR Code ช่างมิลการประปา"
                  width={140}
                  height={140}
                  className="rounded-lg"
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

        <div className="w-full h-px bg-slate-800 my-12"></div>

        <div className="flex justify-center items-center text-slate-400 text-sm font-bold tracking-widest uppercase">
          <p>© {new Date().getFullYear()} ช่างมิลการประปา • PROFESSIONAL PLUMBING SERVICE</p>
        </div>
      </div>
    </footer>
  );
};
export default Footerbar;
