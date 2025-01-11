import { createBrowserRouter, Outlet } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Ticker from "./pages/ticker/Ticker";
import pageRoutes from "./apiRoutes";
import DarkMode from "./components/darkmode/DarkMode";
import Layout from "./pages/common/layout/Layout";
import Login from "./pages/login/Login";
import AuthCallbackPage from "./pages/login/AuthCallbackPage";

const CommonLayout = () => (
  <Layout>
    <Outlet />
    <DarkMode />
  </Layout>
);

const router = createBrowserRouter([
  {
    element: <CommonLayout />,
    children: [
      {
        path: pageRoutes.main,
        element: <MainPage />,
      },
      {
        path: pageRoutes.login,
        element: <Login />,
      },
      {
        path: pageRoutes.ticker,
        element: <Ticker />,
      },
      {
        path: pageRoutes.auth,
        element: <AuthCallbackPage />,
      },
    ],
  },
]);

export default router;
