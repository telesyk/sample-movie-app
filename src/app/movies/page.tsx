// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
// };
import { ENDPOINT, NOTIFICATION } from '@/constants';
import MovieCard from '@/components/MovieCard';
// import MovieCardImage from '@/components/MovieCard/MovieCardImage';
// import MovieCardInfo from '@/components/MovieCard/MovieCardInfo';
import { Movie } from '@/components/MovieCard/MovieCardType';

async function getData() {
  const res = await fetch(ENDPOINT.mock.limitProducts);
  if (!res.ok) {
    throw new Error(NOTIFICATION.error.fetchData);
  }

  return res.json();
}

export default async function Movies() {
  const data = await getData();

  return (
    <main className="px-4 py-8">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-2xl">Movies! wsap!!</h1>
        {data && data.length ? (
          <div className="my-8 flex gap-4 flex-wrap">
            {data.map((movie: Movie) => (
              <MovieCard
                key={movie.id}
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
