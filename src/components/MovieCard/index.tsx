'use client';

import { ReactNode } from 'react';
import { MovieType } from '@/types';
import { MovieCardProvider } from './MovieCardContext';

type Props = {
  movie: MovieType;
  children?: ReactNode;
};

function MovieCard({ movie, children }: Props) {
  return (
    <MovieCardProvider movie={movie}>
      <a
        href={`/${movie.id}`}
        className="w-[280px] h-[160px] relative rounded-sm overflow-hidden bg-custom-light/30"
      >
        {children}
      </a>
    </MovieCardProvider>
  );
}

export default MovieCard;
