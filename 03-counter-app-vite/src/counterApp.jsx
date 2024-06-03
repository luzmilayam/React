import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({valor}) => {
    
    const [counter, setCounter]= useState(valor)
    const handleAdd =() =>{
       // console.log(event)
       // setCounter(counter + 1)
        setCounter( (c) => c + 1)
    }
    const handleRest =() =>{
        // console.log(event)
        // setCounter(counter + 1)
         setCounter( (c) => c - 1)
     }
     const handleReset =() =>{
        // console.log(event)
        // setCounter(counter + 1)
         setCounter(  valor )
     }
    return ( //fragmento que reemplaza al div
    <> 
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>

    <button onClick={ handleAdd }> +1</button>
    <button onClick={ handleRest }> -1</button>
    <button onClick={ handleReset }> Reset</button>
    </>
    )
}

CounterApp.propTypes ={
    valor: PropTypes.number

}