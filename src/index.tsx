import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./assets/css/tailwind.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
