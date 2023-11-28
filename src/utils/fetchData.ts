import { ENDPOINT, NOTIFICATION } from '@/constants';

async function getData(endpoint: any) {
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(NOTIFICATION.error.fetchData);
  }

  return res.json();
}

async function fetchData(
  type?: '' | 'default' | 'latest' | 'mostviewed' | 'toprated'
) {
  switch (type) {
    case 'latest':
    case 'mostviewed':
    case 'toprated':
      return await getData(ENDPOINT.mock.limitList10);
    case 'default':
      return await getData(ENDPOINT.mock.limitList30);
    default:
      return await getData(ENDPOINT.mock.fullList);
  }
}

export default fetchData;
