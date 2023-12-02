export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const {
    fullTitle,
    releaseDate,
    runtimeStr,
    plot,
    awards,
    directors,
    starsList,
    writerList,
  } = await import(`@/imdb_api_data/Movie/${id}/Title\ ${id}.json`);
  const body: object = {
    fullTitle,
    releaseDate,
    runtimeStr,
    plot,
    awards,
    directors,
    starsList,
    writerList,
  } || {
    message: `Title was not found for ${id} movie`,
  };
  const myOptions = { status: 200, statusText: 'Mock data loaded' };

  return new Response(JSON.stringify(body), myOptions);
}
