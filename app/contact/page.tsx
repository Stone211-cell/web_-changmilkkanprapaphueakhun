import ContactedBox from "@/components/Contacted/ContactedBox";
import Mapcontactdetail from "@/components/Mapdetail/Mapcontactdetail";
import Bannerbg from "@/components/Banner/Bannerbg";

const page = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-10 sm:pb-16 md:pb-20">
      <Bannerbg
        img="/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg"
        text="ติดต่อเรา"
        des="ช่องทางการติดต่อช่างมิลการประปา ยินดีให้บริการคำปรึกษาและประเมินราคาฟรี"
      />

      <div className="max-w-4xl mx-auto px-3 sm:px-4 mt-6 sm:mt-8 md:mt-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 md:mb-8 border-b border-slate-200 pb-3 sm:pb-4 inline-block">
          เลือกช่องทางการติดต่อที่สะดวก
        </h2>
        <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl md:rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <ContactedBox />
        </div>
      </div>
    </div>
  )
}
export default page;