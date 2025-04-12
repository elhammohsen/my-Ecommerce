import React, { useEffect, useState } from 'react'
import style from './CategoriesSlider.module.css'
import Slider from "react-slick";
import axios from 'axios';



export default function CategoriesSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000
    
  };

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

    <Slider {...settings}>
      {categories?.map((category,index)=> <div className='my-6' key={index}>
        <img  src={category.image} className='w-full h-[200px] mt-4'/>
        <h3>{category.name}</h3>
      </div>)}
    </Slider>
  </>
}
