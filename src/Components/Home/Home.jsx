import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import Products from './../Products/Products';
import RecentProducts from '../RecentProducts/RecentProducts';
import Loading from '../Loading/Loading';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../MainSlider/MainSlider';



export default function Home() {

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

<MainSlider/>

<CategoriesSlider/>




    {products.length?<div className="flex flex-wrap">
      
    {products.map((product ,index )=> <RecentProducts key={index} product={product}/>)}
    </div>:
    <div className="flex justify-center items-center">
      <Loading/>
    </div>
    }

    

  </>
}
