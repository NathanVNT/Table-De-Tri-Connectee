import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {DashboardPanel} from "./pages/DashboardPanel"
import PageNotFound from "./pages/page-not-found";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import TestApi from "./components/TestApi";
import {Dashboard} from "@mui/icons-material";
import {UserDashboard} from "./pages/UserDashboard";
export const App = () => {

      return (
          <>
          <Nav/>
          <div className="App">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/dashboard'} element={<DashboardPanel/>}/>
                    <Route path={"/*"} element={<PageNotFound/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/testapi"} element={<TestApi/>}/>
                    <Route path={"/user"} element={<UserDashboard/>}/>
                </Routes>
          </div>

          </>
      )

};


