import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider, useAuth } from "../../providers/auth-provider";
import { 
  routesForAuthenticatedOnly, 
  routesForNotAuthenticatedOnly, 
  routesForPublic,
  notFoundRoute
} from "./routes";

const Router = () => {
  const { isAuthenticated } = useAuth();

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!isAuthenticated ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
    ...notFoundRoute,
  ]);
  
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
} 

export default Router;
