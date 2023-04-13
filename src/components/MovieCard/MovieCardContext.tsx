'use client';

import { createContext, useContext, ReactNode } from 'react';
import { MovieType } from '@/types';

const MovieCardContext = createContext<{ movie: MovieType } | null>(null);

export const MovieCardProvider = ({
  movie,
  children,
}: {
  movie: MovieType;
  children: ReactNode;
}) => (
  <MovieCardContext.Provider value={{ movie }}>
    {children}
  </MovieCardContext.Provider>
);

export const useMovieCardContext = () => {
  const context = useContext(MovieCardContext);
  if (!context)
    throw new Error(
      'MovieCard.* component must be rendered as child of MovieCard component.'
    );
  return context;
};
