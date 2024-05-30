import {useTokenStore} from "../helpers/GlobalDataStore";
import React from "react";
import {Navigate, Outlet} from "react-router-dom";

export default function PrivateRoute() {
    const { tokenData } = useTokenStore();
    return tokenData.token != null ?<Outlet/>:<Navigate to={"/login"}/>
}