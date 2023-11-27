import { useNavigate } from "react-router-dom";

interface PackageProps {
  price: number;
  value: number;
  schoolId: string;
}

export default function Card({
  price,
  value,
  schoolId,
}: PackageProps) {
  const navigate = useNavigate();

  return (
    <div className="w-[130px] p-[10px]">
      <p className="text-darkBlue/80">{value} hour(s)</p>
      <span className="block text-darkBlue font-bold text-3xl mt-1">
        ${price}
      </span>
      <button
        className="text-white font-medium h-10 bg-darkBlue w-full rounded-md mt-2"
        onClick={() =>
          navigate("/payments", {
            state: { value, schoolId: +schoolId },
          })
        }
      >
        Buy
      </button>
    </div>
  );
}
