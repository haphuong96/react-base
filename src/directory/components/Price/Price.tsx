import { Text } from "@/commons/components/Text/Text";

interface PriceProps {
  current: number;
  original: number;
}

function Price({ current, original }: PriceProps) {
  const hasDiscount = current < original;
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Text className="font-bold text-lg">{current} AED</Text>
      {hasDiscount && (
        <Text className="text-gray-400 line-through">{original} AED</Text>
      )}
    </div>
  );
}

export default Price;
