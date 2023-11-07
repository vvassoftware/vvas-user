import { InputHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../utils/cn";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

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

export default function Input({ variant, ...props }: InputProps) {
  return (
    <input className={cn(inputVariants({ variant }))} {...props} />
  );
}
