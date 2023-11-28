import Image from 'next/image';
import { MovieImageType } from '@/types';

export default function MoviePromo({ title, image = '' }: MovieImageType) {
  return (
    <div className="relative w-full min-h-96 max-h-[75vh] mt-4 mb-12 overflow-hidden">
      <Image
        src={image}
        alt={title || ''}
        width={300}
        height={300}
        className="min-w-full"
      />
    </div>
  );
}
