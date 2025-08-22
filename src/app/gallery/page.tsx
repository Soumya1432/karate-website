// import SectionHeader from '@/components/common/SectionHeaderProps'
// import React from 'react'

// const OurGalleryPage = () => {
//     return (
//         <section>
//             <SectionHeader
//                 title='Our Gallery' />
//             <div className=''>

//             </div>

//         </section>
//     )
// }

// export default OurGalleryPage


"use client";

import React from "react";
import images from "../../data/images.json"
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeaderProps";

const Gallery: React.FC = () => {
  return (
    <section>
        <SectionHeader
         title="Our Gallery" 
         />
    <div className="gallery-container">
      <h2 className="gallery-title">Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((img) => (
          <div className="gallery-item" key={img.id}>
            <Image src={img.src} alt={img.alt} width={500} height={500} layout="100"/>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Gallery;
