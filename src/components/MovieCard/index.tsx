'use client';

import Link from 'next/link';
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
      <Link
        className="h-[160px] lg:h-[200px] basis-72 lg:basis-80 grow shrink-0 relative rounded-md overflow-hidden bg-custom-light/30"
        href={`/${movie.id}`}
      >
        <div className="flex relative h-full">{children}</div>
      </Link>
    </MovieCardProvider>
  );
}

export default MovieCard;
