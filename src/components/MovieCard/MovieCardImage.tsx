'use client';

import { FaFilm } from 'react-icons/fa';
import { MovieImage } from '@/types';
import Image from 'next/image';

function MovieCardImage({ image, title }: MovieImage) {
  return (
    <div className="h-full relative">
      {!image ? (
        <FaFilm className="w-16 h-16 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-light/30" />
      ) : (
        <>
          <Image
            src={image}
            alt={title}
            width={150}
            height={150}
            loading="lazy"
            decoding="async"
            className="-translate-y-[3.875rem] relative z-10 w-full h-auto"
          />
        </>
      )}
    </div>
  );
}

export default MovieCardImage;
