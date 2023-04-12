export interface MovieInfo {
  title: string;
}

export interface MovieImage extends MovieInfo {
  image?: string;
}

export interface Movie extends MovieImage {
  id: string | number;
  rank?: string | number;
  rankUpDown?: string | number;
  fullTitle?: string;
  year?: string | number;
  crew?: string;
  imDbRating?: string | number;
  imDbRatingCount?: string | number;
}
