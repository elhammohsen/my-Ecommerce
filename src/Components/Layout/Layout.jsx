import React, { useContext, useEffect } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'


export default function Layout() {

  let {setUserData}=useContext(UserContext);
  let navigate = useNavigate();
 
  


  return <>
    <Navbar/>

    <div className="container md:pt-12">
    <Outlet></Outlet>
    </div>

    <Footer/>
  </>
}
