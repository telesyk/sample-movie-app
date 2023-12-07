import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { getMovies, getRandomIntMax, getTitle, getTrailer } from '@/utils';

export default async function MoviePromo(): Promise<ReactElement<any, any>> {
  const allTopMovies = await getMovies();
  const randomInt = getRandomIntMax(249);
  const promoMovieData = allTopMovies[randomInt];
  const promoMovieTrailer = await getTrailer(promoMovieData.id);
  const promoMovieTitle = await getTitle(promoMovieData.id);
  const promoMovieDetails = {
    ...promoMovieData,
    ...promoMovieTitle,
    trailer: promoMovieTrailer,
  };

  return (
    <div className="relative w-full md:min-h-96 md:max-h-[75vh] mt-4 mb-12 overflow-hidden">
      <div className="md:grid grid-cols-2 xl:grid-cols-3 auto-rows-min gap-4 py-5">
        <div className="order-2 xl:col-span-2 text-2xl xl:text-4xl pb-5 px-3 md:p-0 md:bg-gradient-to-b md:from-custom-grey-800 md:to-transparent">
          <Link href={`/${promoMovieDetails.id}`}>
            {promoMovieDetails.fullTitle}
          </Link>
        </div>

        <div className="order-1 row-span-3">
          <Link href={`/${promoMovieDetails.id}`}>
            <Image
              src={promoMovieDetails.image || ''}
              alt={promoMovieDetails.title || ''}
              width={300}
              height={300}
              className="min-w-full"
            />
          </Link>
        </div>

        <div className="order-3 xl:col-span-2 text-sm">
          <div className="py-2">
            <p className="text-bold">Crew: </p>
            <p className="text-gray-50/70">{promoMovieDetails.crew}</p>
          </div>
          {promoMovieDetails.plot && (
            <div className="py-2">
              <p className="text-bold">Plot: </p>
              <p className="text-gray-50/70">{promoMovieDetails.plot}</p>
            </div>
          )}
          {promoMovieDetails.runtimeStr && (
            <div className="py-2">
              <p className="text-bold">Duration: </p>
              <p className="text-gray-50/70">{promoMovieDetails.runtimeStr}</p>
            </div>
          )}
        </div>

        {promoMovieDetails.trailer !== undefined && (
          <div className="order-4 xl:col-span-2">
            <embed
              type="video/webm"
              src={promoMovieDetails.trailer}
              width="480"
              height="210"
            />
          </div>
        )}
      </div>
    </div>
  );
}
