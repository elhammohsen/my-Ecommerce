import axios from "axios";
import { createContext, useEffect, useState } from "react";



export let CartContext=createContext();


export default function CartContextProvider({children}){

const [cartId , setCartId]=useState(0)
const [numberOfItems , setNumberOfItems]=useState(0)

    let headers = {
        token : localStorage.getItem('userToken')
    }

    async function addProductToCart(productId){
        
            return await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
                productId
            } , {
                headers
        })
        .then((res)=>res)
        .catch((err)=>err);
       

      
    }
async function getLoggedUserCart(){
   return await axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {headers})
    .then((res)=>{
        console.log(res.data);
        setNumberOfItems(res.data.numOfCartItems)
        setCartId(res.data.data._id)
        return res;
        
    })
    .catch((err)=>err);
   
}

function updateCartProductQuantity(prductId , newCount){
   return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${prductId}` , {count: newCount} ,{headers})
    .then((res)=>res)
    .catch((err)=>err);
   
}

function deleteCartItem(prductId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prductId}`,{headers})
    .then((res)=>res)
    .catch((err)=>err);
}

function checkout(cartId , url , formData){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}` , {shippingAddress: formData} ,{headers} )
    .then((res)=>res)
    .catch((err)=>err);
}
useEffect(()=>{
    getLoggedUserCart()
},[])

    return <CartContext.Provider value={{checkout,deleteCartItem ,updateCartProductQuantity ,addProductToCart ,getLoggedUserCart , cartId ,numberOfItems ,setNumberOfItems}}>
    {children}
</CartContext.Provider>
}


