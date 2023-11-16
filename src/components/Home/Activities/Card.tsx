interface CardProps {
  id: number;
  name: string;
  image: string;
}

export default function Card({ activity }: { activity: CardProps }) {
  return (
    <div className="cursor-pointer relative w-[150px] h-[100px] rounded-md overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40" />

      <div className="absolute z-50 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
        <p className="text-white text-[22px] text-center font-bold uppercase">
          {activity.name}
        </p>
      </div>

      <img
        src={activity.image}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
}
