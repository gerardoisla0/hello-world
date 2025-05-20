import React, { useEffect, useState } from 'react'

export const CounterComponent = () => {

    //let number: number = 10;
    //console.log('Componente de contador', number);
    const [number, setNumber] = useState(10);
    const [aprobado, setAprobado] = useState("No data");

    useEffect(() => {
        evalStudent(number);
    },[]);

    const increment = (value: number) => {
        //number = number + value;
        let newNumber = number + value;
        setNumber(newNumber);
        evalStudent(newNumber);
    }

    const evalStudent = (value: number) => {
        (value >= 10) ? setAprobado("Aprobado") : setAprobado("Desaprobado");
    }

  return (
    <div>
        <h1>Contador Actual : {number}</h1>
        <button onClick={ () => increment(1) } style={{backgroundColor:'green', color: 'white'}}>+1</button>
        <button onClick={ () => increment(-1) } style={{backgroundColor:'red', color: 'white'}}>-1</button>

        <p> Estado de Alumno: {aprobado} </p>
    </div>
  )

}

/* HOOK */
/* useState() mantener el estado de una variable */
/* useEffect() ejecutar codigo en base a ciertos cambios */
/* useRef, useMemo, useContext, useReducer, useCallback */
