import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuth";

export default function Header() {
  const { user } = useContext(UserAuthContext);

  return (
    <div className="p-5 bg-darkBlue">
      <div className="flex items-center justify-between ">
        <div>
          <img src="/logo-vvas.png" alt="" className="w-10" />
        </div>
        <button className="grid place-items-center w-10 h-10 border border-white rounded-md">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-white font-bold text-[22px]">
          Good afternoon {user?.name}!
        </h2>
        <p className="text-lg text-white">Welcome to VVAS</p>
      </div>
    </div>
  );
}
