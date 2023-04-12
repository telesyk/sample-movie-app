import React from 'react';
import { MovieInfo } from '@/types';

function MovieCardInfo({ title }: MovieInfo) {
  return (
    <div className="pt-4 px-2 h-14 w-full absolute z-20 left-0 bottom-0 line-clamp-2 leading-4 backdrop-blur-sm bg-custom-grey-800/50">
      <span className="text-sm">{title}</span>
    </div>
  );
}

export default MovieCardInfo;
