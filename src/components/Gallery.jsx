import React from 'react';
import SectionTitle from '../common/SectionTitle';
import img1 from "/Images/1.jpg";
import img2 from "/Images/2.jpg";
import img3 from "/Images/3.jpg";
import img4 from "/Images/4.jpg";
import img5 from "/Images/5.jpg";
import img6 from "/Images/6.jpg";
import img7 from "/Images/7.jpg";
import img8 from "/Images/8.jpg";
// Using placeholder images. Replace the 'url' values with your actual image paths.
const galleryImages = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
  { id: 4, url: img4 },
  { id: 5, url: img5 },
  { id: 6, url: img6 },
  { id: 7, url: img7 },
  { id: 8, url: img8 },
];

const Gallery = () => {
  return (
    <div id='gallery' className="w-full max-w-[1400px] mx-auto py-12 relative overflow-hidden">

      {/* Header Section */}
      <div className="flex flex-row items-center gap-[12px] px-6 lg:px-20 mb-8 lg:mb-[32px]">
        {/* Yellow/Orange Indicator Rectangle */}
        <SectionTitle text={" Gallery"} color={"#FFB400"} />
      </div>


      {/* Gallery Grid Container */}
      <div className="px-6 lg:px-20 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] md:gap-[29px] w-full max-w-[1240px] place-items-center">

          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="w-full aspect-[288/289] bg-gray-100 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg rounded-md"
            >
              <img
                src={image.url}
                alt={`Gallery item ${image.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Gallery;