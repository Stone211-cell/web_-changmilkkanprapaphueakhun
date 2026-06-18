import Image from "next/image";

const PerformanceContainer = ({
  image,
  name,
  description,
  videoUrl,
  mediaType,
  postUrl,
}: {
  image: string;
  name: string;
  description?: string;
  videoUrl?: string | null;
  mediaType?: string;
  postUrl?: string | null;
}) => {
  const isFacebookVideo = videoUrl && (videoUrl.includes("facebook.com") || videoUrl.includes("fb.watch"));
  const clickUrl = videoUrl || postUrl;

  const PlayIcon = () => (
    <svg className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  );

  return (
    <article className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
        {mediaType === "video" && videoUrl && !isFacebookVideo ? (
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          clickUrl ? (
            <a href={clickUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative flex items-center justify-center group/img">
              <Image
                src={image || "/images/performance/LINE_ALBUM_รูปตอนทำงาน_250618_1.jpg"}
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                alt={name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {mediaType === "video" && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <PlayIcon />
                </div>
              )}
            </a>
          ) : (
            <Image
              src={image || "/images/performance/LINE_ALBUM_รูปตอนทำงาน_250618_1.jpg"}
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      <div className="p-3.5 sm:p-4 md:p-5 flex flex-col flex-grow">
        {postUrl ? (
          <a href={postUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="line-clamp-3 text-sm sm:text-base md:text-lg font-bold text-slate-800 leading-tight mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors" title={name}>
              {name}
            </h3>
          </a>
        ) : (
          <h3 className="line-clamp-3 text-sm sm:text-base md:text-lg font-bold text-slate-800 leading-tight mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors" title={name}>
            {name}
          </h3>
        )}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xs sm:text-sm font-bold text-blue-600">ช่างมิล ประปา</p>
          <p className="text-[10px] sm:text-xs font-medium text-slate-400">064-408-8510</p>
        </div>
      </div>

      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-600/90 text-[8px] sm:text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-sm shadow-lg">
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