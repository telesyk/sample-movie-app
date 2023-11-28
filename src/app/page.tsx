import MovieCard from '@/components/MovieCard';
import MovieCardInfo from '@/components/MovieCard/MovieCardInfo';
import MovieCardImage from '@/components/MovieCard/MovieCardImage';
import { MovieType } from '@/types';
import { fetchData } from '@/utils';

async function Movies() {
  const mostViewed = await fetchData();
  const topRated = await fetchData();
  const mostNew = await fetchData();

  return (
    <>
      {mostViewed && mostViewed.length ? (
        <>
          <h1 className="text-2xl">Most viewed:</h1>
          <div className="my-8 flex gap-4 overflow-x-auto">
            {mostViewed.map((movie: MovieType) => (
              <MovieCard key={movie.id} movie={movie}>
                <MovieCardImage />
                <MovieCardInfo />
              </MovieCard>
            ))}
          </div>
        </>
      ) : (
        <p>Data loading</p>
      )}
      {topRated && topRated.length ? (
        <>
          <h1 className="text-2xl">Top rated:</h1>
          <div className="my-8 flex gap-4 overflow-x-auto">
            {topRated.map((movie: MovieType) => (
              <MovieCard key={movie.id} movie={movie}>
                <MovieCardImage />
                <MovieCardInfo />
              </MovieCard>
            ))}
          </div>
        </>
      ) : (
        <p>Data loading</p>
      )}
      {mostNew && mostNew.length ? (
        <>
          <h1 className="text-2xl">Latest:</h1>
          <div className="my-8 flex gap-4 overflow-x-auto">
            {mostNew.map((movie: MovieType) => (
              <MovieCard key={movie.id} movie={movie}>
                <MovieCardImage />
                <MovieCardInfo />
              </MovieCard>
            ))}
          </div>
        </>
      ) : (
        <p>Data loading</p>
      )}
    </>
  );
}

export default Movies;
