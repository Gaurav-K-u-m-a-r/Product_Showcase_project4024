
export default function ErrorState({ message, onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800">
      <p className="font-medium">Something went wrong.</p>
      <p className="text-sm mt-1">{message ?? "Please try again."}</p>
      {onRetry && (
        <button onClick={onRetry} className="mt-4 px-4 py-2 rounded-lg bg-white border border-red-300 hover:bg-red-100">
          Retry
        </button>
      )}
    </div>
  );
}
