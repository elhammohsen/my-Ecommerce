import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import axios from 'axios'
import Products from './../Products/Products';
import Loading from '../Loading/Loading';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../MainSlider/MainSlider';
import { Link, useParams } from 'react-router-dom';


export default function Categories() {

  // let {id , category}=useParams()
  const [categories , setCategories] = useState([])

  async function getRecentcategories(){
    let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    console.log(data.data);
    setCategories(data.data)
  }

  useEffect(()=>{
    getRecentcategories()
  },[])


    
  return <>
    <h2 className="text-3xl font-bold mt-10 ">Categories</h2>
    
      
      {categories.length?<div className="flex flex-wrap mt-10">
        {categories?.map((category,index)=><Link key={index} to={`/Recentcategories/${category._id}/${category.name}`}>
          <div className='w-[300px] p-4 py-4 h-[300px]  border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700 cursor-pointer' >
        <img  src={category.image} className='w-full h-[200px] mt-4'/>
        <h3>{category.name}</h3>
      </div>
        </Link> )}
    
    </div>:
    <div className="flex justify-center items-center">
      <Loading/>
    </div>
    }
     
    
      

      
  </>
}
