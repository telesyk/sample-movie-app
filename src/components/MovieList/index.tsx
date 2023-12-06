import MovieCard from '@/components/MovieCard';
import MovieCardInfo from '@/components/MovieCard/MovieCardInfo';
import MovieCardImage from '@/components/MovieCard/MovieCardImage';
import { MovieType } from '@/types';
import ItemListLoading from './ItemListLoading';

export default function MovieList({
  data,
  listTitle,
}: {
  data: any;
  listTitle: string;
}) {
  return (
    <>
      {data && data.length ? (
        <>
          <h1 className="text-2xl">{listTitle}</h1>
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
        <div className="my-8 flex gap-4">
          <ItemListLoading />
        </div>
      )}
    </>
  );
}
