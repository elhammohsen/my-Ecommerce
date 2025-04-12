


import React, { useEffect, useState } from 'react';
import style from './Recentcategories.module.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading'; // Your existing loading component




export default function categoryDetails() {

let {id , category}=useParams();
const [currentcategory, setCurrentcategory] = useState(null);

function getcategorys(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then((res)=>{
      console.log(res.data.data);
      let allCurrentcategory =res.data.data.filter((product)=>product.category.name == category);
     
      
      setCurrentcategory(allCurrentcategory);
      console.log(allCurrentcategory);
    })
    .catch((res)=>{
      console.log(res);
      
    })
  }

  useEffect(()=>{
    getcategorys(id)
    },[])

  return <>

   {currentcategory ?<div className="flex flex-wrap mt-10 ">
         {currentcategory?.map((product)=><div key={product.id}>
           <div className='relative text-center w-1/5  py-4 xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-[75%] m-auto flex-wrap border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700 cursor-pointer p-5 pb-5' >
           <img src={product.imageCover} alt={product.title} className="mx-auto max-w-xs w-full" />
        <h2 className="text-2xl font-bold mt-4">{product.title.split(' ').slice(0, 4).join(' ')}</h2>
      
       </div>
         </div> )}
     
     </div>:
     (
      <p className='text-center w-[700px] text-3xl font-bold mt-10 mx-auto'>category Not found.</p>
    )
     }
      
 


    
  </>

 
}