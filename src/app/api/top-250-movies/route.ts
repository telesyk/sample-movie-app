export async function GET(request: Request) {
  const { items } = await import('@/imdb_api_data/Others/Top250Movies.json');
  const body: object = [...items];
  const myOptions = { status: 200, statusText: 'Mock data loaded' };

  return new Response(JSON.stringify(body), myOptions);
}
