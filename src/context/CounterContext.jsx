import { createContext, useState } from "react";

let counterContext = createContext(0);


export default function CounterContextProvider(props){

    const [count,setCount]=useState()
    return<>
    <CounterContext.Provider value={{count,setCount}}>
        {props.children}
    </CounterContext.Provider>
    </>
}