import { fetchData } from '@/utils';
import MovieList from '@/components/MovieList';
import MoviePromo from '@/components/MoviePromo';

async function Home() {
  const dataDefault = await fetchData('default');
  const dataTopRated = await fetchData('toprated');

  return (
    <>
      <MoviePromo image={dataTopRated[0].image} title={dataTopRated[0].title} />
      <MovieList data={dataTopRated} title="Top rated:" />
      <MovieList data={dataDefault} title="Most viwed:" />
    </>
  );
}

export default Home;
