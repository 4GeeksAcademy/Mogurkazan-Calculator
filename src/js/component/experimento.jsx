import React, {useState} from "react";

export const Experimento = () => {
    const [value, setValue] = useState('');
   
    
    return (
        <>
            <input type= "text" value={value}/>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))}/>
        </>
    )
}
//crear 2 botones con 2 numeros, 1 boton con =, un p para imprimir
//linkear los 2 botones con el p 
//hacer una funcion para sumar los 2 botones y que se active con el =
//
//
//
//