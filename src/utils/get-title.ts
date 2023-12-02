import { ENDPOINT } from '@/constants';

async function getTitle(id: string) {
  try {
    const res = await fetch(ENDPOINT.mock.movieTitle(id));
    return res.json();
  } catch (error) {
    console.error(`${error}.\n Can't load movie ${id} title details`);
    return null;
  }
}

export default getTitle;
