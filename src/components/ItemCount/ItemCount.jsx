import React from 'react'
import { useState } from 'react'

const ItemCount = ({max, cantidad, setCantidad, agregar}) => {


    const handleRestar = () => {
        cantidad > 1 && setCounter(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < max && setCounter(cantidad + 1)
    }


    return (
        <div>
            <button onClick={handleRestar} className='btn btn-outline-primary'>-</button>
            <span className='mx-2'>{cantidad}</span>
            <button onClick={handleSumar} className='btn btn-primary'>+</button>
            <br />
            <button onClick={agregar} className='btn btn-success-2'>Agregar</button>
        </div>
    )
}

export default ItemCount; 