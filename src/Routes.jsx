import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import CheckOut from "pages/CheckOut";
import Thankyou from "pages/Thankyou";
import EquipmentCategory from "pages/EquipmentCategory";
import Product from "pages/Product";
import ShoppingCart from "pages/ShoppingCart";
import SignUp from "pages/SignUp";
import SignIn from "pages/SignIn";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    // { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "Home",
      element: <Home />,
    },
    {
      path: "equipmentcategory",
      element: <EquipmentCategory />,
    },
    {
      path: "product",
      element: <Product />,
    },
    {
      path: "shoppingcart",
      element: <ShoppingCart />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <SignIn />,
    },
    {
      path: "cart",
      element: <CheckOut />,
    },
    {
      path: "thankyou",
      element: <Thankyou />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
