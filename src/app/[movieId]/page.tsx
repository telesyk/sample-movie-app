import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import { getSingleMovie } from '@/utils';
import Loading from './Loading';

type SingleMovieProps = {
  movieId: string;
  title: string;
  image: string;
  plot: string;
  stars: string;
  imDbRating: number;
  fullTitle?: string;
  year?: number;
  imDbRatingCount?: number;
  awards?: string;
  directors?: string;
  writers?: string;
  genres?: string;
  companies?: string;
  countries?: string;
  languages?: string;
  contentRating?: string;
  error?: boolean;
  errorMessage?: string;
};

async function MoviePage({ params }: { params: { movieId: string } }) {
  const data = await getSingleMovie(params.movieId);

  const renderMovieData = (movieData: SingleMovieProps) => {
    if (movieData.error && movieData.errorMessage)
      return (
        <div className="my-4 opacity-75 text-sm">
          <code className="p-3 border border-slate-400 rounded-lg bg-slate-50/50">
            {data.errorMessage}
          </code>
        </div>
      );

    // console.debug('movieData debug', movieData);
    const {
      title,
      image,
      plot,
      stars,
      imDbRating,
      fullTitle,
      year,
      imDbRatingCount,
      awards,
      directors,
      writers,
      genres,
      companies,
      countries,
      languages,
      contentRating,
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
            <p className="py-4">
              <span className="text-custom-light/80 italic">{plot}</span>
            </p>
            <p className="">
              Directors:{' '}
              <span className="text-custom-light/80 italic">{directors}</span>
            </p>
            <p className="">
              Writers:{' '}
              <span className="text-custom-light/80 italic">{writers}</span>
            </p>
            <p className="py-4">
              Awards:{' '}
              <span className="text-custom-light/80 italic">{awards}</span>
            </p>
            <p className="">
              Genres:{' '}
              <span className="text-custom-light/80 italic">{genres}</span>
            </p>
            <p className="">
              Companies:{' '}
              <span className="text-custom-light/80 italic">{companies}</span>
            </p>
            <p className="">
              Countries:{' '}
              <span className="text-custom-light/80 italic">{countries}</span>
            </p>
            <p className="">
              Languages:{' '}
              <span className="text-custom-light/80 italic">{languages}</span>
            </p>
            <p className="">
              ContentRating:{' '}
              <span className="text-custom-light/80 italic">
                {contentRating}
              </span>
            </p>
          </div>
        </div>
      </>
    );
  };

  return <>{!data ? <Loading /> : renderMovieData(data)}</>;
}

export default MoviePage;
