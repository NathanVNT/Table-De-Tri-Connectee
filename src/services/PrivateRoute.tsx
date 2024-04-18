import {useTokenStore} from "../helpers/GlobalDataStore";
import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {UserDashboard} from "../pages/UserDashboard";

export default function PrivateRoute() {
    const { tokenData } = useTokenStore();
    return tokenData != null ?<Outlet/>:<Navigate to={"/login"}/>
}