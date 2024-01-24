import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import PageNotFound from "./pages/page-not-found";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import {UserDashboard} from "./pages/UserDashboard";
import { TestApi } from './components/TestApi';
import Teapot from './pages/Teapot';

export const App = () => {
    let auth = true
    return (
          <>
          <Nav auth ={auth}/>
          <div className="App">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={"/418"} element={<Teapot/>}/>
                    <Route path={"/*"} element={<PageNotFound/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/testapi"} element={<TestApi/>}/>
                    <Route path={"/user"} element={<UserDashboard/>}/>
                </Routes>
          </div>

          </>
      )

};


