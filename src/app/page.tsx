import { getMovies, getPosters, getTrailer, getRandomIntMax } from '@/utils';
import MovieList from '@/components/MovieList';
import MoviePromo from '@/components/MoviePromo';

async function Home() {
  const dataAllTopRated = await getMovies();
  const dataTheaters = await getMovies('intheaters');
  const dataSoon = await getMovies('comingsoon');
  const dataPopular = await getMovies('mostpopular');

  const randomInt = getRandomIntMax(249);
  const promoMovieData = dataAllTopRated[randomInt];
  // const promoMoviePoster = await getPosters(promoMovieData.id);
  const promoMovieTrailer = await getTrailer(promoMovieData.id);
  //
  console.log('[movie to prom]', promoMovieData.title, promoMovieTrailer);

  return (
    <>
      <MoviePromo {...promoMovieData} trailer={promoMovieTrailer} />
      {/* <MovieList data={dataTheaters} title="In theaters:" />
      <MovieList data={dataSoon} title="Coming soon:" />
      <MovieList data={dataPopular} title="Most popular:" /> */}
      {/* <MovieList data={dataTopRated} title="Top rated:" /> */}
    </>
  );
}

export default Home;
