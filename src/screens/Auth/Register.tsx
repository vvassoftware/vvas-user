import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import Input from "../../ui/Input";
import { useHeight } from "../../hooks/useHeight";

type InputRegister = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export default function Register() {
  const navigate = useNavigate();

  const stylesHeight = useHeight();
  const heightOfWindow = +stylesHeight.height.split("rem")[0] * 16;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputRegister>();

  const handleRegister: SubmitHandler<InputRegister> = async (
    data
  ) => {
    console.log(data);
    navigate("/");
    localStorage.setItem("access_token", "some token");
  };

  return (
    <form
      className="p-5 flex flex-col justify-between"
      style={heightOfWindow < 720 ? { height: "100%" } : stylesHeight}
      onSubmit={handleSubmit(handleRegister)}
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
          <Input placeholder="Name" {...register("name")} />
          {errors.name && <span>This field is required</span>}

          <Input placeholder="Lastname" {...register("lastname")} />
          {errors.lastname && <span>This field is required</span>}

          <Input placeholder="Email" {...register("email")} />
          {errors.email && <span>This field is required</span>}

          <Input placeholder="Password" {...register("password")} />
          {errors.password && <span>This field is required</span>}

          <Input
            placeholder="Repeat your password"
            {...register("repeatPassword")}
          />
          {errors.repeatPassword && (
            <span>This field is required</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-4">
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
