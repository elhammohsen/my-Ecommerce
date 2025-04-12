// import React, { useContext, useState } from 'react'
// import style from './RecentProducts.module.css'
// import { Link } from 'react-router-dom'
// import Slider from "react-slick";
// import Products from './../Products/Products';
// import { CartContext } from '../../context/CartContext';
// import toast from 'react-hot-toast';


// export default function RecentProducts() {

// let {addProductToCart ,numberOfItems ,setNumberOfItems} =  useContext(CartContext);
// const[loading , setLoading]=useState(false)

// async function addToCart(id){
//   setLoading(true);
//   let response =  await addProductToCart(id)
//   console.log(response.data);

//   if(response.data.status == "success"){
//     setNumberOfItems(numberOfItems+1)
//     toast.success(response.data.message);
//     setLoading(false);
//   }else{
//     toast.error(response.data.message);
//     setLoading(false);
//   }
  

// }

    
//   return <>
//     {/* <div className="w-1/5 p-4 py-4 xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"> */}
    
//     {/* <div className='flex-wrap  border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700 cursor-pointer p-5  '> */}
//      {/* <Link to={`productdetails/${product.id}/${product.category.name}`}> */}
//      {/* <img src={product.imageCover} className='w-full ' alt={product.title} />
//       <h2 className='text-sm text-green-500'>{product.category.name}</h2>
//       <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
//       <div className="flex justify-between my-2">
//         <h3>{product.price} EGP</h3>
//         <h3><i className='fas fa-star text-yellow-300'></i> {product.ratingsAverage}</h3>
//          */}
//       {/* </div>
//      </Link>
//       <button onClick={()=>RecentProducts()} className='w-full bg-green-500 rounded-md p-2 text-white'>Add to cart</button>
//     </div>
//     </div> */}



// <div className="w-1/5 p-4 py-4 xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
//   <div className="group relative flex-wrap border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700 cursor-pointer p-5 pb-20"> 
    
    
//     <Link to={`/productdetails/${product.id}/${product.category.name}`}>
//       <img src={product.imageCover} className="w-full" alt={product.title} />
//       <h2 className="text-sm text-green-500">{product.category.name}</h2>
//       <h2 className="font-medium">
//         {product.title.split(' ').slice(0, 2).join(' ')}
//       </h2>
//       <div className="flex justify-between my-2">
//         <h3>{product.price} EGP</h3>
//         <h3>
//           <i className="fas fa-star text-yellow-300"></i> {product.ratingsAverage}
//         </h3>
//       </div>
//     </Link>

    
//     <button
//       onClick={() => addToCart(product.id)}
//       className="absolute bottom-5 left-5 right-5 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 bg-green-500 rounded-md p-2 text-white"
//     >
//       {loading ? <i className='fas fa-spinner fa spin'></i> : "Add to cart"}
//     </button>
//   </div>
// </div>


//   </>
// }


import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';
import './RecentProducts.module.css';

export default function RecentProducts({ product }) { // Accept product as prop
  const { addProductToCart, setNumberOfItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  async function addToCart(id) {
    if (!id) return;
    
    setLoading(true);
    try {
      const response = await addProductToCart(id);
      
      if (response?.data?.status === "success") {
        setNumberOfItems(prev => prev + 1); // Functional update
        toast.success(response.data.message);
      } else {
        toast.error(response?.data?.message || 'Failed to add to cart');
      }
    } catch (error) {
      console.error('Add to cart error:', error);
      toast.error('An error occurred while adding to cart');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-1/5 p-4 py-4 xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
      <div className="group relative flex-wrap border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700 cursor-pointer p-5 pb-20">
        <Link to={`/productdetails/${product.id}/${product.category?.name}`}>
          <img 
            src={product.imageCover} 
            className="w-full" 
            alt={product.title || 'Product image'} 
          />
          <h2 className="text-sm text-green-500">
            {product.category?.name || 'Category'}
          </h2>
          <h2 className="font-medium">
            {product.title?.split(' ').slice(0, 2).join(' ') || 'Product Title'}
          </h2>
          <div className="flex justify-between my-2">
            <h3>{product.price || 0} EGP</h3>
            <h3>
              <i className="fas fa-star text-yellow-300"></i> 
              {product.ratingsAverage || 0}
            </h3>
          </div>
        </Link>

        <button
          onClick={() => addToCart(product.id)}
          disabled={loading}
          className={`absolute bottom-5 left-5 right-5 opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 bg-green-500 rounded-md p-2 text-white ${
            loading ? 'opacity-100' : ''
          }`}
        >
          {loading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Add to cart"
          )}
        </button>
      </div>
    </div>
  );
}