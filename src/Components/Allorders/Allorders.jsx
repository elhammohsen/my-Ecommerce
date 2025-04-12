import React, { useEffect, useState } from 'react'
import style from './Allorders.module.css'
import axios from 'axios'


export default function Allorders() {

  const [orders , setOrders] = useState([])
  
  async function getOrders(){
    let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/`);
    console.log(data.data);
    // console.log(data.data.isDelivered);
    setOrders(data.data)
    
  }

   useEffect(()=>{
    getOrders()
   },[])

  return <>
    <h2 className="text-3xl text-center my-10 font-bold text-emerald-600">Allorders</h2>

    {orders.length>0 ?  <>
    
      
<div className="relative p-5 overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          oerderNb
        </th>
        <th scope="col" className="px-6 py-3">
          number Of Items
        </th>
       
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
        payment Method
        </th>
        <th scope="col" className="px-6 py-3">
        status
        </th>
      </tr>
    </thead>
    <tbody>
     {orders.map((order,index)=><>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-8 font-semibold text-lg text-gray-900 whitespace-nowrap dark:text-white">
        {index +1}
        </th>
        <td className="px-6 py-8 font-semibold text-lg">
          {order.cartItems.length}
        </td>
        <td className="px-6 py-8 font-semibold text-lg">
          {order.totalOrderPrice}
        </td>
        <td className="px-6 py-8 font-semibold text-lg">
          {order.paymentMethodType}
        </td>
        <td className="px-6 py-8 font-semibold text-lg">
          {order.isDelivered == false ? <div className='text-red-600'>in progress</div> : <div className='text-emerald-600'>delivered</div>}
        </td>
       
      </tr>
     </>
    ) }
      
    </tbody>
  </table>
</div>


    
    </>
    
  :<h1 className='capitalize text-3xl text-center mb-[300px] my-[50px] text-red-800 font-bold'>No product added</h1>
  }
  </>
}
