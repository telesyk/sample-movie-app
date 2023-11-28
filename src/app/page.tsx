import { fetchData } from '@/utils';
import MovieList from '@/components/MovieList';

async function Home() {
  const dataDefault = await fetchData('default');
  const dataTopRated = await fetchData('toprated');

  return (
    <>
      <MovieList data={dataTopRated} title="Top rated:" />
      <MovieList data={dataDefault} title="Most viwed:" />
    </>
  );
}

export default Home;
