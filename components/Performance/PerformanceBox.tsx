import Link from "next/link";
import { Button } from "../ui/button";
import fs from "fs";
import path from "path";
import PerformanceContainer from "./PerformanceContainer";

const PerformanceBox = ({
  mainmsg,
  pops,
}: {
  mainmsg?: string;
  pops?: string;
}) => {
  const LINKIMG = "/images/performance";


    const dir = path.join(process.cwd(), "public/images/performance");
  
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
    <div>
      {" "}
      <section>
        <div>
          <h3 className="text-2xl text-center mb-2 border-b-red-800">
            ผลงานของเรา
          </h3>
          <Button
            className={`${pops} text-sm ml-15 bg-blue-800 text-white transition-transform duration-200 ease-in-out hover:scale-110 rounded-md`}
          >
            <Link href="/performance">{mainmsg}</Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-10">
         {allImagesWithTime.map(({ file }, i) => (
            <PerformanceContainer
              key={`atmosphere-${i}`}
              image={`${LINKIMG}/${file}`}
              name={`ซ่อมด่วน 24 ชั่วโมง ติดต่อช่างมิล`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default PerformanceBox;
