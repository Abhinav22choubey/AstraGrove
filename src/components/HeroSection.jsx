import React from 'react';
import cloud from "/Images/cloud.png";
import herobg from "/Images/herobg.jpg";
const Hero = () => {
    return (
        <section className="relative w-full h-[671px]  min-h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center">
            {/* 1. MAIN BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url('${herobg}')`, // Replace with your .jpg
                    backgroundColor: '#f3f4f6' // Fallback
                }}
            >
                {/* Overlay for better text readability on mobile */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* BLURRED BOX */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2
    w-[90%] md:w-[1048px] h-[120px] md:h-[175px]
    bg-white/100 blur-[40px] rounded-full z-10">
            </div>

            {/* 3. CONTENT WRAPPER (Welcome Text + Subtitle) */}
            <div className="relative z-20 flex flex-col items-center text-center px-4">
                <h1 className="font-['Poppins'] font-[900] text-[34px] md:text-[62px] leading-tight md:leading-[90px] text-[#000068] [-webkit-text-stroke:3px_#FBC817]">
                    Welcome to AstraGrove
                </h1>

                {/* Nurturing Little Minds Subtitle */}
                <p className="font-['Kanit'] font-[600]  md:-mt-3 text-black text-[18px] md:text-[30px] max-w-[705px]">
                    Nurturing Little Minds for a Bright Future | <span className="text-[#000068]">DAYCARE</span>
                </p>
            </div>

            {/* 4. CLOUD DECORATIONS (Group 439) */}
            {/* We hide the extra clouds on mobile to prevent horizontal scrolling */}
            <div className="absolute bottom-0 w-full h-[200px] pointer-events-none z-30 flex justify-center items-end overflow-hidden">
                <div className="relative w-full min-w-[1500px] h-full flex justify-between">

                    {/* Cloud 1 */}
                    <img
                        src={cloud}
                        alt="cloud"
                        className="w-[600px] h-[226px] opacity-90 -ml-20"
                    />

                    {/* Cloud 2 (Center) */}
                    <img
                        src={cloud}
                        alt="cloud"
                        className="w-[600px] h-[226px] opacity-95"
                    />

                    {/* Cloud 3 (Right - Flipped) */}
                    <img
                        src={cloud}
                        alt="cloud"
                        className="w-[600px] h-[226px] opacity-90 scale-x-[-1] -mr-20"
                    />
                </div>
            </div>
        </section >
    );
};

export default Hero;