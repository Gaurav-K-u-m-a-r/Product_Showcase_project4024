
type Props = {
  page: number; // 1-indexed
  pageCount: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
};

export default function Pagination({ page, pageCount, onPageChange, disabled }: Props) {
  const canPrev = page > 1;
  const canNext = page < pageCount;

  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm disabled:opacity-50"
        onClick={() => canPrev && onPageChange(page - 1)}
        disabled={!canPrev || disabled}
      >
        Prev
      </button>
      <div className="text-sm text-gray-600">
        Page <span className="font-medium">{page}</span> of <span className="font-medium">{pageCount || 1}</span>
      </div>
      <button
        className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm disabled:opacity-50"
        onClick={() => canNext && onPageChange(page + 1)}
        disabled={!canNext || disabled}
      >
        Next
      </button>
    </div>
  );
}
