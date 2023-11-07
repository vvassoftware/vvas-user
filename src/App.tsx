import WindowSizeProvider from "./context/WindowSize";
import RoutesApp from "./router/Routes";

export default function App() {
  return (
    <WindowSizeProvider>
      <RoutesApp />
    </WindowSizeProvider>
  );
}
