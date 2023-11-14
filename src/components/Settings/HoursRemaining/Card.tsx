const image =
  "https://images.unsplash.com/photo-1505408990643-cb9bbf4bfe2c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Card() {
  return (
    <button className="text-left grid grid-cols-[130px_1fr] h-[120px]">
      <div className="h-full rounded-tl-md rounded-bl-md overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="border-r rounded-tr-md rounded-br-md border-t border-b border-[#9EB3C2] h-full flex w-full flex-col justify-between p-[7px_10px]">
        <div>
          <h3 className="font-bold text-darkBlue uppercase text-sm">
            Water Sport School
          </h3>
          <p className="text-darkBlue text-xs">Orlando, Florida</p>
        </div>
        <div className="flex flex-col">
          <span className="text-right text-3xl font-bold text-darkBlue">
            32
          </span>
          <span className="text-right text-xs text-darkBlue -mt-[3px]">
            Classes remaining
          </span>
        </div>
      </div>
    </button>
  );
}
