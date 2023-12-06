export default function ItemLoading({ index = 1 }: { index?: number }) {
  const animateDelay = 150 * index;
  const styles: any = {
    animationDelay: `${animateDelay}ms`,
  };

  return (
    <div className="p-4 h-[160px] lg:h-[200px] w-[320px] flex flex-wrap items-start rounded-lg bg-zinc-600/50">
      <div style={styles} className="animate animate-pulse basis-1/2 h-full">
        <div className="h-full w-full rounded-xl bg-zinc-800/40"></div>
      </div>
      <div
        style={styles}
        className="animate animate-pulse basis-1/2 flex flex-wrap gap-4 py-4 px-2"
      >
        <div className="h-2 w-1/4 rounded-xl bg-zinc-800/40"></div>
        <div className="h-2 w-2/5 rounded-xl bg-zinc-800/40"></div>
        <div className="h-2 w-1/3 rounded-xl bg-zinc-800/40"></div>
        <div className="h-2 w-3/5 rounded-xl bg-zinc-800/40"></div>
        <div className="h-2 w-2/3 rounded-xl bg-zinc-800/40"></div>
      </div>
    </div>
  );
}
