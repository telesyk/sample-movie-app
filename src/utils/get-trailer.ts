import { ENDPOINT } from '@/constants';

async function getTrailer(id: string) {
  try {
    const res = await fetch(ENDPOINT.mock.movieTrailer(id));
    return res.json();
  } catch (error) {
    console.error(`${error}.\n Can't load movie ${id} trailer`);
    console.error(`Failed loading trailer [getTrailer]\n ${id}\n`, error);
    return null;
  }
}

export default getTrailer;
