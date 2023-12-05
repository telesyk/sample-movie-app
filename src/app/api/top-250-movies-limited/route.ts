import { getRandomIntMax } from '@/utils';
import { moviesListLength, maxMoviesLength } from '@/constants';

export async function GET(request: Request) {
  try {
    const { items, errorMessage } = await import(
      '@/imdb_api_data/Others/Top250Movies.json'
    );
    const minNum = getRandomIntMax(maxMoviesLength);
    if (errorMessage === '') {
      const body: object = [...items].slice(minNum, minNum + moviesListLength);
      const myOptions = {
        status: 200,
        statusText: 'Limited movies data loaded',
      };

      return new Response(JSON.stringify(body), myOptions);
    }
    throw new Error(`${errorMessage}\n`);
  } catch (error) {
    console.error('Fail fetching data\n', error);
  }
}
