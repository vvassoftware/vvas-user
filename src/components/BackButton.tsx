import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  title: string;
  onClick?: () => void;
}

export default function BackButton({
  title,
  onClick,
}: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-x-4">
      <button
        className="bg-darkBlue h-12 w-12 rounded-md grid place-items-center"
        onClick={onClick ? onClick : () => navigate(-1)}
      >
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.4 5.2L5.9 1.7C6.3 1.3 6.3 0.7 5.9 0.3C5.5 -0.1 4.9 -0.1 4.5 0.3L0.3 4.5C-0.1 4.9 -0.1 5.5 0.3 5.9L4.5 10.1C4.7 10.3 4.9 10.4 5.2 10.4C5.5 10.4 5.7 10.3 5.9 10.1C6.3 9.7 6.3 9.1 5.9 8.7L2.4 5.2Z"
            fill="white"
          />
        </svg>
      </button>

      <span className="text-darkBlue text-xl font-medium">
        {title}
      </span>
    </div>
  );
}
