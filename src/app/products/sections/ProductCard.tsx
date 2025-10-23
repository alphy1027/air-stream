import Text from "@/components/UI-primitives/text/Text";

export default function ProductCard({ productName }: { productName: string }) {
  return (
    <div className="card gap-y-brand-spacing-xs">
      <div className=" w-[180px] h-[280px] md:w-[230px] md:h-[300px] bg-neutral rounded-brand-radius" />
      <Text className="px-2 text-body-lg font-medium">{productName}</Text>
    </div>
  );
}
