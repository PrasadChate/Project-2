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
import CreateAccountingMastersOptions from "../Components/Dashboard/Create/Accounting Masters/CreateAccountingMastersOptions";
import CreateInventoryMastersOptions from "../Components/Dashboard/Create/Inventory Masters/CreateInventoryMastersOptions";
import CreateStatutoryMastersOptions from "../Components/Dashboard/Create/Statutory Masters/CreateStatutoryMastersOptions";
import CreateStatutoryDetailsOptions from "../Components/Dashboard/Create/Statutory Details/CreateStatutoryDetailsOptions";
import AlterOptions from "../Components/Dashboard/Alter/AlterOptions";
import AlterAccountingMastersOptions from "../Components/Dashboard/Alter/Accounting Masters/AlterAccountingMastersOptions";
import AlterInventoryMastersOptions from "../Components/Dashboard/Alter/Inventory Masters/AlterInventoryMastersOptions";
import Unit from "../Components/Dashboard/Create/Inventory Masters/Unit";
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
        path:"/admin/dashboard/create",
        element:<CreateOptions/>,
    },
    {
        path:"/admin/dashboard/create/accountingmaster",
        element:<CreateAccountingMastersOptions/>,
    },
    {
        path:"/admin/dashboard/create/inventorymaster",
        element:<CreateInventoryMastersOptions/>,
    },
    {
        path:"/admin/dashboard/create/statutorymaster",
        element:<CreateStatutoryMastersOptions/>,
    },
    {
        path:"/admin/dashboard/create/statutorydetails",
        element:<CreateStatutoryDetailsOptions/>,
    },
    {
        path:"/admin/dashboard/alter",
        element:<AlterOptions/>,
    },
    {
        path:"/admin/dashboard/alter/accountingmaster",
        element:<AlterAccountingMastersOptions/>,
    },
    {
        path:"/admin/dashboard/alter/inventorymaster",
        element:<AlterInventoryMastersOptions/>,
    },
    // {
    //     path:"/admin/dashboard/create/statutorymaster",
    //     element:<StatutoryMastersOptions/>,
    // },
    // {
    //     path:"/admin/dashboard/create/statutorydetails",
    //     element:<StatutoryDetailsOptions/>,
    // },
    {
      path:"/admin/dashboard/create/inventorymaster/unit",
      element:<Unit/>
    },
    {
      path:"/admin/dashboard/create/accountingmaster/creategroup",
      element:<Group/>
    },
    {
      path:"/admin/dashboard/create/accountingmaster/createvoucher",
      element:<Voucher_type/>
    },
    {
      path:"/admin/dashboard/createstock",
      element:<Stock_Item/>
    }
  ]);

export default router;