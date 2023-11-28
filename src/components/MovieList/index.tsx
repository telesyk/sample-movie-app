import MovieCard from '@/components/MovieCard';
import MovieCardInfo from '@/components/MovieCard/MovieCardInfo';
import MovieCardImage from '@/components/MovieCard/MovieCardImage';
import { MovieType } from '@/types';

export default function MovieList({
  data,
  title,
}: {
  data: any;
  title: string;
}) {
  return (
    <>
      {data && data.length ? (
        <>
          <h1 className="text-2xl">{title}</h1>
          <div className="my-8 flex gap-4 overflow-x-auto">
            {data.map((movie: MovieType) => (
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
