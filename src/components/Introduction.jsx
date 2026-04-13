import React from 'react';
import SectionTitle from '../common/SectionTitle';
import intro from "/Images/intro.jpg";
const IntroductionSection = () => {
    return (
        <section  id="about" className="max-w-[1280px] mx-auto px-6 py-10 md:py-22 overflow-hidden">
            {/* Frame 10: Header Section */}
            <div className="flex items-center gap-[12px] mb-4 md:mb-10">
                <SectionTitle text="Introduction" color="#FFB400" />
            </div>

            {/* Main Content: Group 5 Logic */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* Image Side (Rectangle 11 & 10) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-start">
                    <div className="relative">
                        {/* Wrapper = acts like border */}
                        <div className="p-[12px] md:p-[16px] bg-[#FD0202] rounded-[5px] rounded-tr-[100px] inline-block">

                            {/* Image container */}
                            <div className="w-[300px] h-[286px] md:w-[388px] md:h-[370px] bg-[#D9D9D9] rounded-[5px] rounded-tr-[100px] overflow-hidden border border-gray-100">
                                <img
                                    src={intro}
                                    alt="AstraGrove School"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="lg:col-span-7 justify-center lg:justify-start">
                    <p className="font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[30px] md:leading-[38px] text-black">
                        At AstraGrove School, foster a dynamic learning environment where every child’s potential is nurtured.
                        Our innovative curriculum, led by passionate educators, encourages curiosity, critical thinking,
                        and collaboration. We focus on both academic and personal growth, developing students into
                        compassionate, confident, and skilled individuals. Through enriching programs and supportive
                        guidance, we prepare our students to tackle future challenges with creativity, resilience, and integrity.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default IntroductionSection;