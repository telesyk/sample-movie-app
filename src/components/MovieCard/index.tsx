import React, { ReactNode } from 'react';
import MovieCardImage from './MovieCardImage';
import MovieCardInfo from './MovieCardInfo';

type Props = {
  imageSlot?: ReactNode;
  infoSlot?: ReactNode;
};

function MovieCard({ imageSlot, infoSlot }: Props) {
  return (
    <div className="w-[280px] h-[160px] relative rounded-sm overflow-hidden bg-custom-light/30">
      {imageSlot}
      {infoSlot}
    </div>
  );
}

MovieCard.Image = MovieCardImage;
MovieCard.Info = MovieCardInfo;

export default MovieCard;
