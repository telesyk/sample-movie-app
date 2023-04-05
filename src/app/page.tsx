// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
// };

import TestComponent from '@/components/Test';
import { Props2 } from '@/components/Test/testTypes';

async function getData() {
  const res = await fetch('https://dummyjson.com/products/category/laptops');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  // fetch('https://imdb-api.com/en/API/Title/k_1234567/tt1832382', requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  // let data = {};
  const data = await getData();

  return (
    <main className="px-4 py-8">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-2xl">Hey you! wsap!!</h1>
        <div className="py-6 flex gap-6 flex-wrap">
          {data.products.map((product: Props2) => (
            <TestComponent key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
