import React from "react";

export const userRouter = [
  {
    path: "/",
    component: React.lazy(() => import("../User/container/HomePage/HomePage")),
  },
  {
    path: "/moviedetail/:movieId",
    component: React.lazy(() => import("../User/container/MovieDetail/MovieDetail")),
  },
  {
    path: "/login",
    component: React.lazy(() => import("../User/container/Login/Login")),
  },
  {
    path: "/register",
    component: React.lazy(() => import("../User/container/Register/Register")),
  },
  {
    path: "/ticketroom/:maLichChieu",
    component: React.lazy(() => import("../User/container/BookingMovie/BookingMovie")),
  },
  {
    path: "/userprofile",
    component: React.lazy(() => import("../User/container/UserProfile/UserProfile")),
  },
];

export const adminRouter = [
  {
    path: "/admin/dashboard",
    component: React.lazy(() => import("../Admin/container/Dashboard/Dashboard")),
  },

  // {
  //   path: "/admin/products",
  //   component: React.lazy(() => import("../Admin/pages/Products/ProductAdmin")),
  // },

  // {
  //   path: "/admin/customers",
  //   component: React.lazy(() => import("../Admin/pages/Customers/Customer")),
  // },

  // {
  //   path: "/admin/orders",
  //   component: React.lazy(() => import("../Admin/pages/Orders/OrderAdmin")),
  // },
];
