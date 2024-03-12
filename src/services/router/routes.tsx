import { ProtectedRoute } from "./protected-route";

export const routesForPublic = [
  {
    path: "/service",
    element: <div>Service Page</div>,
  },
  {
    path: "/about-us",
    element: <div>About Us</div>,
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
    element: <h1>Login page</h1>,
  },
];

export const notFoundRoute = [{
  path: "*",
  element: <h1>404 Not Found</h1>,
}];
