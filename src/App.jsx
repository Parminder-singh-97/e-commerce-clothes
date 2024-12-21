import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Sproduct from "./Pages/Sproduct";
import WorkInProgress from "./Pages/WorkInProgress";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const ProtectRoutes = ({ element }) => {
  const isAuthenticated = useSelector(
    (state) => state.AuthSlicer.isAuthenticated
  );
 
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <SignUp /> },

  { path: "/home", element: <ProtectRoutes element={<Home />} /> },
  { path: "/about", element: <ProtectRoutes element={<About />} /> },
  { path: "/blog", element: <ProtectRoutes element={<Blog />} /> },
  { path: "/contact", element: <ProtectRoutes element={<Contact />} /> },
  { path: "/cart", element: <ProtectRoutes element={<Cart />} /> },
  { path: "/shop", element: <ProtectRoutes element={<Shop />} /> },
  { path: "/sproduct/:id", element: <ProtectRoutes element={<Sproduct />} /> },
  {
    path: "/WorkInProgress",
    element: <ProtectRoutes element={<WorkInProgress />} />,
  },

  {
    path: "*",
    element: (
      <div className="h-screen flex justify-center items-center text-[50px]">
        404 - Page Not Found 🫡
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
