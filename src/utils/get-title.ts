import { ENDPOINT } from '@/constants';

async function getTitle(id: string) {
  try {
    const res = await fetch(ENDPOINT.mock.movieTitle(id));
    return res.json();
  } catch (error) {
    console.error(`Failed loading movie details [getTitle]\n ${id}\n`, error);
    return null;
  }
}

export default getTitle;
