import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  ZemelapisObjektu,
  Darbai,
  AllJobs,
  Profile,
  Admin,
  EditJob,
  DetailJob,
  Sutartys,
  SignSutartys,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addJobAction } from "./pages/AddJob";
import { action as addSutartysAction } from "./pages/Sutartys";
import { action as editJobAction } from "./pages/EditJob";
import { action as deleteJobAction } from "./pages/DeleteJob";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { loader as editJobLoader } from "./pages/EditJob";
import { loader as editSignSutartisLoader } from "./pages/SignSutartys";
import { loader as detailJobLoader } from "./pages/EditJob";
import { loader as allObjektuZemelapis } from "./pages/ZemelapisObjektu";
import { loader as allDarbaiLoader } from "./pages/Darbai";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      // {
      //   path: "register",
      //   element: <Register />,
      //   action: registerAction,
      // },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "sutartis/:id",
        element: <SignSutartys />,
        loader: editSignSutartisLoader,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "zemelapis-objektu",
            element: <ZemelapisObjektu />,
            loader: allObjektuZemelapis,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "darbas",
            element: <Darbai />,
            loader: allDarbaiLoader,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: "detail-job/:id",
            element: <DetailJob />,
            loader: detailJobLoader,
          },
          {
            path: "sutartys",
            element: <Sutartys />,
            action: addSutartysAction,
          },
          { path: "delete-job/:id", action: deleteJobAction },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
