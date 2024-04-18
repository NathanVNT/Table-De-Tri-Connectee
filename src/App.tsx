import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import PageNotFound from './pages/page-not-found';
import Nav from './components/Nav';
import { UserDashboard } from './pages/UserDashboard';
import Teapot from './pages/Teapot';
import Jscience from './pages/Jscience';
import Login from './pages/Login';
import PrivateRoute from './services/PrivateRoute';
import { useTokenStore } from './helpers/GlobalDataStore';
import InterseptionBeforeunload from './helpers/InterseptionBeforeunload';
import Logout from "./pages/Logout";
export const App = () => {
    InterseptionBeforeunload.overrideBeforeunload();
    const tokenData = useTokenStore(state => state.tokenData);
    let isAuthenticate = false;
    if (tokenData.token != null){
        isAuthenticate = true
    }
    else {
        isAuthenticate = false
    }

    return (
        <>
            {<Nav auth={isAuthenticate} />}
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/user" element={<UserDashboard />} />
                    </Route>
                    <Route path="/jeanscience" element={<Jscience />} />
                    <Route path="/418" element={<Teapot />} />
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </>
    );
};
