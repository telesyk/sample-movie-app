export interface MovieInfoType {
  title?: string;
}

export interface MovieImageType extends MovieInfoType {
  image?: string;
}

export interface MovieType extends MovieImageType {
  id: string;
  rank?: string | number;
  rankUpDown?: string | number;
  fullTitle?: string;
  year?: string | number;
  crew?: string;
  imDbRating?: string | number;
  imDbRatingCount?: string | number;
  plot?: string;
  trailer?: string;
  runtimeStr?: string;
}
