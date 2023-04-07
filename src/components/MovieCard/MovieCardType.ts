export interface MovieInfo {
  title: string;
}

export interface MovieImage extends MovieInfo {
  image?: string;
}

export interface Movie extends MovieImage {
  id?: string;
  rank?: number | string;
  rankUpDown?: number | string;
  fullTitle?: string;
  year?: number | string;
  crew?: string;
  imDbRating?: number | string;
  imDbRatingCount?: number | string;
}
