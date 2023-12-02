import { getMovies, getTitle, getTrailer, getRandomIntMax } from '@/utils';
import MovieList from '@/components/MovieList';
import MoviePromo from '@/components/MoviePromo';

async function Home() {
  const dataAllTopRated = await getMovies();
  const dataTheaters = await getMovies('intheaters');
  const dataSoon = await getMovies('comingsoon');
  const dataPopular = await getMovies('mostpopular');

  const randomInt = getRandomIntMax(249);
  const promoMovieData = dataAllTopRated[randomInt];
  const promoMovieTrailer = await getTrailer(promoMovieData.id);
  const promoMovieTitle = await getTitle(promoMovieData.id);
  //
  // /* DEBUG */ console.log('[trailer to prom]', promoMovieTrailer);

  const promoMovieDetails = {
    ...promoMovieData,
    ...promoMovieTitle,
    trailer: promoMovieTrailer,
  };

  return (
    <>
      <MoviePromo {...promoMovieDetails} />
      <MovieList data={dataTheaters} title="In theaters:" />
      <MovieList data={dataSoon} title="Coming soon:" />
      <MovieList data={dataPopular} title="Most popular:" />
      {/* <MovieList data={dataTopRated} title="Top rated:" /> */}
    </>
  );
}

export default Home;
