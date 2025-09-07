1. Markdown
   
# Product Showcase Explorer

A responsive React + Vite + TypeScript application that lets users browse and explore products from the **DummyJSON API**.  
Includes filtering, sorting, pagination, and animated product detail views.  

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) version **18 or higher**
- npm (comes with Node)

### Steps to Run Locally

1. **Clone or unzip the repository**
   ```bash
   git clone <your-repo-url>
   cd product-showcase-explorer

2. Install dependencies

npm install


3. Start the development server

npm run dev

Open the URL shown in your terminal (usually http://localhost:5173).

4. Build for production

npm run build
npm run preview


✨ Features

Product Grid — responsive cards with images, category, and price

Product Detail Modal — animated overlay with description, gallery, and metadata

Filtering — filter products by category

Sorting — client-side sort by price or title (asc/desc)

Pagination — navigate through results using limit/skip

Loading & Error States — skeleton cards and retry option

Animations — smooth list reveals, hover/tap effects, and modal transitions

Contact Page — simple /contact route with your email


🎨 Design Choices & Trade-offs

API-driven images and data
Chose to load products and images directly from DummyJSON instead of bundling static data.

✅ Keeps project lightweight and always up-to-date.

⚠️ Requires internet access.

Client-side sorting
Implemented sorting on the client to reduce API calls.

✅ Simpler, faster interactions.

⚠️ Might be less efficient if product list grows very large.

React Router for navigation
Used react-router-dom to separate the Contact page from the main product explorer.

✅ Cleaner UX, easier extension later.

Framer Motion for animations
Provides smoother and more expressive micro-interactions than pure CSS.

TailwindCSS for styling
Utility-first styling keeps components clean and consistent.


📦 Third-party Libraries

Beyond React + Framer Motion, we used:

Vite
 — fast bundler and dev server for modern React projects.

TypeScript
 — static typing for safer and clearer code.

TailwindCSS
 — utility-first CSS framework for rapid UI development.

React Router DOM
 — for client-side routing (e.g., /contact).

📧 Contact

For inquiries or feedback:
gauravkumar.974046@gmail.com



