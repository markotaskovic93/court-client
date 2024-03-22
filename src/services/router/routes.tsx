import { Navigate, Outlet } from "react-router-dom";
import SignIn from "../../pages/auth/sign-in";
import ProductsPage from "../../pages/product";
import { useAuth } from "../../providers/auth-provider";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};


export const routesForPublic = [
  {
    path: "/service",
    element: <div>Service Page</div>,
  },
  {
    path: "/about-us",
    element: <div>About Us</div>,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
];

export const routesForAuthenticatedOnly = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <div>User Home Page</div>,
      },
      {
        path: "/profile",
        element: <div>User Profile</div>,
      },
      {
        path: "/logout",
        element: <h1>Logout</h1>,
      },
    ],
  },
];

export const routesForNotAuthenticatedOnly = [
  {
    path: "/",
    element: <div>Home Page</div>,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
];

export const notFoundRoute = [{
  path: "*",
  element: <h1>404 Not Found</h1>,
}];
