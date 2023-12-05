import { getRandomIntMax } from '@/utils';
import { moviesListLength, maxMoviesLength } from '@/constants';

export async function GET(request: Request) {
  try {
    const { items, errorMessage } = await import(
      '@/imdb_api_data/Others/InTheaters.json'
    );
    if (errorMessage === '') {
      const minNum = getRandomIntMax(maxMoviesLength);
      const body: object = [...items].slice(minNum, minNum + moviesListLength);
      const myOptions = { status: 200, statusText: 'In Theaters data loaded' };

      return new Response(JSON.stringify(body), myOptions);
    }
    throw new Error(`In Theaters list failed loading. \n${errorMessage}\n`);
  } catch (error) {
    console.error('Fail fetching data\n', error);
  }
}
