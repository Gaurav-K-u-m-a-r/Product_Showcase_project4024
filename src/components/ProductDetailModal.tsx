
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/types";

type Props = {
  open: boolean;
  product?: Product | null;
  onClose: () => void;
};

export default function ProductDetailModal({ open, product, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && product && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-full max-w-4xl rounded-3xl bg-white p-5 md:p-7 shadow-2xl"
            initial={{ y: 30, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 24 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm hover:bg-gray-50"
              aria-label="Close"
            >
              Close
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex gap-2 overflow-auto pb-2">
                  {product.images?.slice(0, 6).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${product.title} ${i+1}`}
                      className="h-16 w-24 rounded-xl object-cover border border-gray-200"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold leading-tight">{product.title}</h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Info label="Brand" value={product.brand} />
                  <Info label="Category" value={product.category} />
                  <Info label="Rating" value={String(product.rating)} />
                  <Info label="Stock" value={String(product.stock)} />
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="text-3xl font-bold">${product.price}</div>
                  {product.discountPercentage && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-green-700 text-sm">
                      -{product.discountPercentage}%
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <button className="rounded-xl border border-gray-200 bg-black px-5 py-3 font-medium text-white hover:opacity-90">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 p-3">
      <div className="text-gray-500">{label}</div>
      <div className="font-medium mt-1 break-words">{value}</div>
    </div>
  );
}
