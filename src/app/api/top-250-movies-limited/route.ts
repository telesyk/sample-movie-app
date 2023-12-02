import { getRandomIntMax } from '@/utils';
import { moviesListLength, maxMoviesLength } from '@/constants';

export async function GET(request: Request) {
  const { items } = await import('@/imdb_api_data/Others/Top250Movies.json');
  const minNum = getRandomIntMax(maxMoviesLength);
  const body: object = [...items].slice(minNum, minNum + moviesListLength);
  const myOptions = { status: 200, statusText: 'Mock data loaded' };

  return new Response(JSON.stringify(body), myOptions);
}
