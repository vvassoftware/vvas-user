import { useNavigate } from "react-router-dom";

interface PackageProps {
  price: number;
  hours: string;
}

export default function Card({ price, hours }: PackageProps) {
  const navigate = useNavigate();

  return (
    <div className="w-[130px] p-[10px]">
      <p className="text-darkBlue/80">{hours}</p>
      <span className="block text-darkBlue font-bold text-3xl mt-1">
        ${price}
      </span>
      <button
        className="text-white font-medium h-10 bg-darkBlue w-full rounded-md mt-2"
        onClick={() =>
          navigate("/payments", { state: { price: 700 } })
        }
      >
        Buy
      </button>
    </div>
  );
}
