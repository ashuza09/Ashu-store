import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  SingleProduct,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
} from "./pages";
import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as orderLoader } from "./pages/Orders";
// actions 
import {action as registerAction} from './pages/Register'
import {action as loginAction} from './pages/Login'
import {action as checkoutAction} from './components/CheckoutForm'
import { store } from './store'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
   
    children: [
      {
        index:true,
        element: <Landing />,
        errorElement:<ErrorElement />,
        loader:landingLoader,
      },
      {
        path:'/products',
        element: <Products />,
        errorElement:<ErrorElement />,
        loader:productLoader
      },
      {
        path:'/products/:id',
        element: <SingleProduct />,
        errorElement:<ErrorElement />,
        loader:singleProductLoader,
      },
      {
        path:'/cart',
        element: <Cart />,
      },
      {
        path:'/about',
        element: <About />,
      },
      {
        path:'/checkout',
        element: <Checkout />,
        errorElement:<ErrorElement />,
        loader:checkoutLoader(store),
        action:checkoutAction(store),
      },
      {
        path:'/orders',
        element: <Orders />,
        errorElement:<ErrorElement />,
        loader:orderLoader(store),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action:loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action:registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
