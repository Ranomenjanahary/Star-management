import React from 'react';
import { Navigate } from "react-router";
import {useDataProvider} from "../config/ApiContext";

const AdminRoute = () => {
     const { isAdmin } = useDataProvider();

    return isAdmin ? <Navigate to='/login'/> : <Navigate to='/login'/>
};

export default AdminRoute;