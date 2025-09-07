
import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Filters from "@/components/Filters";
import SortBar from "@/components/SortBar";
import Pagination from "@/components/Pagination";
import ProductGrid from "@/components/ProductGrid";
import ProductDetailModal from "@/components/ProductDetailModal";
import SkeletonCard from "@/components/SkeletonCard";
import ErrorState from "@/components/ErrorState";
import EmptyState from "@/components/EmptyState";
import { fetchCategories, fetchProducts } from "@/lib/api";
import type { Product } from "@/types";

const PAGE_SIZE = 12;

type SortKey = "price" | "title";
type SortDir = "asc" | "desc";

export default function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [sortKey, setSortKey] = useState<SortKey>("price");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selected, setSelected] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch categories on mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const cats = await fetchCategories();
        if (mounted) setCategories(cats);
      } catch (e: any) {
        console.error(e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const skip = (page - 1) * PAGE_SIZE;
      const res = await fetchProducts({ limit: PAGE_SIZE, skip, category });
      setProducts(res.products);
      setTotal(res.total);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load.");
    } finally {
      setLoading(false);
    }
  }, [page, category]);

  useEffect(() => {
    load();
  }, [load]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setPage(1);
  }, [category]);

  const sorted = useMemo(() => {
    const items = [...products];
    items.sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      if (sortKey === "price") return (a.price - b.price) * dir;
      return a.title.localeCompare(b.title) * dir;
    });
    return items;
  }, [products, sortKey, sortDir]);

  const pageCount = useMemo(() => {
    return Math.ceil(total / PAGE_SIZE);
  }, [total]);

  const openDetail = (p: Product) => {
    setSelected(p);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-6 md:py-8">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h1 className="text-2xl md:text-3xl font-semibold">Explore Products</h1>
            <SortBar
              sortKey={sortKey}
              sortDir={sortDir}
              disabled={loading}
              onChange={(k, d) => {
                setSortKey(k);
                setSortDir(d);
              }}
            />
          </div>
          <Filters
            categories={categories}
            selected={category}
            onSelect={(c) => setCategory(c)}
            loading={loading}
          />

          {error ? (
            <ErrorState message={error} onRetry={load} />
          ) : loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : sorted.length === 0 ? (
            <EmptyState label="Nothing to show for this selection." />
          ) : (
            <ProductGrid items={sorted} onPick={openDetail} />
          )}

          <div className="flex items-center justify-between pt-2">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">{sorted.length}</span> of{" "}
              <span className="font-medium">{total}</span> items
            </div>
            <Pagination
              page={page}
              pageCount={pageCount}
              onPageChange={setPage}
              disabled={loading}
            />
          </div>
        </div>
      </main>

      <ProductDetailModal open={modalOpen} product={selected ?? undefined} onClose={() => setModalOpen(false)} />
    </div>
  );
}
