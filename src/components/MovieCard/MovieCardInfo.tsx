import React from 'react';
import { MovieInfo } from './MovieCardType';

function MovieCardInfo({ title }: MovieInfo) {
  return (
    <div className="py-4 px-2 absolute left-0 bottom-0 w-full bg-custom-grey-800/50">
      <span className="text-sm">{title}</span>
    </div>
  );
}

export default MovieCardInfo;
