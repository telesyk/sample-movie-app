import { ENDPOINT, NOTIFICATION } from '@/constants';

async function fetchData() {
  const res = await fetch(ENDPOINT.mock.limitProducts);
  if (!res.ok) {
    throw new Error(NOTIFICATION.error.fetchData);
  }

  return res.json();
}

export default fetchData;
