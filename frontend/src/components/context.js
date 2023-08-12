import React, { createContext, useContext, useState } from 'react'
const Acontext=createContext(null)

export const ChangeProvider=({children})=>{
    const [temp,setTemp]=useState(false)
    const change=()=>{
        if(temp){
            setTemp(false)
        }else{
            setTemp(true)
        }
    }
  return (
    <Acontext.Provider value={{temp,change}}>
        {children}
    </Acontext.Provider>
    )
}

export const useChange=()=>{
    return useContext(Acontext)
}

