import React from 'react';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import { MovieType } from '@/types';
import { fetchData } from '@/utils';

async function MoviePage({ params }: { params: { movieId: string | number } }) {
  const data = await fetchData();

  const renderMovieDetails = () => {
    const currentMovie = data.find(
      (item: MovieType) => item.id === params.movieId
    );
    // console.debug(currentMovie);
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
        <Image
          src={image}
          alt={title || ''}
          width={200}
          height={200}
          className=" w-fit h-auto"
        />
        <p>
          Position: {rank} (
          <span className="text-sm text-custom-light/80">{rankUpDown}</span>)
        </p>
        <p>Year: {year}</p>
        <p>Crew: {crew}</p>
        <p className="flex gap-2 items-center">
          <FaImdb />
          {imDbRating} (
          <span className="text-sm text-custom-light/80">
            {imDbRatingCount}
          </span>
          )
        </p>
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
