'use client';

import { useMovieCardContext } from './MovieCardContext';

function MovieCardInfo() {
  const { movie } = useMovieCardContext();
  return (
    <div className="pt-4 px-2 h-full basis-1/2 relative z-20 line-clamp-2 leading-4 bg-zinc-700">
      <span className="text-sm">{movie.title}</span>
    </div>
  );
}

export default MovieCardInfo;
