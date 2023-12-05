export default function Loading() {
  return (
    <div className="animate animate-pulse p-8 h-full w-full flex flex-wrap gap-8 rounded-lg bg-zinc-600/50">
      <div className="h-[50vh] w-full rounded-xl bg-zinc-800/40"></div>
      <div className="h-8 w-3/5 rounded-xl bg-zinc-800/40"></div>
      <div className="h-8 w-2/5 rounded-xl bg-zinc-800/40"></div>
      <div className="h-8 w-1/2 rounded-xl bg-zinc-800/40"></div>
      <div className="h-8 w-3/4 rounded-xl bg-zinc-800/40"></div>
    </div>
  );
}
