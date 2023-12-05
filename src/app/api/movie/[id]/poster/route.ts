export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const { posters, errorMessage } = await import(
      `@/imdb_api_data/Movie/${id}/Posters\ ${id}.json`
    );
    if (errorMessage === '') {
      const body: object = [...posters];
      const myOptions = { status: 200, statusText: 'Posters data loaded' };

      return new Response(JSON.stringify(body), myOptions);
    }
    throw new Error(`Posters not found for ${id} movie. \n${errorMessage}\n`);
  } catch (error) {
    console.error('Fail fetching data\n', error);
  }
}
