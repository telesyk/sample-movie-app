import React from 'react';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import { getSingleMovie } from '@/utils';

type SingleMovieProps = {
  movieId: string;
  title: string;
  fullTitle?: string;
  image: string;
  year?: number;
  imDbRating: number;
  imDbRatingCount?: number;
  stars: string;
  directors?: string;
  writers?: string;
  plot: string;
};

async function MoviePage({ params }: { params: { movieId: string } }) {
  const data = await getSingleMovie(params.movieId);
  console.log('debug 2', data);

  const renderMovieDetails = (movieData: SingleMovieProps) => {
    const {
      title,
      fullTitle,
      image,
      year,
      imDbRating,
      imDbRatingCount,
      stars,
      directors,
      writers,
      plot,
    } = movieData;

    return (
      <>
        <h1 className="text-3xl text-custom-light/80">{fullTitle || title}</h1>
        <div className="flex items-center flex-col sm:flex-row sm:items-start gap-4 py-4 lg:py-8">
          <Image
            src={image}
            alt={title || ''}
            width={200}
            height={200}
            className="w-fit h-auto basis-1 sm:basis-1/2 md:basis-1/3"
          />
          <div className="basis-1 sm:basis-1/2 md:basis-2/3">
            <p className="flex gap-2 items-center py-4 text-2xl">
              <FaImdb />
              {imDbRating} (
              <span className="text-sm text-custom-light/80">
                {imDbRatingCount}
              </span>
              )
            </p>
            <p>
              Year: <span className="text-custom-light/80">{year}</span>
            </p>
            <p className="py-4">
              Stars:{' '}
              <span className="text-custom-light/80 italic">{stars}</span>
            </p>
            <p className="">
              Directors:{' '}
              <span className="text-custom-light/80 italic">{directors}</span>
            </p>
            <p className="py-4">
              Writers:{' '}
              <span className="text-custom-light/80 italic">{writers}</span>
            </p>
            <p className="py-4">
              <span className="text-custom-light/80 italic">{plot}</span>
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {!data || !data.length ? (
        <div className="animate animate-pulse p-8 h-full w-full flex flex-wrap gap-8 rounded-lg bg-zinc-600/50">
          <div className="h-[50vh] w-full rounded-xl bg-zinc-800/40"></div>
          <div className="h-8 w-3/5 rounded-xl bg-zinc-800/40"></div>
          <div className="h-8 w-2/5 rounded-xl bg-zinc-800/40"></div>
          <div className="h-8 w-1/2 rounded-xl bg-zinc-800/40"></div>
          <div className="h-8 w-3/4 rounded-xl bg-zinc-800/40"></div>
        </div>
      ) : (
        renderMovieDetails(data)
      )}
    </div>
  );
}

export default MoviePage;
