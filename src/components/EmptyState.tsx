
export default function EmptyState({ label = "No results found." }: { label?: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-600">
      {label}
    </div>
  );
}
