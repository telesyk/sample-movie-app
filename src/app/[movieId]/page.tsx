import React from 'react';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import { MovieType } from '@/types';
import { getMovies } from '@/utils';

async function MoviePage({ params }: { params: { movieId: string | number } }) {
  const data = await getMovies();

  const renderMovieDetails = () => {
    const currentMovie = data.find(
      (item: MovieType) => item.id === params.movieId
    );

    const {
      title,
      fullTitle,
      image,
      rank,
      rankUpDown,
      year,
      crew,
      imDbRating,
      imDbRatingCount,
    } = currentMovie;

    return (
      <>
        <h1 className="text-4xl">{title || ''}</h1>
        <h2 className="text-xl text-custom-light/80">{fullTitle}</h2>
        <div className="flex items-center flex-col sm:flex-row sm:items-start gap-4 py-4 lg:py-8">
          <Image
            src={image}
            alt={title || ''}
            width={200}
            height={200}
            className="w-fit h-auto basis-1 sm:basis-1/2 md:basis-1/3"
          />
          <div className="basis-1 sm:basis-1/2 md:basis-2/3">
            <p className="flex gap-2 items-center pt-4 text-2xl">
              <FaImdb />
              {imDbRating} (
              <span className="text-sm text-custom-light/80">
                {imDbRatingCount}
              </span>
              )
            </p>
            <p className="pb-4 pt-2">
              Position: {rank} (
              <span className="text-sm text-custom-light/80">{rankUpDown}</span>
              )
            </p>
            <p>
              Year: <span className="text-custom-light/80">{year}</span>
            </p>
            <p className="py-4">
              Crew: <span className="text-custom-light/80 italic">{crew}</span>
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      {!data && !data.length ? <p>Loading...</p> : renderMovieDetails()}
    </div>
  );
}

export default MoviePage;
