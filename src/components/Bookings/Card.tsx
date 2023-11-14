const image =
  "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Card() {
  return (
    <button className="rounded-md overflow-hidden h-[120px] w-full flex bg-darkBlue">
      <div className="w-[150px] h-full">
        <img
          src={image}
          alt=""
          className="w-full object-cover h-full"
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="p-[10px] flex flex-col items-start">
          <h3 className="text-white text-sm">Water Sport School</h3>
          <p className="text-xs text-white">Orlando, Florida</p>
        </div>

        <div className="p-[10px]">
          <div className="flex gap-x-1 justify-start">
            <p className="text-xs font-bold text-white">Date:</p>
            <p className="text-xs text-white">December 2, 2021</p>
          </div>
          <div className="flex gap-x-1 justify-start">
            <p className="text-xs font-bold text-white">Time:</p>
            <p className="text-xs text-white">03 to 05 PM</p>
          </div>
        </div>
      </div>
    </button>
  );
}
