import Image from "next/image";

const DetailsInstallPump = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner/S__8683544.webp"
          alt="พื้นหลัง"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-widest uppercase">
              Premium Service Standard
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              ช่างมิล <span className="text-blue-500">ประปาเพื่อคุณ</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mb-12">
              บริการซ่อมแซม และ ติดตั้งระบบประปา สำหรับบ้านและอาคารทุกประเภท
              มั่นใจได้ในคุณภาพงานที่รวดเร็วและประณีต พร้อมทีมช่างผู้ชำนาญการ
              ยินดีแก้ปัญหาประปา แบบครบวงจร
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "ซ่อมแซม-ติดตั้ง",
                desc: "บริการซ่อมแซม และ ติดตั้งระบบประปา ครอบคลุมงานซ่อมท่อแตก ท่อรั่ว โดยช่างมืออาชีพ",
                label: "Service"
              },
              {
                title: "ตรวจเช็คปั๊มน้ำ",
                desc: "แก้ไขปัญหาปั๊มน้ำดังตลอดเวลา ค่าน้ำแพงผิดปกติ ตรวจสอบจุดรั่วไหลด้วยเครื่องมือทันสมัย",
                label: "Emergency"
              },
              {
                title: "เดินท่อประปาใหม่",
                desc: "วางระบบท่อประปาใหม่สำหรับบ้านสร้างใหม่ หรือรีโนเวท ด้วยวัสดุมาตรฐานสูง ทนทานยาวนาน",
                label: "Installation"
              },
              {
                title: "ซ่อมท่อรั่วใต้พื้น",
                desc: "ค้นหาจุดรั่วใต้พื้นปูนโดยไม่ต้องทุบมั่วซั่ว แม่นยำ รวดเร็ว ลดความเสียหายของหน้างาน",
                label: "Specialist"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-all duration-500">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3 block">
                  {item.label}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsInstallPump;
