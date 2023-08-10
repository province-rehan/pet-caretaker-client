import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Adaption from "../../pages/Adaption/Adaption";
import FoodAccessories from "../../pages/FoodAccessories/FoodAccessories";
import Review from "../../pages/Review/Review";
import Contact from "../../pages/Contact/Contact";
import About from "../../pages/About/About";
import Login from "../../pages/Authentication/Login/Login";
import Register from "../../pages/Authentication/Register/Register";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import WelcomeDash from "../../layouts/DashboardLayout/WelcomeDash";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllUser from "../../layouts/DashboardLayout/AllUser";
import AddReview from "../../layouts/DashboardLayout/AddReview";
import AllOrderedFood from "../../layouts/DashboardLayout/AllOrderedFood";
import PostPet from "../../layouts/DashboardLayout/PostPet";
import PetOwenerRoute from "../PetOwenerRoute/PetOwenerRoute";
import GetOrderedFood from "../../layouts/DashboardLayout/GetOrderedFood";
import PetReceiverRoute from "../PetReceiverRoute/PetReceiverRoute";
import TakePet from "../../layouts/DashboardLayout/TakePet";
import FoodAccessoriesDetails from "../../pages/FoodAccessories/FoodAccessoriesDetails";
import AllPayment from "../../layouts/DashboardLayout/AllPayment";
import PetDoctor from "../../pages/PetDoctor/PetDoctor";
import Cart from "../../layouts/DashboardLayout/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/adaption",
        loader: async () => {
          return fetch("https://petcaretaker-server.vercel.app/postforadaption");
        },
        element: (
          <PrivateRoute>
            <Adaption />
          </PrivateRoute>
        ),
      },
      {
        loader: async () => {
          return fetch("https://petcaretaker-server.vercel.app/foodandaccessories");
        },
        path: "/food-accessories",
        element: (
          <PrivateRoute>
            <FoodAccessories />
          </PrivateRoute>
        ),
      },
      {
        path: "food-accessories/food-accessories/:id",
        loader: async ({ params }) => {
          return fetch(`https://petcaretaker-server.vercel.app/foodandaccessories/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <FoodAccessoriesDetails />
          </PrivateRoute>
        ),
      },
      {
        loader: async () => {
          return fetch("https://petcaretaker-server.vercel.app/reviews");
        },
        path: "/review",
        element: <Review />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pet-doctors",
        element: (
          <PrivateRoute>
            <PetDoctor />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <WelcomeDash />,
      },
      {
        path: "/dashboard/addreview",
        element: <AddReview />,
      },
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        // shopping bag route
        path: "/dashboard/orderpetfood",
        element: <GetOrderedFood />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allorders",
        loader: async () => {
          return fetch("https://petcaretaker-server.vercel.app/payment");
        },
        element: (
          <AdminRoute>
            <AllOrderedFood />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allpayment",
        loader: async () => {
          return fetch("https://petcaretaker-server.vercel.app/payment");
        },
        element: (
          <AdminRoute>
            <AllPayment />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/postpet",
        element: (
          <PetOwenerRoute>
            <PostPet />
          </PetOwenerRoute>
        ),
      },
      {
        path: "/dashboard/takepet",
        element: (
          <PetReceiverRoute>
            <TakePet />
          </PetReceiverRoute>
        ),
      },
    ],
  },
]);
