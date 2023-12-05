import { MovieType } from '@/types';
import getMovies from './get-movies';
import getTitle from './get-title';
import { NOTIFICATION } from '@/constants';

export default async function getSingleMovie(id: string) {
  try {
    const allData = await getMovies();
    const titleData = await getTitle(id);
    const currentMovie = allData.find((item: MovieType) => item.id === id);

    console.debug('getSingleMovie', { ...currentMovie, ...titleData });

    return { ...currentMovie, ...titleData };
  } catch (error) {
    console.error(`Failed util [getSingleMovie]\n ${id}\n`, error);
    return {
      error: true,
      errorMessage: NOTIFICATION.error.fetchData,
    };
  }
}
