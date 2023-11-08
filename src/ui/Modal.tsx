import React, { HTMLProps } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { VariantProps, cva } from "class-variance-authority";

import cn from "../utils/cn";

interface ModalProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof inputVariants> {
  children?: React.ReactNode;
  show: boolean;
  setShow: (value: boolean) => void;
}

// eslint-disable-next-line
export const inputVariants = cva("shadow-md", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Modal({
  show,
  setShow,
  children,
  variant,
}: ModalProps) {
  return (
    <Dialog.Root open={show}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="DialogOverlay"
          onClick={() => setShow(false)}
        />

        <Dialog.Content
          className={`DialogContent ${cn(
            inputVariants({ variant })
          )}`}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
