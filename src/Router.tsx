import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PriceQuote from "./pages/PriceQuote";

export const browserRouter = createBrowserRouter([
  {
    element: <App />,    
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/quote",
        element: <PriceQuote />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
