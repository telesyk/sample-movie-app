import { getRandomIntMax } from '@/utils';

export async function GET(request: Request) {
  const { items } = await import('@/mock-data.json');
  const minNum = getRandomIntMax(70);
  const body: object = [...items].slice(minNum, minNum + 30);
  const myOptions = { status: 200, statusText: 'Mock data loaded' };

  return new Response(JSON.stringify(body), myOptions);
}
