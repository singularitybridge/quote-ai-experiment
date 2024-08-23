import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PriceQuote from "./pages/PriceQuote";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const browserRouter = createBrowserRouter([
  {
    element: <App />,    
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:quoteId",
        element: <PriceQuote />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={browserRouter} />;
};

export default Router;
