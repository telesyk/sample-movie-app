export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const { linkEmbed, errorMessage } = await import(
      `@/imdb_api_data/Movie/${id}/Trailer\ ${id}.json`
    );

    if (errorMessage === '') {
      const body: object = linkEmbed;
      const myOptions = { status: 200, statusText: 'Trailer link loaded' };

      return new Response(JSON.stringify(body), myOptions);
    }
    throw new Error(`Trailer not found for ${id} movie. \n${errorMessage}\n`);
  } catch (error) {
    console.error('Fail fetching data\n', error);
  }
}
