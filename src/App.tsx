import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import PageNotFound from "./pages/page-not-found";
import Nav from "./components/Nav";
import {UserDashboard} from "./pages/UserDashboard";
import { TestApi } from './pages/TestApi';
import Teapot from './pages/Teapot';
import Jscience from './pages/Jscience';
import Login from './pages/Login';

export const App = () => {
    let auth = false
    // @ts-ignore
    return (
          <>
          <Nav auth ={auth}/>
              <h1>{}</h1>
          <div className="App">

              <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={"/418"} element={<Teapot/>}/>
                    <Route path={"/*"} element={<PageNotFound/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/testapi"} element={<TestApi/>}/>
                    <Route path={"/user"} element={<UserDashboard/>}/>
                    <Route path={"/jeanscience"} element={<Jscience/>}/>
                </Routes>

          </div>

          </>
      )

};


