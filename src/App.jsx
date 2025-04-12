import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Categories from './Components/Categories/Categories'
import Products from './Components/Products/Products'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NotFound from './Components/NotFound/NotFound'
import Brands from './Components/Brands/Brands'
import counterContextProvider from './context/CounterContext';
import UserContextProvider from './context/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductsDetails from './Components/ProductsDetails/ProductsDetails'
import BrandsDetails from './Components/brandsDetails/brandsDetails'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './context/CartContext'
import { Toaster } from 'react-hot-toast';
import Checkout from './Components/Checkout/Checkout'
import Allorders from './Components/Allorders/Allorders'
import Recentcategories from './Components/Recentcategories/Recentcategories'


let routers=createBrowserRouter([{path:'',element:<Layout/>,children:[
  {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
  // {path:'home',element:<ProtectedRoute><Home/></ProtectedRoute>},
  {path:'cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
  {path:'categories',element:<ProtectedRoute><Categories/></ProtectedRoute>},
  {path:'products',element:<ProtectedRoute><Products/></ProtectedRoute>},
  {path:'productdetails/:id/:category',element:<ProtectedRoute><ProductsDetails/></ProtectedRoute>},
  {path:'Recentcategories/:id/:category',element:<ProtectedRoute><Recentcategories/></ProtectedRoute>},
  {path:'brands',element:<ProtectedRoute><Brands/></ProtectedRoute>},
  {path:'brandsDetails/:id/:name',element:<ProtectedRoute><BrandsDetails/></ProtectedRoute>},
  {path:'checkout',element:<ProtectedRoute><Checkout/></ProtectedRoute>},
  {path:'allorders',element:<ProtectedRoute><Allorders/></ProtectedRoute>},
  // {path:'my-Ecommerce',element:<ProtectedRoute><Home/></ProtectedRoute>},
  {path:'login',element:<Login/>},
  {path:'register',element:<Register/>},
  {path:'*',element:<NotFound/>},
]}])

function App() {
 

  return <UserContextProvider>
 
  <CartContextProvider>
  <RouterProvider router={routers}></RouterProvider>
  <Toaster/>
  </CartContextProvider>
  
  </UserContextProvider>
 
}

export default App
