// Router.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App will wrap the entire site (NavBar, etc.)
    children: [
      {
        path: "/",
        element: <HomePage />, // HomePage as the default route
      },
      {
        path: "/about",
        element: <About />, // About page route
      },
      {
        path: "/service",
        element: <Service />, // Service page route
      },
      {
        path: "/project",
        element: <Project />, // Project page route
      },
      {
        path: "/contact",
        element: <Contact />, // Contact page route
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
