import ItemLoading from './ItemLoading';

const mockItems: number[] = [1, 2, 3];

export default function ItemListLoading() {
  return (
    <div className="my-8 flex gap-4 max-w-full overflow-x-visible">
      {mockItems.map((item: number) => (
        <ItemLoading key={item} index={item + 1} />
      ))}
    </div>
  );
}
