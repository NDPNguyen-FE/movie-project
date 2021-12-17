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
];

// export const adminRouter = [
//   {
//     path: "/admin",
//     component: React.lazy(() => import("../Admin/pages/Dashboard/Dashboard")),
//   },

//   {
//     path: "/admin/products",
//     component: React.lazy(() => import("../Admin/pages/Products/ProductAdmin")),
//   },

//   {
//     path: "/admin/customers",
//     component: React.lazy(() => import("../Admin/pages/Customers/Customer")),
//   },

//   {
//     path: "/admin/orders",
//     component: React.lazy(() => import("../Admin/pages/Orders/OrderAdmin")),
//   },
// ];
