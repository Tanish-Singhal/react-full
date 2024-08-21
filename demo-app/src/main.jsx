import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Shimmer from "./components/Shimmer.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import Cart from "./components/Cart.jsx";

// If the app got very big, then lazy loading is the best option to load the components on demand.
// it don't make the app slow and don't shove all the js logic into the single js file.
//  we can lazy load the service which was the whole different services (like the instamart service in Swiggy)
const Grocery = lazy(() => import("./components/Grocery.jsx"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resid",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
