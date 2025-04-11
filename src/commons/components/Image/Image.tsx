interface ImageProps {
  className?: string;
  src: string | null;
  name?: string;
}

function Image({ src, name, className }: ImageProps) {
  return (
    <>
      {src ? (
        <img src={src} alt={name} className={className} />
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

export default Image;
