'use client';

import { FaFilm } from 'react-icons/fa';
import Image from 'next/image';
import { useMovieCardContext } from './MovieCardContext';

function MovieCardImage() {
  const { movie } = useMovieCardContext();
  return (
    <div className="relative z-10 basis-1/2 overflow-hidden">
      {!movie.image ? (
        <FaFilm className="w-16 h-16 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-light/30" />
      ) : (
        <>
          <Image
            src={movie.image}
            alt={movie.title || ''}
            width={200}
            height={200}
            loading="lazy"
            decoding="async"
            className="w-full h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </>
      )}
    </div>
  );
}

export default MovieCardImage;
