import React from 'react';

const ImageWithLink = ({ imageUrl, title, linkTo }) => {
  return (
    <div className="flex flex-col items-center">
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg"
          width={1120} // Set the desired width
          height={1279} // Set the desired height
        />
      </a>
      <p className="mt-2 text-sm font-normal">{title}</p>
    </div>
  );
};

export default ImageWithLink;
