import { ENDPOINT, NOTIFICATION } from '@/constants';

async function getTitle(id: string) {
  try {
    const res = await fetch(ENDPOINT.mock.movieTitle(id));

    if (res.ok) return res.json();

    throw new Error(`Error [getTitle]\n ${id}\n`);
  } catch (error) {
    console.error(NOTIFICATION.error.fetchData, error);
    return null;
  }
}

export default getTitle;
