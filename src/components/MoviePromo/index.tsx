import Image from 'next/image';
import { MovieType } from '@/types';

export default function MoviePromo({
  id,
  title,
  fullTitle,
  crew,
  trailer,
  image,
  plot,
  runtimeStr,
}: MovieType) {
  return (
    <div className="relative w-full md:min-h-96 md:max-h-[75vh] mt-4 mb-12 overflow-hidden">
      <div className="md:grid grid-cols-2 xl:grid-cols-3 auto-rows-min gap-4 py-5">
        <div className="order-2 xl:col-span-2 text-2xl xl:text-4xl pb-5 px-3 md:p-0 md:bg-gradient-to-b md:from-custom-grey-800 md:to-transparent">
          {fullTitle}
        </div>

        <div className="order-1 row-span-3">
          <Image
            src={image || ''}
            alt={title || ''}
            width={300}
            height={300}
            className="min-w-full"
          />
        </div>

        <div className="order-3 xl:col-span-2 text-sm">
          <div className="py-2">
            <p className="text-bold">Crew: </p>
            <p className="text-gray-50/70">{crew}</p>
          </div>
          {plot && (
            <div className="py-2">
              <p className="text-bold">Plot: </p>
              <p className="text-gray-50/70">{plot}</p>
            </div>
          )}
          {runtimeStr && (
            <div className="py-2">
              <p className="text-bold">Duration: </p>
              <p className="text-gray-50/70">{runtimeStr}</p>
            </div>
          )}
        </div>

        {trailer !== undefined && (
          <div className="order-4 xl:col-span-2">
            <embed type="video/webm" src={trailer} width="480" height="210" />
          </div>
        )}
      </div>
    </div>
  );
}
