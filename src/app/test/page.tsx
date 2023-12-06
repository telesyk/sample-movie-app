import { ENDPOINT, NOTIFICATION } from '@/constants';
import TestComponent from '@/components/Test';
import { Props2 } from '@/components/Test/testTypes';
//
import PromoLoading from '@/components/MoviePromo/PromoLoading';
import Loading from '../[movieId]/Loading';
import ItemListLoading from '@/components/MovieList/ItemListLoading';

async function getData() {
  const res = await fetch(ENDPOINT.test.products);
  if (!res.ok) {
    throw new Error(NOTIFICATION.error.fetchData);
  }

  return res.json();
}

async function Test() {
  const data = await getData();

  return (
    <>
      <div className="flex flex-col gap-4 my-8">
        <p>Test ItemLoading for movie list</p>
        <div className="flex gap-4">
          <ItemListLoading />
        </div>
      </div>
      <div className="flex flex-col gap-4 my-8">
        <p>Test Loading for Promo</p>
        <PromoLoading />
      </div>
      <div className="flex flex-col gap-4 my-8">
        <p>Test Loading for SingleMovie page</p>
        <Loading />
      </div>

      <div className="py-6 flex gap-6 flex-wrap">
        {data.products.map((product: Props2) => (
          <TestComponent key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Test;
