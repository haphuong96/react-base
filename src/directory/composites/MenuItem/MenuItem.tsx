import { Button } from "@/commons/components/Button/Button";
import { Text } from "@/commons/components/Text/Text";
// import jumbotron3 from "@/directory/assets/jumbotron3.png";
import Price from "@/directory/components/Price/Price";
import StarRating from "@/commons/components/StarRating/StarRating";
import Image from "@/commons/components/Image/Image";

function MenuItem() {
  // const { name, price, current_price, is_best_seller, thumbnail } = item;

  const item = {
    id: 14,
    name: "Slices of smoked turkey",
    price: 100.0,
    current_price: 50.0,
    is_best_seller: true,
    thumbnail: null,
  };

  return (
    <div className="w-64 bg-white rounded-lg overflow-hidden shadow-md">
      {/* Image Container */}
      <div className="relative bg-gray-100 rounded-t-lg p-2">
        <Image
          src={item.thumbnail}
          name={item.name}
          className="object-cover w-full h-48 rounded-xl"
        />
      </div>

      {/* Detail */}
      <div className="p-4 flex flex-col justify-between items-center h-full">
        <Text typeScale="bt1" className="text-red-600 font-medium mb-2">
          {item.name}
        </Text>
        <StarRating point={4} maxPoint={5} />
        <Price current={item.current_price} original={item.price} />
        <Button
          variant="primary"
          className="w-[150px] h-11 py-2 px-4 rounded-[10px]"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default MenuItem;
