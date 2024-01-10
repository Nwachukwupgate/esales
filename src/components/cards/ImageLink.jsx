import React from 'react';
import { Link } from 'react-router-dom'

const ImageWithLink = ({ imageUrl, title, linkTo }) => {
  return (
    <div className="flex flex-col items-center">
      <Link to={linkTo}>
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg"
          width={1120} // Set the desired width
          height={1279} // Set the desired height
        />
      </Link>
      <p className="mt-2 text-base font-normal">{title}</p>
    </div>
  );
};

export default ImageWithLink;
