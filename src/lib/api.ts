
import type { ProductsResponse, Product } from "@/types";

const BASE = "https://dummyjson.com";

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${BASE}/products/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  const cats: Array<{slug?: string, name?: string} | string> = await res.json();
  const normalized = (cats as any[]).map((c) => typeof c === "string" ? c : (c.slug ?? c.name)).filter(Boolean);
  return normalized.length ? (normalized as string[]) : (cats as string[]);
}

export async function fetchProducts(opts: { limit: number; skip: number; category?: string }): Promise<ProductsResponse> {
  const { limit, skip, category } = opts;
  const url = category
    ? `${BASE}/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`
    : `${BASE}/products?limit=${limit}&skip=${skip}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`${BASE}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
