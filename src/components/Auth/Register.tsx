import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import Input from "../../ui/Input";
import { useHeight } from "../../hooks/useHeight";
import { createUser } from "../../actions/user";
import toast from "react-hot-toast";

export type InputRegister = {
  name?: string;
  lastname?: string;
  email: string;
  password: string;
  repeatPassword?: string;
  type?: string;
};

export default function Register({
  setView,
}: {
  setView: (value: string) => void;
}) {
  const navigate = useNavigate();

  const stylesHeight = useHeight();
  const heightOfWindow = +stylesHeight.height.split("rem")[0] * 16;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InputRegister>();

  const handleRegister: SubmitHandler<InputRegister> = async (
    data
  ) => {
    const { name, email, lastname, password } = data;

    try {
      const user = await createUser({
        name,
        lastname,
        email,
        password,
        type: "user",
      });
      toast.success("Account created successfully");
      navigate("/");
      localStorage.setItem("access_token", user?.access_token);
      // eslint-disable-next-line
    } catch (error: any) {
      toast.error(error.response.data.message as string);
      console.log(error, "FRONTEND_CREATE_USER");
      return null;
    }
  };

  const password = watch("password", "");

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
          <Input
            id="name"
            placeholder="Name"
            register={register}
            required
          />
          {errors.name && (
            <span className="-mt-2 text-sm text-red-600">
              This field is required
            </span>
          )}

          <Input
            id="lastname"
            placeholder="Lastname"
            register={register}
            required
          />
          {errors.lastname && (
            <span className="-mt-2 text-sm text-red-600">
              This field is required
            </span>
          )}

          <Input
            id="email"
            placeholder="Email"
            register={register}
            required
          />
          {errors.email && (
            <span className="-mt-2 text-sm text-red-600">
              This field is required
            </span>
          )}

          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
            register={register}
          />
          {errors.password && (
            <span className="-mt-2 text-sm text-red-600">
              This field is required
            </span>
          )}

          <Input
            type="password"
            id="repeatPassword"
            placeholder="Repeat your password"
            required
            register={register}
            password={password}
          />
          {errors.repeatPassword && (
            <span className="-mt-2 text-sm text-red-600">
              {errors.repeatPassword.message}
              {/* This field is required */}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-4">
        <button className="h-[50px] rounded-md bg-darkBlue text-white font-medium text-lg">
          Register
        </button>

        <span className="text-center">
          If you already have an account,{" "}
          <span
            onClick={() => setView("login")}
            className="text-darkBlue underline"
          >
            login
          </span>
        </span>
      </div>
    </form>
  );
}
