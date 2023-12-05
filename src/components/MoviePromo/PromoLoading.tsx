export default function PromoLoading() {
  return (
    <div className="animate animate-pulse my-8 p-8 h-full w-full flex flex-col md:flex-row md:items-start rounded-lg bg-zinc-600/50">
      <div className="basis-1/2">
        <div className="h-[25vh] md:h-[50vh] w-full rounded-xl bg-zinc-800/40"></div>
      </div>
      <div className="basis-1/2 flex flex-wrap gap-4 md:gap-8 p-4">
        <div className="h-4 md:h-8 w-3/5 rounded-xl bg-zinc-800/40"></div>
        <div className="h-4 md:h-8 w-2/5 rounded-xl bg-zinc-800/40"></div>
        <div className="h-4 md:h-8 w-1/2 rounded-xl bg-zinc-800/40"></div>
        <div className="h-4 md:h-8 w-3/4 rounded-xl bg-zinc-800/40"></div>
      </div>
    </div>
  );
}
