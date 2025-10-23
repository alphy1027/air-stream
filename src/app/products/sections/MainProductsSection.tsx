import { products } from "@/content/products";
import ProductCard from "./ProductCard";

export default function MainProductsSection() {
  return (
    <div className="flex gap-brand-spacing-sm md:gap-brand-spacing flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} productName={product.name} />
      ))}
    </div>
  );
}
