import React from 'react'
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1)
const [color, setColor] = useState('blanco')
    const handleAgregar = () => {
        console.log('hello world');
    }

    // const handleRestar = () => {
    //     cantidad > 1 && setCantidad(cantidad - 1)
    // }
    // const handleSumar = () => {
    //     cantidad < item.stock && setCantidad(cantidad + 1)
    // }
    return (
        <div className='container my-5'>
            <h4 className="item">{item.name}</h4>
            <img className="img" src={item.img} alt={item.nombre} />
            <p className="price">precio: ${item.price}</p>
            <button className="btn btn-success">Agregar</button>


            {/* <div>
                <button onClick={handleRestar} className='btn btn-outline-primary'>-</button>
                <span className='mx-2'>{cantidad}</span>
                <button onClick={handleSumar} className='btn btn-primary'>+</button>
                <br />
                <button onClick={handleAgregar} className='btn btn-success-2'>Agregar</button>
            </div> */}

            <ItemCount
                max={item.stock}
             counter={cantidad}
             setCantidad={setCantidad}
             agregar={handleAgregar}
            />
        </div>

    )
}

export default ItemDetail