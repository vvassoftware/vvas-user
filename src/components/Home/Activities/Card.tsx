export default function Card() {
  return (
    <button className="relative w-[150px] h-[100px] rounded-md overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40" />

      <div className="absolute z-50 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
        <p className="text-white text-2xl font-bold uppercase">Surf</p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-full object-cover"
      />
    </button>
  );
}
