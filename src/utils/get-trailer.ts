import { ENDPOINT } from '@/constants';

async function getTrailer(id: string) {
  const res = await fetch(ENDPOINT.mock.movieTrailer(id));

  if (!res.ok) {
    throw new Error(`Failed loading movie ${id} trailer`);
  }

  return res.json();
}

export default getTrailer;
