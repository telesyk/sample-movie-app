import ItemLoading from './ItemLoading';

const mockItems: number[] = [1, 2, 3];

export default function ItemListLoading() {
  return (
    <>
      {mockItems.map((item: number) => (
        <ItemLoading key={item} index={item + 1} />
      ))}
    </>
  );
}
