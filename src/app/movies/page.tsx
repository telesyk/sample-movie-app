// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
// };
import MovieCard from '@/components/MovieCard';
import MovieCardInfo from '@/components/MovieCard/MovieCardInfo';
import MovieCardImage from '@/components/MovieCard/MovieCardImage';
import { MovieType } from '@/types';
import { fetchData } from '@/utils';

async function Movies() {
  const data = await fetchData();

  return (
    <main className="px-4 py-8">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-2xl">Movies! wsap!!</h1>
        {data && data.length ? (
          <div className="my-8 flex gap-4 flex-wrap">
            {data.map((movie: MovieType) => (
              <MovieCard key={movie.id} movie={movie}>
                <MovieCardImage />
                <MovieCardInfo />
              </MovieCard>
            ))}
          </div>
        ) : (
          <p>Data loading</p>
        )}
      </div>
    </main>
  );
}

export default Movies;
