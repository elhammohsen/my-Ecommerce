import React, { useContext, useEffect, useState } from 'react'
import style from './Products.module.css'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import { ProductsContext } from '../../context/ProductsContext';
import Loading from '../Loading/Loading';
import axios from 'axios';
import RecentProducts from '../RecentProducts/RecentProducts';


export default function Products({product}) {

  const [products , setProducts] = useState([])

  async function getRecentProducts(){
    let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    console.log(data.data);
    setProducts(data.data)
  }

  useEffect(()=>{
    getRecentProducts()
  },[])
 
  return <>
     {products.length?<div className="flex flex-wrap mt-10">
      
      {products.map((product ,index )=> <RecentProducts key={index} product={product}/>)}
      </div>:
      <div className="flex justify-center items-center">
        <Loading/>
      </div>
      }
  </>
  
}
