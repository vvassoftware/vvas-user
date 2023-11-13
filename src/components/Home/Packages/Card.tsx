import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();

  return (
    <div className="w-[130px] p-[10px]">
      <p className="text-darkBlue/80">7 hours</p>
      <span className="block text-darkBlue font-bold text-3xl mt-1">
        $700
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
