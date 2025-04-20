interface ButtonProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

const CvButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: ButtonProps) => {
  return (
    <button
      className="bg-black text-purple w-full inline-flex justify-center items-center hover:text-rose-300 gap-2 hover:border-b-2 hover:border-b-rose-400 font-bold transform hover:-translate-y-1 transition duration-400 bg-transparent md:w-60 md:mt-10 h-12 "
      onClick={handleClick}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default CvButton;

// relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px]
//     focus:outline-none md:w-60 md:mt-10
