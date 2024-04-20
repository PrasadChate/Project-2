import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Dashboard from "../Components/Dashboard/Dashboard";
import Group from "../Components/Dashboard/Create/Accounting Masters/Group";
import Voucher_type from "../Components/Dashboard/Create/Accounting Masters/Voucher_type";
import Stock_Item from "../Components/Dashboard/Create/Inventory Masters/Stock_Item";

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
        path:"/admin/dashboard",
        element:<Dashboard/>,
    },
    {
      path:"admin/dashboard/createproduct",
      element:<Stock_Item/>
    },

    {
      path:"/admin/dashboard/creategroup",
      element:<Group/>
    },
    {
      path:"/admin/dashboard/createvoucher",
      element:<Voucher_type/>
    }
  ]);

export default router;