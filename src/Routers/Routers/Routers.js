import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Appointments from "../../Pages/Appointments/Appointments/Appointments";
import Contact from "../../Pages/Contact/Contact";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payments from "../../Pages/Dashboard/Payments/Payments";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointment",
        element: <Appointments />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoutes>
            <Reviews />
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-doctors",
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payments />,
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-nu-two.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
