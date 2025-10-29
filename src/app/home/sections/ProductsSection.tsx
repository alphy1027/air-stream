import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { products } from "@/content/products";
import ProductCard from "@/app/products/sections/ProductCard";
import LinkButton from "@/components/UI-primitives/button/LinkButton";

export default function ProductsSection() {
  return (
    <SectionContainer className="page-container">
      <div className="flex flex-col sm:justify-between gap-brand-spacing-sm sm:flex-row sm:items-end">
        <div className="max-w-[435px] lg:max-w-[640px] page-container">
          <SectionTitle>
            <span className="text-primary">Shop genuine</span> spare parts <br /> and units
          </SectionTitle>
          <Text>
            We stock and supply high-quality equipment, components, and spare parts for all major HVAC and refrigeration
            systems. Reliable, efficient, and built to last.
          </Text>
        </div>

        <LinkButton href="/products" className="text-primary self-end">
          View Products
        </LinkButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-brand-spacing-sm md:gap-brand-spacing">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} productName={product.name} />
        ))}
      </div>
    </SectionContainer>
  );
}
