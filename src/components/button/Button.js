import React from 'react'

const CustomButton = ({ children, ...props }) => (
    <button
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-2"
      {...props}
    >
      {children}
    </button>
  );
  
export default CustomButton;
  