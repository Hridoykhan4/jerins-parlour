import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Dashboard from "../Layouts/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "our-portfolio",
        element: <div>our-portfolio</div>,
      },
      {
        path: "our-team",
        element: <div>our-team</div>,
      },
      {
        path: "contact-us",
        element: <div>contact-us</div>,
      },
      {
        path: "/about",
        element: <h2>About</h2>,
      },
      {
        path: "/projects",
        element: <h2>Projects</h2>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // for user
      {
        path: "book",
        element: <div>book</div>,
      },
      {
        path: "booking-list",
        element: <div>Booking list</div>,
      },
      {
        path: "review",
        element: <div>Review</div>,
      },
      // for admin
      {
        path: "order-list",
        element: <div>order-list</div>,
      },
      {
        path: "add-service",
        element: <div>add-service</div>,
      },
      {
        path: "make-admin",
        element: <div>make-admin</div>,
      },
      {
        path: "manage-service",
        element: <div>manage-service</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
