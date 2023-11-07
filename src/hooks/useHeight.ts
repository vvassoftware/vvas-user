import { useContext } from "react";
import { WindowSizeContext } from "../context/WindowSize";

export const useHeight = () => {
  const { windowSize } = useContext(WindowSizeContext);
  return { height: `${windowSize.innerHeight / 16}rem` };
};
