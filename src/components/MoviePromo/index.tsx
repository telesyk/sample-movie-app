import Image from 'next/image';
import { MovieType } from '@/types';

export default function MoviePromo({
  id,
  title,
  crew,
  trailer,
  image,
  imDbRating,
}: MovieType) {
  // const posterarr = await getPosters(id);
  /* DEbUG */ console.debug('[MoviePromo]', trailer);

  return (
    <div className="relative w-full min-h-96 max-h-[75vh] mt-4 mb-12 overflow-hidden">
      <div className="relative flex flex-col md:flex-row justify-center gap-4">
        <div className="text-2xl py-4 px-3 md:absolute top-0 left-0 right-0 md:bg-gradient-to-b md:from-custom-grey-800 md:to-transparent">
          {title}
        </div>
        {!!trailer && (
          <div className="text-2xl md:basis-2/3 md:order-2">
            <embed type="video/webm" src={trailer} width="450" height="200" />
          </div>
        )}

        <div className="text-2xl md:basis-1/3 md:order-1">
          <Image
            src={image || ''}
            alt={title || ''}
            width={300}
            height={300}
            className="min-w-full"
          />
        </div>
      </div>
    </div>
  );
}
