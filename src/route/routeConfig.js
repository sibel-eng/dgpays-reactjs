import Login from "../views/login/Login";
import { useAuthProvider } from "../views/login/useAuthProvider";
import AddCustomer from "../views/product/AddCustomer";
import CustomerDetail from "../views/product/CustomerDetail";
import CustomerList from "../views/product/CustomerList";
import UpdateCustomer from "../views/product/UpdateCustomer";

export const routeConfig = 
[
    {
        path:'/login',
        element:<Login/>,
        key:1
    },
    {
        path:'/addCustomer',
        element:<AddCustomer/>,
        key:2
    },
    {
        path:'/customers',
        element:<CustomerList/>,
        key:3
    },
    {
        path:'/customers/detail/:id',
        element:<CustomerDetail/>,
        key:4
    },
    {
        path:'/customers/update/:id',
        element:<UpdateCustomer/>,
        key:5
    },
    {
        path:'/dashboard',
        element:<useAuthProvider/>,
        key:6
    },

]