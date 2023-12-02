export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const { posters } = await import(
    `@/imdb_api_data/Movie/${id}/Posters\ ${id}.json`
  );
  const body: object = [...posters] || {
    message: `Posters not found for ${id} movie`,
  };
  const myOptions = { status: 200, statusText: 'Mock data loaded' };

  return new Response(JSON.stringify(body), myOptions);
}
