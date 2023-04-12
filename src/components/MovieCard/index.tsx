import React, { ReactNode } from 'react';
import MovieCardImage from './MovieCardImage';
import MovieCardInfo from './MovieCardInfo';

type Props = {
  id: string | number;
  imageSlot?: ReactNode;
  infoSlot?: ReactNode;
};

function MovieCard({ id, imageSlot, infoSlot }: Props) {
  return (
    <a
      href={`/${id}`}
      className="w-[280px] h-[160px] relative rounded-sm overflow-hidden bg-custom-light/30"
    >
      {imageSlot}
      {infoSlot}
    </a>
  );
}

MovieCard.Image = MovieCardImage;
MovieCard.Info = MovieCardInfo;

export default MovieCard;
