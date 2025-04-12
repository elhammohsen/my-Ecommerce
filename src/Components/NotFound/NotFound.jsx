import React from 'react'
import style from './NotFound.module.css'
import img1 from '../../assets/images/6020155.jpg'


export default function NotFound() {

    
  return <>
    <h2 className="text-3xl my-10 font-bold">NotFound</h2>
    <div className='w-[75%] flex justify-center items-center'>
    <img  src={img1} alt="" />
    </div>
  </>
}
