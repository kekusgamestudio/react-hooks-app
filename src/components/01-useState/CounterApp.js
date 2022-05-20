import React, { useState } from 'react';
import './counter.css';

// Utilizo el useState para hacer un contador en un objetos
// Agrego un operador spread para cambiar el valor de una sola propiedad del objeto
// Por lo general no se state, setState pero lo cambié para mayor claridad

export const CounterApp = () => {

    const [counterObj, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2 } = counterObj;

    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <h1>Counter 3: {counterObj.counter3}</h1>
            <h1>Counter 4: {counterObj.counter4}</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => {
                    setCounter({
                        ...counterObj,
                        counter1: counter1 + 1,
                    });
                }}
            >
                +1
            </button>
        </>
    )
}
