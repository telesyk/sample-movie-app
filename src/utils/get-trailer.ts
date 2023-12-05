import { ENDPOINT, NOTIFICATION } from '@/constants';

async function getTrailer(id: string) {
  try {
    const res = await fetch(ENDPOINT.mock.movieTrailer(id));

    if (res.ok) return res.json();

    throw new Error(`Error [getTrailer]\n ${id}\n`);
  } catch (error) {
    console.error(NOTIFICATION.error.fetchData, error);
    return null;
  }
}

export default getTrailer;
