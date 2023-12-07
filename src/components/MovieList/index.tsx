import { MovieType, EndpointType } from '@/types';
import MovieCard from '@/components/MovieCard';
import MovieCardInfo from '@/components/MovieCard/MovieCardInfo';
import MovieCardImage from '@/components/MovieCard/MovieCardImage';
import { getMovies } from '@/utils';

export default async function MovieList({
  type = '',
  listTitle,
}: {
  type: EndpointType;
  listTitle: string;
}) {
  const movies = await getMovies(type);

  return (
    <>
      {movies && movies.length && (
        <>
          <h1 className="text-2xl">{listTitle}</h1>
          <div className="my-8 flex gap-4 overflow-x-auto">
            {movies.map((movie: MovieType) => (
              <MovieCard key={movie.id} movie={movie}>
                <MovieCardImage />
                <MovieCardInfo />
              </MovieCard>
            ))}
          </div>
        </>
      )}
    </>
  );
}
