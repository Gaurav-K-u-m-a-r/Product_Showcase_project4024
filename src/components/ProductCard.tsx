
import { motion } from "framer-motion";
import type { Product } from "@/types";

export default function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="card p-3 text-left w-full hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      layout
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-medium leading-tight truncate">{product.title}</h3>
          <p className="text-sm text-gray-500 mt-1 capitalize">{product.category.replaceAll('-', ' ')}</p>
        </div>
        <div className="shrink-0 font-semibold">${product.price}</div>
      </div>
    </motion.button>
  );
}
