export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const {
      fullTitle,
      releaseDate,
      runtimeStr,
      plot,
      awards,
      stars,
      directors,
      writers,
      genres,
      companies,
      countries,
      languages,
      contentRating,
      errorMessage,
    } = await import(`@/imdb_api_data/Movie/${id}/Title\ ${id}.json`);

    if (errorMessage === '') {
      const body: object = {
        fullTitle,
        releaseDate,
        runtimeStr,
        plot,
        awards,
        stars,
        directors,
        writers,
        genres,
        companies,
        countries,
        languages,
        contentRating,
      };
      const myOptions = { status: 200, statusText: 'Title data loaded' };

      return new Response(JSON.stringify(body), myOptions);
    }
    throw new Error(`Title was not found for ${id} movie. \n${errorMessage}\n`);
  } catch (error) {
    console.error('Fail fetching data\n', error);
  }
}
