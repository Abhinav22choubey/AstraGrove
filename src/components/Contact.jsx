import React from 'react';
import map from "/Images/map.png";
import SectionTitle from '../common/SectionTitle';

const ContactSection = () => {
  return (
    <section 
    id='contact'
      className="w-full max-w-[1400px] mx-auto py-12 relative overflow-hidden"
      style={{ fontFamily: "'Kanit', sans-serif" }}
    >
      {/* Header */}
      <div className="flex flex-row items-center gap-[12px] px-6 lg:px-20 mb-8 lg:mb-[32px]">
        <SectionTitle text={"Contact"} color={"#E31A22"} />
      </div>

      {/* Content */}
      <div className="px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left */}
          <div className="flex justify-center items-center flex-col gap-6 lg:gap-8">
            <p className="text-[#000068] font-medium text-[24px] lg:text-[30px] leading-[36px] lg:leading-[45px] text-left lg:text-left">
              Ready to give your child a joyful learning experience? Join us at Astra Grove today!
            </p>

            <div className="flex flex-col gap-6 text-[20px] lg:text-[25px] leading-[30px] lg:leading-[37px] text-black">
              
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-semibold min-w-[100px]">Address:</span>
                <span className="text-gray-800">
                  Plot No. 51 , Ground Floor, Shivaji Enclave, New Delhi - 110027
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-semibold min-w-[100px]">Phone:</span>
                <a href="tel:+919874563210" className="text-gray-800 hover:text-[#E31A22]">
                  +91-9874563210
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-semibold min-w-[100px]">Email:</span>
                <a href="mailto:astragrove123@gmail.com" className="text-gray-800 hover:text-[#E31A22] break-all">
                  astragrove123@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* Right */}
          <div className="w-full h-[300px] lg:h-[419px] rounded-[15px] overflow-hidden">
            <img 
              src={map} 
              alt="Astra Grove Map Location" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;