import { InputHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../utils/cn";
import { UseFormRegister } from "react-hook-form";
import { InputRegister } from "../components/Auth/Register";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  // eslint-disable-next-line
  register: UseFormRegister<any>;
  // eslint-disable-next-line
  id: keyof InputRegister | any;
  password?: string | undefined;
}

// eslint-disable-next-line
export const inputVariants = cva(
  "h-[50px] border w-full rounded-md border-[#9EB3C2] pl-3",
  {
    variants: {
      variant: {
        default:
          "outline-none focus-visible:ring-darkBlue focus-visible:ring-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default function Input({
  variant,
  register,
  id,
  password,
  required,
  ...rest
}: InputProps) {
  return (
    <input
      className={cn(inputVariants({ variant }))}
      {...(id !== "repeatPassword"
        ? register(id, { required })
        : register("repeatPassword", {
            validate: (value) =>
              value === password || "Passwords do not match",
          }))}
      {...rest}
    />
  );
}
