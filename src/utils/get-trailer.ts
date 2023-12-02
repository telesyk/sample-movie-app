import { ENDPOINT } from '@/constants';

async function getTrailer(id: string) {
  try {
    const res = await fetch(ENDPOINT.mock.movieTrailer(id));
    return res.json();
  } catch (error) {
    console.error(`${error}.\n Can't load movie ${id} trailer`);
    return null;
  }
}

export default getTrailer;
