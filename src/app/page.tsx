import { getMovies } from '@/utils';
import MovieList from '@/components/MovieList';
import MoviePromo from '@/components/MoviePromo';
import PromoLoading from '@/components/MoviePromo/PromoLoading';
import { Suspense } from 'react';

async function Home() {
  const dataTheaters = await getMovies('intheaters');
  const dataSoon = await getMovies('comingsoon');
  const dataPopular = await getMovies('mostpopular');

  return (
    <>
      <Suspense fallback={<PromoLoading />}>
        {/* https://github.com/vercel/next.js/issues/42292 */}
        {/* @ts-expect-error Server Component */}
        <MoviePromo />
      </Suspense>
      <MovieList data={dataTheaters} title="In theaters:" />
      <MovieList data={dataSoon} title="Coming soon:" />
      <MovieList data={dataPopular} title="Most popular:" />
    </>
  );
}

export default Home;
