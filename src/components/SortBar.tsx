
type SortKey = "price" | "title";
type SortDir = "asc" | "desc";

type Props = {
  sortKey: SortKey;
  sortDir: SortDir;
  onChange: (k: SortKey, d: SortDir) => void;
  disabled?: boolean;
};

export default function SortBar({ sortKey, sortDir, onChange, disabled }: Props) {
  return (
    <div className="flex items-center gap-2">
      <select
        disabled={disabled}
        className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
        value={sortKey}
        onChange={(e) => onChange(e.target.value as SortKey, sortDir)}
      >
        <option value="price">Price</option>
        <option value="title">Title</option>
      </select>
      <select
        disabled={disabled}
        className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
        value={sortDir}
        onChange={(e) => onChange(sortKey, e.target.value as SortDir)}
      >
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}
