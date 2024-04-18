import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Dashboard from "../Components/Dashboard/Dashboard";
import Group from "../Components/Dashboard/Create/Accounting Masters/Group";
import Voucher_type from "../Components/Dashboard/Create/Accounting Masters/Voucher_type";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },

    {
        path:"/signup",
        element:<Signup/>
    },

    {
        path:"/dashboard",
        element:<Dashboard/>,
    },
    {
      path:"/dashboard/creategroup",
      element:<Group/>
    },
    {
      path:"/dashboard/createvoucher",
      element:<Voucher_type/>
    }
  ]);

export default router;