import React from 'react'
import { useSelector } from 'react-redux'
import {  Navigate } from 'react-router'


const ProtectRoutes = ({element}) => {
 
    const isAuthenticated = useSelector((state)=> state.AuthSlicer.isAuthenticated)
    console.log(isAuthenticated)
   
  

  return isAuthenticated? element :<Navigate to={'/login'} replace/>
}

export default ProtectRoutes
{/*  */}