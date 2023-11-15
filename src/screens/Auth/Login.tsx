import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useHeight } from "../../hooks/useHeight";
import Input from "../../ui/Input";

type InputsLogin = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const stylesHeight = useHeight();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLogin>();

  const handleLogin: SubmitHandler<InputsLogin> = async (data) => {
    console.log(data);
    navigate("/");
    localStorage.setItem("access_token", "some token");
  };

  return (
    <form
      className="p-5 flex flex-col justify-between"
      style={stylesHeight}
      onSubmit={handleSubmit(handleLogin)}
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
              Login with Google
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
              Login with Facebook
            </span>
          </button>

          <button type="button" className="text-center text-[#333]">
            or login with your email
          </button>
        </div>

        <div className="flex flex-col gap-y-3">
          <Input placeholder="Email" {...register("email")} />
          {errors.email && <span>This field is required</span>}
          <Input placeholder="Password" {...register("password")} />
          {errors.password && <span>This field is required</span>}
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <button className="h-[50px] rounded-md bg-darkBlue text-white font-medium text-lg">
          Login
        </button>

        <span className="text-center">
          If you don't have an account,{" "}
          <Link to="/register" className="text-darkBlue underline">
            register
          </Link>
        </span>
      </div>
    </form>
  );
}
