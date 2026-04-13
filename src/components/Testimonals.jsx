import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "../common/SectionTitle";

// Double Quote SVG Icon
const QuoteIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const testimonialsData = [
  {
    id: 1,
    quote:
      "AstraGrove School has been a wonderful choice for our child’s education. The teachers are not only highly knowledgeable but genuinely care about each student’s growth.",
    author: "Mr. and Mrs. Sharma",
    borderColor: "border-[#FFB400]",
    bgColor: "bg-[#FFB400]",
  },
  {
    id: 2,
    quote:
      "The dedication of the staff at AstraGrove is unmatched. They create a nurturing and positive environment where children feel valued and motivated to learn.",
    author: "Mr. Singh",
    borderColor: "border-[#FF0000]",
    bgColor: "bg-[#FF0000]",
  },
  {
    id: 3,
    quote:
      "AstraGrove School combines strong academics with a genuine focus on each child’s strengths. Our son enjoys learning and has developed a passion for science.",
    author: "Mr. and Mrs. Verma",
    borderColor: "border-[#FFB400]",
    bgColor: "bg-[#FFB400]",
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;

    let newIndex = 0;
    let minDiff = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const diff = Math.abs(
        child.offsetLeft - scrollLeft - container.offsetLeft
      );
      if (diff < minDiff) {
        minDiff = diff;
        newIndex = idx;
      }
    });

    setActiveIndex(newIndex);
  };

  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const child = container.children[index];

    if (child) {
      const scrollPos = child.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="relative w-full bg-white py-16 overflow-hidden font-kanit">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="flex flex-row items-center gap-3 mb-12 md:mb-[52px]">
          <SectionTitle text={"Testimonials"} color={"#11AC0C"} />
        </div>

        {/* Cards */}
        <div
          ref={scrollContainerRef}
          className="flex flex-row gap-5 md:gap-[28px] overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6"
        >
          {testimonialsData.map((card) => (
            <div
              key={card.id}
              className={`relative w-[85vw] md:w-[378px] flex-none min-h-[260px] md:min-h-[232px] border-2 rounded-tl-[50px] rounded-br-[50px] overflow-hidden snap-center ${card.borderColor} bg-white flex flex-col`}
            >
              {/* Background Circles */}
              <div className={`absolute w-[110px] h-[110px] rounded-full -top-12 -right-12 z-0 ${card.bgColor}`} />
              <div className={`absolute w-[110px] h-[110px] rounded-full -bottom-12 -left-12 z-0 ${card.bgColor}`} />

              {/* Content */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between py-6 px-6 md:px-8">

                {/* Top Quote */}
                <div className="w-full flex justify-start pl-1">
                  <QuoteIcon
                    className={`w-5 h-5 ${card.bgColor.replace("bg-", "text-")} opacity-80`}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 flex items-center justify-center px-3 md:px-4">
                  <p className="text-[15px] md:text-[16px] font-light leading-[24px] text-black text-center break-words">
                    {card.quote}
                  </p>
                </div>

                {/* Bottom */}
                <div className="w-full flex justify-between items-end mt-4 pr-1">
                  <span className="text-[16px] ml-10 md:text-[18px] leading-[26px] font-normal italic text-black">
                    {card.author}
                  </span>
                  <QuoteIcon
                    className={`w-5 h-5 ${card.bgColor.replace("bg-", "text-")} rotate-180 opacity-80`}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex flex-row items-center justify-center gap-[4px] mt-[33px]">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-[10px] ${
                activeIndex === index
                  ? "w-[25px] h-[6px] bg-[#11AC0C]"
                  : "w-[6px] h-[6px] bg-[#333333]/50 hover:bg-[#333333]/70"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}