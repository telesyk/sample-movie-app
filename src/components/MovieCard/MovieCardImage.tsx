import React from 'react';
import { FaImage } from 'react-icons/fa';
import { MovieImage } from './MovieCardType';

function MovieCardImage({ image, title }: MovieImage) {
  return (
    <div className="">
      {!image ? (
        <span className="w-[280px] h-[160px] animate-pulse bg-custom-blue-600/50"></span>
      ) : (
        <>
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="-translate-y-6 relative z-20"
          />
          <FaImage className="w-16 h-16 opacity-25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </>
      )}
    </div>
  );
}

export default MovieCardImage;
