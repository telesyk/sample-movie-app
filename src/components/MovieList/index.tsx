import MovieCard from '@/components/MovieCard';
import MovieCardInfo from '@/components/MovieCard/MovieCardInfo';
import MovieCardImage from '@/components/MovieCard/MovieCardImage';
import { MovieType } from '@/types';

const mockItems: number[] = [1, 2, 3];

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
        <div className="my-8 flex gap-4">
          {mockItems.map((item: number) => (
            <div
              key={item}
              className="animate animate-pulse p-4 h-[160px] lg:h-[200px] w-[320px] flex flex-wrap gap-4 rounded-lg bg-zinc-600/50"
            >
              <div className="h-[70%] w-full rounded-xl bg-zinc-800/40"></div>
              <div className="h-2 w-2/5 rounded-xl bg-zinc-800/40"></div>
              <div className="h-2 w-2/5 rounded-xl bg-zinc-800/40"></div>
              <div className="h-2 w-1/2 rounded-xl bg-zinc-800/40"></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
