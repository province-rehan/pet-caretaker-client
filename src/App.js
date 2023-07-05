import { Toaster } from "react-hot-toast";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
