import React from 'react';
import {useDataProvider} from "../config/ApiContext";
import {Navigate, Outlet} from "react-router";

const ProtectedRoute = () => {
    const { isAdmin } = useDataProvider();

    return isAdmin ? <Outlet/> : <Navigate to='/login'/>;
};

export default ProtectedRoute;