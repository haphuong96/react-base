interface CardImageProps {
  className?: string;
  thumbnail: string | null;
  name: string;
}

function CardImage({ thumbnail, name, className }: CardImageProps) {
  return (
    <>
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={name}
          className={`object-cover rounded-xl ${className}`}
        />
      ) : (
        <div
          className={`bg-gray-200 flex items-center justify-center ${className}`}
        >
          <span className="text-gray-500">No image</span>
        </div>
      )}
    </>
  );
}

export default CardImage;
