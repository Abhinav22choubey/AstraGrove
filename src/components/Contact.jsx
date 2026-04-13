import React from 'react';
import map from "/Images/map.png";
const ContactSection = () => {
  return (
    <section 
      className="w-full max-w-[1440px] mx-auto px-4 py-12 md:px-14 lg:px-[130px] lg:py-24"
      style={{ fontFamily: "'Kanit', sans-serif" }}
    >
      {/* Header Area */}
      <div className="flex flex-row items-center gap-3 mb-5 lg:mb-4">
        {/* Red Gradient Bar */}
        <div className="w-[70px] h-[10px] bg-gradient-to-r from-[#E31A22] to-[#A80E13] flex-shrink-0"></div>
        {/* Contact Heading */}
        <h2 className="text-black font-medium text-[28px] md:text-[35px] leading-tight md:leading-[52px]">
          Contact
        </h2>
      </div>

      {/* Main Content Layout (Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
        
        {/* Left Column: Text Information */}
        <div className="flex justify-center items-center flex-col gap-6 lg:gap-8">
          {/* Tagline */}
          <p className="text-[#000068] font-medium text-[24px] lg:text-[30px] leading-[36px] lg:leading-[45px]">
            Ready to give your child a joyful learning experience? Join us at Astra Grove today!
          </p>

          {/* Contact Details List */}
          <div className="flex flex-col gap-6 text-[20px] lg:text-[25px] leading-[30px] lg:leading-[37px] text-black">
            
            {/* Address */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="font-semibold min-w-[100px]">Address:</span>
              <span className="font-normal text-gray-800">
                Plot No. 51 , Ground Floor, Shivaji Enclave, New Delhi - 110027
              </span>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="font-semibold min-w-[100px]">Phone:</span>
              <a 
                href="tel:+919874563210" 
                className="font-normal text-gray-800 hover:text-[#E31A22] transition-colors"
              >
                +91-9874563210
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span className="font-semibold min-w-[100px]">Email:</span>
              <a 
                href="mailto:astragrove123@gmail.com" 
                className="font-normal text-gray-800 hover:text-[#E31A22] transition-colors break-all"
              >
                astragrove123@gmail.com
              </a>
            </div>
            
          </div>
        </div>

        {/* Right Column: Map / Image */}
        <div className="w-full h-[300px] lg:h-[419px] rounded-[15px] overflow-hidden ">
          <img 
            // Replace this src with your actual image path
            src={map} 
            alt="Astra Grove Map Location" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;