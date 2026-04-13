import React from "react";

const SectionTitle = ({
  text ,
  color
}) => {
  return (
    <div className="w-full flex justify-start md:justify-start">
      <div className="flex items-center gap-3 sm:gap-4">
        
        {/* Line / Rectangle */}
        <div
          className="h-[6px] sm:h-[8px] md:h-[10px] w-[50px] sm:w-[60px] md:w-[70px] rounded-sm"
          style={{ backgroundColor: color }}
        />

        {/* Text */}
        <h2 className="font-['Kanit'] font-medium text-[22px] sm:text-[28px] md:text-[35px] leading-tight text-black">
          {text}
        </h2>

      </div>
    </div>
  );
};

export default SectionTitle;