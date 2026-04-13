import React, { useState } from 'react';
import logo from "/Images/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Link Data
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Academic', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <>
      <nav className="bg-[#002855] w-full h-[90px] flex items-center relative z-50">
        <div className="container mx-auto px-6 md:px-14 flex justify-between items-center max-w-[1513px]">
          
          {/* LOGO SECTION */}
          <div className="flex items-center gap-[10px]">
            {/* Logo Image (Asper School Of Business) */}
            <div 
              className="w-[65px] h-[65px]  rounded-full bg-center bg-cover "
              style={{ backgroundImage: `url('${logo}')` }}
            ></div>
            
            {/* AstraGrove Text */}
            <h1 className="text-white font-['Jaini_Purva'] text-[32px] md:text-[50px] leading-tight">
              AstraGrove
            </h1>
          </div>

          {/* DESKTOP LINKS (PC) */}
          <div className="hidden lg:flex items-center gap-[50px]">
            <ul className="flex gap-[50px]">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-white font-['Kanit'] text-[20px] leading-[30px] hover:text-[#FFB400] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Call Now Button */}
            <a 
              href="tel:#"
              className="bg-[#FFB400] text-white font-['Kanit'] text-[20px] px-[20px] py-[2px] rounded-[5px] flex items-center justify-center min-w-[118px] h-[35px] hover:brightness-110 transition-all"
            >
              Call Now
            </a>
          </div>

          {/* MOBILE TOGGLE (Hamburger Icon) */}
          <button 
            className="lg:hidden text-white flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`h-0.5 w-8 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-8 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-8 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* MOBILE MENU (Mobile) */}
        <div className={`
          absolute top-[90px] left-0 w-full bg-[#002855] border-t border-[#ffffff20] transition-all duration-300 ease-in-out lg:hidden
          ${isOpen ? 'max-h-[500px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}
        `}>
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-white font-['Kanit'] text-[20px]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="tel:#"
                className="bg-[#FFB400] text-white font-['Kanit'] text-[20px] px-10 py-2 rounded-[5px]"
              >
                Call Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;