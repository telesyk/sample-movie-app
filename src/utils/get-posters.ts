import { ENDPOINT } from '@/constants';

async function getPosters(id: string) {
  const res = await fetch(ENDPOINT.mock.moviePoster(id));

  if (!res.ok) {
    throw new Error(`Failed loading movie ${id} posters`);
  }

  return res.json();
}

export default getPosters;
