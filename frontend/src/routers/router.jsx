import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Dashboard from "../Components/Dashboard/Dashboard";
import Group from "../Components/Dashboard/Create/Accounting Masters/Group";
import Voucher_type from "../Components/Dashboard/Create/Accounting Masters/Voucher_type";
import CreateOptions from "../Components/Dashboard/Create/CreateOptions";
import AccountingMastersOptions from "../Components/Dashboard/Create/Accounting Masters/AccountingMastersOptions";
import InventoryMastersOptions from "../Components/Dashboard/Create/Inventory Masters/InventoryMastersOptions";
import StatutoryMastersOptions from "../Components/Dashboard/Create/Statutory Masters/StatutoryMastersOptions";
import StatutoryDetailsOptions from "../Components/Dashboard/Create/Statutory Details/StatutoryDetailsOptions";
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
        path:"/admin/dashboard/create",
        element:<CreateOptions/>,
    },
    {
        path:"/admin/dashboard/create/accountingmaster",
        element:<AccountingMastersOptions/>,
    },
    {
        path:"/admin/dashboard/create/inventorymaster",
        element:<InventoryMastersOptions/>,
    },
    {
        path:"/admin/dashboard/create/statutorymaster",
        element:<StatutoryMastersOptions/>,
    },
    {
        path:"/admin/dashboard/create/statutorydetails",
        element:<StatutoryDetailsOptions/>,
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