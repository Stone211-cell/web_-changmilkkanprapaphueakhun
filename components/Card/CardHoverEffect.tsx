import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    pic: "/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg",
    title: "สำรวจหาจุดรั่วไหล",
    description: "บริการใช้เครื่องมือทันสมัยตรวจหาจุดท่อประปารั่วใต้พื้นปูนและใต้ดินอย่างแม่นยำ ไม่ต้องทุบมั่ว",
  },
  {
    pic: "/images/service/ซ่อมท่อน้ำใต้ดิน.jpg",
    title: "ซ่อมท่อแตก-ท่อรั่ว",
    description: "รับซ่อมประปาเร่งด่วน แก้ไขท่อแตก ท่อรั่วซึมทุกประเภท โดยทีมช่างผู้ชำนาญงานเฉพาะทาง",
  },
  {
    pic: "/images/service/LINE_ติดตั้งแทงค์น้ำ.webp",
    title: "งานระบบแทงค์น้ำ",
    description: "ติดตั้งและล้างทำความสะอาดแทงค์น้ำ ตรวจเช็คระบบลูกลอยและวาล์วให้ทำงานปกติ 100%",
  },
  {
    pic: "/images/service/ติดตั้งชักโชรกไหม่.webp",
    title: "ติดตั้งสุขภัณฑ์",
    description: "รับเปลี่ยนและติดตั้งชักโครก อ่างล้างหน้า ฝักบัว และอุปกรณ์ในห้องน้ำทุกชนิด สวยงาม แข็งแรง",
  },
  {
    pic: "/images/service/LINE_เปลื่ยนท่อน้ำทิ้ง4นิ้ว_ลาดพร้าว.webp",
    title: "เดินท่อ PPR / PB",
    description: "รับเดินท่อประปาใหม่ด้วยระบบท่อ PPR และ PB ที่ทนความร้อนสูงและมีความทนทานยาวนานพิเศษ",
  },
  {
    pic: "/images/service/LINE_ติดตั้งปั้มน้ำ.webp",
    title: "ติดตั้งปั๊มน้ำอัตโนมัติ",
    description: "บริการติดตั้งปั๊มน้ำทุกยี่ห้อ พร้อมวางระบบบายพาส (Bypass) มั่นใจได้น้ำแรงสม่ำเสมอ",
  },
];
