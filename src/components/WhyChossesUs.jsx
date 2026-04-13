
import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const whyChooseUsData = [
  {
    id: 1,
    title: 'Holistic Program',
    description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
  },
  {
    id: 2,
    title: 'Daycare Facility',
    description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
  },
  {
    id: 3,
    title: 'Experience Educator',
    description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
  },
  {
    id: 4,
    title: 'High Class Facility',
    description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
  },
  {
    id: 5,
    title: 'Holistic Program',
    description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
  },
  {
    id: 6,
    title: 'Daycare Facility',
    description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
  },
  {
    id: 7,
    title: 'Experience Educator',
    description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
  },
  {
    id: 8,
    title: 'High Class Facility',
    description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
  },
];

const WhyChooseUs = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag states
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -304 : 304;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Drag handlers (desktop)
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto py-12 relative overflow-visible">
      
      {/* Header Section */}
      <div className="flex flex-row items-center gap-[12px] px-6 lg:px-20 mb-8">
        
      <SectionTitle text={"Why Choose Us"} color={"black"}/>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full flex items-center px-4 lg:px-20">
        
        {/* Left Button (hidden on mobile) */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`hidden md:flex absolute left-2 lg:left-8 z-10 w-[50px] h-[50px] bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-full items-center justify-center transition-opacity duration-300 ${
            canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft className="w-[35px] h-[35px] text-black" strokeWidth={2} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex flex-row gap-[20px] overflow-x-auto snap-x snap-mandatory py-6 w-full custom-scrollbar touch-pan-x cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>

          {/* Cards */}
          {whyChooseUsData.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[284px] h-[303px] bg-white shadow-[0px_0px_10.3px_rgba(0,0,0,0.1)] rounded-tl-[100px] rounded-tr-[100px] flex flex-col items-center justify-center gap-[20px] snap-center shrink-0 p-[12px] transition-transform hover:scale-[1.02] duration-300"
            >
              <h3 className="font-['Kanit'] font-medium text-[30px] leading-[31px] text-center text-black w-[260px]">
                {item.title}
              </h3>
              <p className="font-['Kanit'] font-light text-[20px] leading-[30px] text-center text-black w-[260px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Button (hidden on mobile) */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`hidden md:flex absolute right-2 lg:right-8 z-10 w-[50px] h-[50px] bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-full items-center justify-center transition-opacity duration-300 ${
            canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight className="w-[35px] h-[35px] text-black" strokeWidth={2} />
        </button>
        
      </div>
    </div>
  );
};

export default WhyChooseUs;

