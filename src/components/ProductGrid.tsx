
import { motion } from "framer-motion";
import type { Product } from "@/types";
import ProductCard from "./ProductCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function ProductGrid({ items, onPick }: { items: Product[]; onPick: (p: Product) => void }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {items.map((p) => (
        <motion.div key={p.id} variants={item}>
          <ProductCard product={p} onClick={() => onPick(p)} />
        </motion.div>
      ))}
    </motion.div>
  );
}
