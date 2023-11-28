import { ENDPOINT, NOTIFICATION } from '@/constants';
import TestComponent from '@/components/Test';
import { Props2 } from '@/components/Test/testTypes';

async function getData() {
  const res = await fetch(ENDPOINT.test.products);
  if (!res.ok) {
    throw new Error(NOTIFICATION.error.fetchData);
  }

  return res.json();
}

async function Home() {
  const data = await getData();

  return (
    <>
      <h1 className="text-2xl">Hey you! wsap!!</h1>
      <div className="py-6 flex gap-6 flex-wrap">
        {data.products.map((product: Props2) => (
          <TestComponent key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;