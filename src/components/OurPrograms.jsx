import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const programsData = [
    {
        id: 1,
        title: 'Pre-Nursery',
        description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
        bgColor: 'bg-[#7F237A]',
    },
    {
        id: 2,
        title: 'Nursery',
        description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
        bgColor: 'bg-[#11AC0C]',
    },
    {
        id: 3,
        title: 'Junior KG',
        description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
        bgColor: 'bg-[#FF0000]',
    },
    {
        id: 4,
        title: 'Senior KG',
        description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
        bgColor: 'bg-[#000068]',
    },
    {
        id: 5,
        title: 'Pre-Nursery',
        description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
        bgColor: 'bg-[#7F237A]',
    },
    {
        id: 6,
        title: 'Nursery',
        description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
        bgColor: 'bg-[#11AC0C]',
    },
    {
        id: 7,
        title: 'Junior KG',
        description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
        bgColor: 'bg-[#FF0000]',
    },
    {
        id: 8,
        title: 'Senior KG',
        description: 'Gentle play-based learning to develop sensory, motor, and social skills in a nurturing environment.',
        bgColor: 'bg-[#000068]',
    },
];

const OurPrograms = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // 2px buffer to handle sub-pixel rendering calculations
            setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2);
        }
    };

    useEffect(() => {
        checkScroll();
        // Check on resize to handle screen width changes
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            // Scroll by the width of one card + gap (284 + 20)
            const scrollAmount = direction === 'left' ? -304 : 304;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        // To ensure fonts match perfectly, add Google Fonts to your index.html:
        // <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Poppins:wght@300;500&display=swap" rel="stylesheet">

        <div className="w-full max-w-[1400px] mx-auto py-12 relative overflow-hidden">

            {/* Header Section */}
            <div className="flex flex-row items-center gap-[12px] px-6 lg:px-20 mb-8">

                <SectionTitle text={"Our Programs"} color={"#BD0005"} />
            </div>
            {/* Carousel Wrapper */}
            <div className="relative w-full flex items-center px-4 lg:px-20">

                {/* Left Navigation Button */}
                <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`absolute left-2 lg:left-8 z-10 w-[50px] h-[50px] bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center transition-opacity duration-300 ${canScrollLeft ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
                        }`}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-[35px] h-[35px] text-black" strokeWidth={2} />
                </button>

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex flex-row gap-[20px] overflow-x-auto snap-x snap-mandatory pb-4 pt-2 w-full custom-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style>{`
            .custom-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>

                    {/* Cards */}
                    {programsData.map((program) => (
                        <div
                            key={program.id}
                            className={`flex-none w-[284px] h-[282px] ${program.bgColor} rounded-tl-[50px] rounded-br-[50px] flex flex-col items-center justify-center gap-[15px] snap-center shrink-0 p-4 transition-transform hover:scale-[1.02] duration-300`}
                        >
                            <h3 className="font-['Poppins'] font-medium text-[35px] leading-[47px] text-center text-white w-[260px]">
                                {program.title}
                            </h3>

                            <p className="font-['Poppins'] font-light text-[20px] leading-[30px] text-center text-white w-[260px]">
                                {program.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Navigation Button */}
                <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`absolute right-2 lg:right-8 z-10 w-[50px] h-[50px] bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center transition-opacity duration-300 ${canScrollRight ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
                        }`}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-[35px] h-[35px] text-black" strokeWidth={2} />
                </button>

            </div>
        </div>
    );
};

export default OurPrograms;