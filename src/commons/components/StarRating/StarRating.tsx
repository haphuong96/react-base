interface StarRatingProps {
  point: number;
  maxPoint?: number;
  className?: string;
}

function StarRating({ point, maxPoint = 5, className }: StarRatingProps) {
  if (point > maxPoint) {
    point = maxPoint;
  }
  if (point < 0) {
    point = 0;
  }

  return (
    <div className={`${className} flex mb-2`}>
      {[...Array(point)].map((_, i) => (
        <span key={i} className="text-yellow-400">
          ★
        </span>
      ))}
      {[...Array(5 - point)].map((_, i) => (
        <span key={i} className="text-gray-300">
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
