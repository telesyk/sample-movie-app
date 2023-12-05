import { ENDPOINT, NOTIFICATION } from '@/constants';

async function getPosters(id: string) {
  try {
    const res = await fetch(ENDPOINT.mock.moviePoster(id));

    if (!res.ok) {
      throw new Error(`Error [getPosters]\n ${id}\n`);
    }

    return res.json();
  } catch (error) {
    console.error(NOTIFICATION.error.fetchData, error);
  }
}

export default getPosters;
