// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
// };
import MovieCard from '@/components/MovieCard';
import { Movie } from '@/types';
import { fetchData } from '@/utils';

export default async function Movies() {
  const data = await fetchData();

  return (
    <main className="px-4 py-8">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-2xl">Movies! wsap!!</h1>
        {data && data.length ? (
          <div className="my-8 flex gap-4 flex-wrap">
            {data.map((movie: Movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                imageSlot={
                  <MovieCard.Image image={movie.image} title={movie.title} />
                }
                infoSlot={<MovieCard.Info title={movie.title} />}
              />
            ))}
          </div>
        ) : (
          <p>Data loading</p>
        )}
      </div>
    </main>
  );
}
