interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <button
      className="w-[150px] h-11 bg-primary-red hover:bg-red-700 text-white py-2 px-4 rounded-[10px] transition duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
