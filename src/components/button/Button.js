import React from 'react'

const CustomButton = ({ children, handleButtonClick, ...props }) => {
  
  return (
    <button
    className="inline-flex items-center justify-center rounded-md text-sm font-medium px-8 h-10 py-2 mt-2 bg-red-600"
      onClick={handleButtonClick}
      {...props}
    >
      {children}
    </button>
  );
} 
export default CustomButton;
  