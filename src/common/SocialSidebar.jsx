import React from "react";
import whatsapp from "/Images/whatsapp.png";
import facebook from "/Images/facebook.png";
import instagram from "/Images/instagram.png";
import youtube from "/Images/youtube.png";
const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-[295px] z-50 flex h-[198px] w-[59px] items-center justify-center rounded-[5px] bg-[#FBC817] shadow-lg">
      {/* Frame 28 (Auto layout container) */}
      <div className="flex h-[172px] w-[50px] flex-col items-center justify-center gap-1">
        
        {/* WhatsApp */}
        <a 
          href="#" 
          aria-label="WhatsApp"
          className="flex h-10 w-10 flex-none items-center justify-center transition-transform hover:scale-110"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>

        {/* Facebook */}
        <a 
          href="#" 
          aria-label="Facebook"
          className="flex h-10 w-10 flex-none items-center justify-center transition-transform hover:scale-110"
        >
          <img src={facebook} alt="Facebook" />
        </a>

        {/* Instagram */}
        <a 
          href="#" 
          aria-label="Instagram"
          className="flex h-10 w-10 flex-none items-center justify-center transition-transform hover:scale-110"
        >
          <img src={instagram} alt="Instagram" />
        </a>

        {/* YouTube */}
        <a 
          href="#" 
          aria-label="YouTube"
          className="flex h-10 w-10 flex-none items-center justify-center transition-transform hover:scale-110"
        >
          <img src={youtube} alt="YouTube" />
        </a>

      </div>
    </div>
  );
};

export default SocialSidebar;