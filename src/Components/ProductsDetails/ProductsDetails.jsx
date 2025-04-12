import React, { useEffect, useState } from 'react'
import style from './ProductsDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Categories from './../Categories/Categories';
import Slider from "react-slick";
import RecentProducts from '../RecentProducts/RecentProducts';


export default function ProductsDetails() {

  let {id , category}=useParams();
  const [productsDetails,setProductDetails]=useState({});
  const [relatedProducts,setrelatedProducts]=useState([]);
  

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000
    
  };

  async function getProductDetails(){
    let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);

    console.log(data.data);
    setProductDetails(data.data)
  }


  function getAllProducts(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((res)=>{
      let related = res.data.data.filter((product)=>product.category.name == category)
      setrelatedProducts(related)
      console.log(related);
      
    })
  }

  useEffect(()=>{
    getProductDetails(id);
    getAllProducts()
  },[id , category])

    
  return <>
    <h2 className="text-3xl">ProductsDetails</h2>
    <div className="p-12 w-[95%]  mx-auto me-10">
    <div className="flex items-center  py-10">
      <div className="w-1/4">
      <Slider {...settings}>
      {productsDetails.images?.map((image,index)=> <img key={index} src={image} className='w-full'/>)}
    </Slider>
      </div>

      <div className="w-3/4 p-4">
        <div>
          <h2>{productsDetails.title}</h2>
          <p className='my-6 text-gray-500'>{productsDetails.description}</p>
          
          <h2 className='text-sm text-green-500'>{productsDetails.category?.name}</h2>
          <div className="flex justify-between my-2">
          
        <h3>{productsDetails.price} EGP</h3>
        <h3><i className='fas fa-star text-yellow-300'></i> {productsDetails.ratingsAverage}</h3>
        
      </div>
      <button className='w-full bg-green-500 rounded text-white'>Add to cart</button>


        </div>
      </div>

    </div>
    </div>

    <div className='flex flex-wrap w-[85%] mx-auto justify-center items-center'>

    
    {relatedProducts.length>0? relatedProducts.map((product)=>(
      <div key={product.id} className='w-full md:w-1/3 lg:w-1/4 xl:w-1/4'>

      
      <div className="w-full p-4 py-4">
        
        {/* <div className=''>
         <Link to={`/productdetails/${product.id}/${product.category.name}`}>
         <img src={product.imageCover} className='w-full' alt={product.title} />
          <h2 className='text-sm text-green-500'>{product.category.name}</h2>
          <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
          <div className="flex justify-between my-2">
            <h3>{product.price} EGP</h3>
            <h3><i className='fas fa-star text-yellow-300'></i> {product.ratingsAverage}</h3>
            
          </div>
         </Link>
          <button onClick={()=>RecentProducts()} className='w-full bg-green-500 rounded text-white'>Add to cart</button>
        </div> */}

        <div className="group relative flex-wrap border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700 cursor-pointer p-5 pb-20"> 
            
            
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img src={product.imageCover} className="w-full" alt={product.title} />
              <h2 className="text-sm text-green-500">{product.category.name}</h2>
              <h2 className="font-medium">
                {product.title.split(' ').slice(0, 2).join(' ')}
              </h2>
              <div className="flex justify-between my-2">
                <h3>{product.price} EGP</h3>
                <h3>
                  <i className="fas fa-star text-yellow-300"></i> {product.ratingsAverage}
                </h3>
              </div>
            </Link>
        
            
            <button
              onClick={() => RecentProducts()}
              className="absolute bottom-5 left-5 right-5 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 bg-green-500 rounded-md p-2 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>

        </div>
    )) : <div className='spinner'></div>}
    </div>
  </>
}

