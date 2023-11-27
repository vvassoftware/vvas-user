// eslint-disable-next-line
export default function Card({ credit }: any) {
  return (
    <button className="text-left grid grid-cols-[130px_1fr] h-[120px]">
      <div className="h-full rounded-tl-md rounded-bl-md overflow-hidden">
        <img
          src={credit.school.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="border-r rounded-tr-md rounded-br-md border-t border-b border-[#9EB3C2] h-full flex w-full flex-col justify-between p-[7px_10px]">
        <div>
          <h3 className="font-bold text-darkBlue uppercase text-sm">
            {credit.school.name}
          </h3>
          <p className="text-darkBlue text-xs">Orlando, Florida</p>
        </div>
        <div className="flex flex-col">
          <span className="text-right text-3xl font-bold text-darkBlue">
            {credit.value}
          </span>
          <span className="text-right text-xs text-darkBlue -mt-[3px]">
            Classes remaining
          </span>
        </div>
      </div>
    </button>
  );
}
