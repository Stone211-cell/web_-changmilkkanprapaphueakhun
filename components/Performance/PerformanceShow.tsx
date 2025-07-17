import Link from "next/link";
import { Button } from "../ui/button";
import PerformanceContainer from "./PerformanceContainer";


const PerformanceBox = ({
  mainmsg,
  pops,
}: {
  mainmsg?: string;
  pops?: string;
}) => {
  const LINKIMG = "/images/performance";


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
           <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_1.jpg"}
            name="เปลี่ยนท่อ ติดตั้งซิงค์ล้างหน้า"
            // description="รับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำรับติดตั้งปั้มน้ำ"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_2.jpg"}
            name="เดินท่อใหม่ เปลี่ยนระบบจากใต้ดินย้ายมาบนดิน"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg"}
            name="รับช่อมปั้มน้ำดังปั้มน้ำทำงานตลอดเวลา"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_4.jpg"}
            name=" รับติดตั้งปั้มน้ำตามที่ลูกค้าต้องการ"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_5.jpg"}
            name="รับช่อมน้ำหยดน้ำรั่วน้ำชึม และติดตั้งสุขภัณฑ์ไหม่"
          />

          <PerformanceContainer
            image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_6.jpg"}
            name="รับเดินระบบท่อประปาไหม่ครบวงจร"
          />
        </div>
      </section>
    </div>
  );
};
export default PerformanceBox;
