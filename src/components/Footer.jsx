import React from 'react';
import logo from '/Images/logo.png'; 
import whatsapp from "/Images/whatsapp.png";
import facebook from "/Images/facebook.png";
import instagram from "/Images/instagram.png";
import youtube from "/Images/youtube.png";
const Footer = () => {
  return (
    // Make sure to add these Google Fonts to your index.html <head>:
    // <link href="https://fonts.googleapis.com/css2?family=Jaini+Purva&family=Kanit:wght@400;600&display=swap" rel="stylesheet" />
    
    <footer className="w-full bg-[#002855] pt-12 pb-8 lg:pt-20 lg:pb-12 text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[140px]">
        
        {/* TOP SECTION: Grid / Flexbox Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          
          {/* 1. Logo Section (Centered on Mobile, Left on Desktop) */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="flex items-center gap-3">
              {/* Logo Placeholder (Replace src with your actual logo image) */}
              <div className="w-[65px] h-[65px] rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
               <img src={logo} alt="AstraGrove Logo" />
              </div>
              <h1 
                className="text-[50px] leading-[66px] text-white" 
                style={{ fontFamily: "'Jaini Purva', serif" }}
              >
                AstraGrove
              </h1>
            </div>
          </div>

          {/* 2. Quick Links Section (Left aligned) */}
          <div className="flex flex-col gap-4 font-['Kanit']">
            <h2 className="font-semibold text-[25px] leading-[37px] mb-1">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2">
              {['Home', 'About', 'Academic', 'Gallery', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="font-normal text-[25px] leading-[37px] hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info Section (Left aligned) */}
          <div className="flex flex-col gap-6 font-['Kanit'] w-full sm:w-auto">
            <h2 className="font-semibold text-[25px] leading-[37px]">
              Contact
            </h2>
            
            {/* Phone */}
            <div className="flex flex-col">
              <span className="font-normal text-[18px] leading-[27px]">Phone:</span>
              <a 
                href="tel:+911234569878" 
                className="font-normal text-[25px] leading-[37px] hover:text-gray-300 transition-colors"
              >
                +91 12345 69878
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <span className="font-normal text-[18px] leading-[27px]">Email</span>
              <a 
                href="mailto:astragroveinfo@gmail.com" 
                className="font-normal text-[25px] leading-[37px] break-all hover:text-gray-300 transition-colors"
              >
                astragroveinfo@gmail.com
              </a>
            </div>
          </div>

          {/* 4. Follow Us Section (Centered on Mobile, Left on Desktop) */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-6 font-['Kanit'] mt-4 lg:mt-0">
            <h2 className="font-semibold text-[25px] leading-[37px]">
              Follow Us
            </h2>
            
            <div className="flex flex-row items-center gap-[18px]">
              {/* YouTube Icon */}
              <a href="#" className="w-[50px] h-[50px]  rounded flex items-center justify-center hover:bg-white/20 transition-all">
                <img src={youtube} alt="YouTube" />
              </a>

              {/* Facebook Icon */}
              <a href="#" className="w-[50px] h-[50px]  rounded flex items-center justify-center hover:bg-white/20 transition-all">
                <img src={facebook} alt="Facebook" />
              </a>

              {/* Instagram Icon */}
              <a href="#" className="w-[50px] h-[50px]  rounded flex items-center justify-center hover:bg-white/20 transition-all">
                <img src={instagram} alt="Instagram" />
              </a>
             
            </div>
            
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Dev Agency */}
        <div className="flex flex-col items-center justify-center mt-16 lg:mt-[120px] gap-4 font-['Kanit'] text-center">
          {/* Developed By text sizes adapt automatically from mobile (18px wrapping) to PC (25px straight) */}
          <p className="font-normal text-[18px] leading-[27px] lg:text-[25px] lg:leading-[37px] max-w-[250px] lg:max-w-none">
            Developed and Designed By SpriteEra IT Solutions
          </p>
          <p className="font-normal text-[20px] leading-[30px] lowercase text-white/90">
            © 2024 AstraGrove. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;