import { useState } from "react"

export const Helloword=(props)=>{
    const[mensaje,setmensaje]=useState(false)
     const click=()=>{
        if(setmensaje){
            setmensaje(true)
        }
        
     }
    return(
        <>
        <h1>Hola. {props.mundo}{mensaje?" (Desde el Estado)":""}</h1>
        <button className="" onClick={click}>Click para abrir</button>
        </>
    )
}