
type Props = {
  categories: string[];
  selected?: string;
  onSelect: (cat?: string) => void;
  loading?: boolean;
};

export default function Filters({ categories, selected, onSelect, loading }: Props) {
  return (
    <div className="flex gap-2 overflow-auto pb-1">
      <button
        disabled={loading}
        onClick={() => onSelect(undefined)}
        className={`px-4 py-2 rounded-full border ${!selected ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-200"} hover:opacity-90 shrink-0`}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c}
          disabled={loading}
          onClick={() => onSelect(c)}
          className={`px-4 py-2 rounded-full border capitalize shrink-0 ${selected === c ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-200"} hover:opacity-90`}
          title={c}
        >
          {c.replaceAll("-", " ")}
        </button>
      ))}
    </div>
  );
}
