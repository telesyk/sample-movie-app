export async function GET(request: Request) {
  try {
    const { items, errorMessage } = await import(
      '@/imdb_api_data/Others/Top250Movies.json'
    );
    if (errorMessage === '') {
      const body: object = [...items];
      const myOptions = { status: 200, statusText: 'Data loaded' };

      return new Response(JSON.stringify(body), myOptions);
    }
    throw new Error(`${errorMessage}\n`);
  } catch (error) {
    console.error('Fail fetching data\n', error);
  }
}
