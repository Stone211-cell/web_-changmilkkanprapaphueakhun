import ContactedBox from "@/components/Contacted/ContactedBox";
import { Bannerbg } from "@/components/Banner/BannerImg";

const page = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Bannerbg
        img="/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg"
        text="ติดต่อเรา"
        des="ช่องทางการติดต่อช่างมิลการประปา ยินดีให้บริการคำปรึกษาและประเมินราคาฟรี"
      />

      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b border-slate-200 pb-4 inline-block">
          เลือกช่องทางการติดต่อที่สะดวก
        </h2>
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <ContactedBox />
        </div>
      </div>
    </div>
  )
}
export default page;