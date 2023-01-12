import React from 'react';
import {Navigate, Outlet, redirect} from "react-router-dom";
import {auth} from "./firebase";

export default function ProtectedRoute() {

  return <Outlet/>


};