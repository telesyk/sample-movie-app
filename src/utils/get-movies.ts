import { ENDPOINT, NOTIFICATION } from '@/constants';

async function fetchData(endpoint: any) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(NOTIFICATION.error.fetchData);
  }

  return res.json();
}

async function getMovies(
  type?: null | '' | 'comingsoon' | 'intheaters' | 'mostpopular' | 'toprated'
) {
  switch (type) {
    case 'comingsoon':
      return await fetchData(ENDPOINT.mock.comingSoon);
    case 'intheaters':
      return await fetchData(ENDPOINT.mock.inTheaters);
    case 'mostpopular':
      return await fetchData(ENDPOINT.mock.mostPopular);
    case 'toprated':
      return await fetchData(ENDPOINT.mock.top250moviesLimited);
    default:
      return await fetchData(ENDPOINT.mock.top250movies);
  }
}

export default getMovies;
