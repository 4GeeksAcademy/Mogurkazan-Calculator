import React, {useState} from "react";

export const Experimento = () => {
    const [impri, setImpri] = useState('');
    
    const handleClicNum = (numero) => {
        setImpri(impri + numero)
    };
    const handleClicOperator = (operator) => {
        setImpri(impri + operator)
    };
    
    return (
        <>
            <h1>{impri}</h1>
            <button onClick={() => handleClicNum('1')}>1</button>
            <button onClick={() => handleClicNum('2')}>2</button>
            <button onClick={() => handleClicOperator('+')}>+</button>
            <button>=</button>
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