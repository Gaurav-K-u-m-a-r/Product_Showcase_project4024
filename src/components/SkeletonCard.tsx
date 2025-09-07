
export default function SkeletonCard() {
  return (
    <div className="card p-3 animate-pulse">
      <div className="aspect-[4/3] w-full rounded-xl bg-gray-200" />
      <div className="mt-3 h-4 w-3/4 rounded bg-gray-200" />
      <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
      <div className="mt-4 h-9 w-28 rounded-lg bg-gray-200" />
    </div>
  );
}
