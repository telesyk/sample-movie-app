import { MovieType } from '@/types';
import getMovies from './get-movies';
import getTitle from './get-title';

export default async function getSingleMovie(id: string) {
  try {
    const allData = await getMovies();
    const titleData = await getTitle(id);
    const currentMovie = allData.find((item: MovieType) => {
      if (item.id === id)
        return {
          ...item,
          ...titleData,
        };
    });
    return currentMovie;
  } catch (error) {
    console.error(`Failed util [getSingleMovie]\n ${id}\n`, error);
    return null;
  }
}
