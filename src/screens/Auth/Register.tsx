import { Link } from "react-router-dom";

import Input from "../../ui/Input";
import { useHeight } from "../../hooks/useHeight";

export default function Register() {
  const stylesHeight = useHeight();

  return (
    <form
      className="p-5 flex flex-col justify-between"
      style={stylesHeight}
    >
      <div className="flex flex-col gap-y-5">
        <div>
          <h3 className="text-darkBlue uppercase font-bold text-3xl text-center">
            Log into vvas
          </h3>
          <p className="text-[#333] text-center mt-2">
            Log back into your account and enjoy all of the fun you
            missed when you were out!
          </p>
        </div>

        <div className="flex flex-col gap-y-3">
          <button
            type="button"
            className="flex items-center gap-x-3 py-3 px-4 h-[50px] rounded-md w-full border border-[#C0CED8]"
          >
            <span>
              <img
                src="/icons/logo-google.png"
                alt=""
                className="w-[22px] h-[22px] object-contain"
              />
            </span>
            <span className="block text-[#333] text-lg">
              Register with Google
            </span>
          </button>

          <button
            type="button"
            className="flex items-center gap-x-3 py-3 px-4 h-[50px] rounded-md w-full border border-[#C0CED8]"
          >
            <span>
              <img
                src="/icons/logo-facebook.png"
                alt=""
                className="w-[22px] h-[22px] object-contain"
              />
            </span>
            <span className="block text-[#333] text-lg">
              Register with Facebook
            </span>
          </button>

          <button type="button" className="text-center text-[#333]">
            or register with your email
          </button>
        </div>

        <div className="flex flex-col gap-y-3">
          <Input placeholder="Name" />
          <Input placeholder="Lastname" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Repeat your password" />
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <button className="h-[50px] rounded-md bg-darkBlue text-white font-medium text-lg">
          Register
        </button>

        <span className="text-center">
          If you already have an account,{" "}
          <Link to="/login" className="text-darkBlue underline">
            login
          </Link>
        </span>
      </div>
    </form>
  );
}
