export async function GET(request: Request) {
  const { items } = await import('@/mock-data.json');
  const body: object = [...items].slice(0, 10);
  const myOptions = { status: 200, statusText: 'Mock data loaded' };

  return new Response(JSON.stringify(body), myOptions);
}
