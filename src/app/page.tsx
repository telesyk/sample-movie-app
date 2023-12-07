import { Suspense } from 'react';
import MovieList from '@/components/MovieList';
import MoviePromo from '@/components/MoviePromo';
import PromoLoading from '@/components/MoviePromo/PromoLoading';
import ItemListLoading from '@/components/MovieList/ItemListLoading';

const lists = [
  {
    type: 'intheaters',
    title: 'In Theaters',
  },
  {
    type: 'comingsoon',
    title: 'Coming Soon',
  },
  {
    type: 'mostpopular',
    title: 'Most Popular',
  },
];

async function Home() {
  return (
    <>
      <Suspense fallback={<PromoLoading />}>
        {/* https://github.com/vercel/next.js/issues/42292 */}
        {/* @ts-expect-error Server Component */}
        <MoviePromo />
      </Suspense>
      {lists.map((list: any) => (
        <Suspense key={list.title} fallback={<ItemListLoading />}>
          {/* https://github.com/vercel/next.js/issues/42292 */}
          {/* @ts-expect-error Server Component */}
          <MovieList type={list.type} listTitle={list.title} />
        </Suspense>
      ))}
    </>
  );
}

export default Home;
