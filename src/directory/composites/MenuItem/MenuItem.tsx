//TODO: Create a menu item component
// mocked data:
// {
//     "id": 14,
//     "name": "Slices of smoked turkey",
//     "price": 100.0,
//     "current_price": 50.0,
//     "is_best_seller": true,
//     "thumbnail": null
// }
import jumbotron3 from "@/directory/assets/jumbotron3.png";
import PrimaryButton from "@/directory/components/Button/PrimaryButton";
import StarRating from "@/directory/components/StarRating/StarRating";

function MenuItem() {
  // const { name, price, current_price, is_best_seller, thumbnail } = item;

  const item = {
    id: 14,
    name: "Slices of smoked turkey",
    price: 100.0,
    current_price: 50.0,
    is_best_seller: true,
    thumbnail: "hi",
  };

  const hasDiscount = item.current_price < item.price;
  // const discountPercentage = hasDiscount
  //   ? Math.round((1 - item.current_price / item.price) * 100)
  //   : 0;

  return (
    <div className="w-64 bg-white rounded-lg overflow-hidden shadow-md">
      {/* Image Container */}
      <div className="relative bg-gray-100 rounded-t-lg p-2">
        {item.thumbnail ? (
          <img
            src={jumbotron3}
            alt={item.name}
            className="w-full h-48 object-cover rounded-xl"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">No image</span>
          </div>
        )}

        {item.is_best_seller && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-lg">
            BEST SELLER
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between items-center h-full">
        <h3 className="text-red-600 text-lg font-medium mb-2">{item.name}</h3>

        <StarRating point={4} maxPoint={5} />

        <div className="flex items-center space-x-2 mb-4">
          <span className="font-bold text-lg">{item.current_price} AED</span>
          {hasDiscount && (
            <span className="text-gray-400 line-through">{item.price} AED</span>
          )}
        </div>

        <PrimaryButton onClick={() => console.log("Add to Cart")}>
          Add to Cart
        </PrimaryButton>
      </div>
    </div>
  );
}

export default MenuItem;
