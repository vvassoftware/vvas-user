import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useHeight } from "../../hooks/useHeight";
import Input from "../../ui/Input";
import { loginUser } from "../../actions/user";
import { login } from "../../helpers/user";
import { UserAuthContext } from "../../context/UserAuth";

type InputsLogin = {
  email: string;
  password: string;
};

export default function Login({
  setView,
}: {
  setView: (value: string) => void;
}) {
  const { setUser } = useContext(UserAuthContext);

  const navigate = useNavigate();
  const stylesHeight = useHeight();
  const heightOfWindow = +stylesHeight.height.split("rem")[0] * 16;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLogin>();

  const handleLogin: SubmitHandler<InputsLogin> = async (data) => {
    const { email, password } = data;

    try {
      const user = await loginUser({
        email,
        password,
      });
      await login(user?.access_token, setUser);
      toast.success("You are logged in");
      navigate("/");
      // eslint-disable-next-line
    } catch (error: any) {
      toast.error(error.response.data.message as string);
      console.log(error, "FRONTEND_CREATE_USER");
      return null;
    }
  };

  return (
    <form
      className="p-5 flex flex-col justify-between"
      style={heightOfWindow < 720 ? { height: "100%" } : stylesHeight}
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
          <Input
            placeholder="Email"
            register={register}
            id="email"
            required
          />
          {errors.email && <span>This field is required</span>}
          <Input
            placeholder="Password"
            register={register}
            type="password"
            id="password"
            required
          />
          {errors.password && <span>This field is required</span>}
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <button className="h-[50px] rounded-md bg-darkBlue text-white font-medium text-lg">
          Login
        </button>

        <span className="text-center">
          If you don't have an account,{" "}
          <span
            onClick={() => setView("register")}
            className="text-darkBlue underline"
          >
            register
          </span>
        </span>
      </div>
    </form>
  );
}
