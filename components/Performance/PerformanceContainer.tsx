import Image from "next/image";

const PerformanceContainer = ({
  image,
  name,
}: {
  image: string;
  name: string;
  description?: string;
}) => {
  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm font-bold text-blue-600">ช่างมิล ประปา</p>
          <p className="text-xs font-medium text-slate-400">064-408-8510</p>
        </div>
      </div>

      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-600/90 text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-sm shadow-lg">
        Our Portfolio
      </div>
    </article>
  );
};
export default PerformanceContainer;



// <div
//   className="relative bg-black text-white overflow-hidden w-full min-h-screen"
//   data-aos="zoom-in-down"
// >
//   <Image
//     src="/Imgs/HomeImg/Authentic_ThaiMassage.jpg"
//     alt="Thaimassage"
//     fill
//     className="object-cover object-center opacity-30 z-0 h-full"
//   />
//   <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
//     <div className="text-center max-w-2xl">
//       <h2 className="text-4xl font-bold mb-4">Gallery!!</h2>
//       <p className="text-lg">Gallery in Our Thai Massage Shop</p>
//     </div>
//   </div>
// </div>


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// export default function GalleryClient({ images }: { images: string[] }) {
//   const [showModal, setShowModal] = useState(false);
//   const [currentImage, setCurrentImage] = useState("");

//   const openImage = (src: string) => {
//     setCurrentImage(src);
//     setShowModal(true);
//   };

//   return (
//     <div className="min-h-screen bg-black p-8">
//       <h1 className="mb-6 text-center text-3xl font-bold text-white">Gallery</h1>
//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {images.map((file, index) => (
//           <div
//             key={index}
//             className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md"
//             onClick={() => openImage(`/Imgs/gallery/${file}`)}
//           >
//             <Image
//               src={`/Imgs/gallery/${file}`}
//               alt={`gallery-${index}`}
//               width={500}
//               height={500}
//               className="h-full w-full object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-110"
//             />
//             <div className="absolute inset-0 transition duration-300 group-hover:bg-black/20" />
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur"
//           onClick={() => setShowModal(false)}
//         >
//           <div className="relative w-full max-w-4xl p-4">
//             <Image
//               src={currentImage}
//               alt="zoom"
//               width={1200}
//               height={800}
//               className="w-full h-auto rounded-lg object-contain"
//             />
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 text-4xl text-white"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }