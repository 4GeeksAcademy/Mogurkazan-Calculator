import React, {useState} from "react";

export const Prueba = () => {
    const [numero, setNumero] = useState(0);
    
    return (
        <>
            <p></p>
            <div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(numero => (
                    <button key={numero} onClick={() => setNumero(numero)}>{numero}</button>
            ))}
            </div>
        </>
        
    )
}