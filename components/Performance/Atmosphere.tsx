import fs from "fs";
import path from "path";
import PerformanceContainer from "./PerformanceContainer";

const LINKIMG = "/images/atmosphere";

export default function AtmospherePage() {
  const dir = path.join(process.cwd(), "public/images/atmosphere");

  // โหลดไฟล์ทั้งหมด + เวลาแก้ไข
  const allImagesWithTime = fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .map((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      return { file, mtime: stats.mtime };
    })
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime()); // ใหม่ไปเก่า

  return (
    <div className="py-24 bg-slate-50">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-xl bg-blue-100/50 text-blue-700 text-[10px] font-black tracking-widest uppercase">
            Work Atmosphere
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            ภาพบรรยากาศ <br className="md:hidden" />
            <span className="text-blue-600 italic">การทำงานของเรา</span>
          </h3>
          <div className="w-20 h-1.5 bg-blue-600 mt-8 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-8">
          {allImagesWithTime.map(({ file }, i) => (
            <div key={`atmosphere-${i}`} className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
              <PerformanceContainer
                image={`${LINKIMG}/${file}`}
                name={`ซ่อมด่วน 24 ชั่วโมง ติดต่อช่างมิล`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
