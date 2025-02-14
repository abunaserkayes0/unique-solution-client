import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../components/layout";
import Loading from "../components/ui/loading";
import { routePaths } from "./route-paths";

const HomePage = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/auth/login/login"));
const Register = lazy(() => import("../pages/auth/register/register"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routePaths.home.root} element={<RootLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path={routePaths.auth.login}
        element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path={routePaths.auth.register}
        element={
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        }
      />
    </Route>
  )
);
