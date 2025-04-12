import React from 'react'
import style from './Loading.module.css'
import { Puff } from 'react-loader-spinner'


export default function Loading() {

    
  return <>
    <Puff
  visible={true}
  height="150"
  width="150"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </>
}
