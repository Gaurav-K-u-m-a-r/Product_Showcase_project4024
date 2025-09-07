
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-black/90 text-white grid place-items-center font-bold">P</div>
          <div className="font-semibold text-lg">Product Showcase Explorer</div>
        </div>
        <nav>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
