import { ENDPOINT, NOTIFICATION } from '@/constants';

type EndpointType =
  | undefined
  | ''
  | 'comingsoon'
  | 'intheaters'
  | 'mostpopular'
  | 'toprated';

function movieEndpoint(type?: EndpointType) {
  switch (type) {
    case 'comingsoon':
      return ENDPOINT.mock.comingSoon;
    case 'intheaters':
      return ENDPOINT.mock.inTheaters;
    case 'mostpopular':
      return ENDPOINT.mock.mostPopular;
    case 'toprated':
      return ENDPOINT.mock.top250moviesLimited;
    default:
      return ENDPOINT.mock.top250movies;
  }
}

async function getMovies(endpointType?: EndpointType) {
  const endpointUrl = movieEndpoint(endpointType);
  try {
    const res = await fetch(endpointUrl);

    if (res.ok) return res.json();

    throw new Error(`Error [getMovies] ${endpointUrl}\n`);
  } catch (error) {
    console.error(NOTIFICATION.error.fetchData, error);
  }
}

export default getMovies;
