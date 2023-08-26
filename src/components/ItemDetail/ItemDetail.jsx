import React from 'react'
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({ item }) => {
    const { addCart, isInCart } = useContext(CartContext);

    console.log(isInCart(item.id))

    const [cantidad, setCantidad] = useState(1)
    // const [color, setColor] = useState('blanco')
    const handleAgregar = () => {
        // console.log('hello world');
        const newItem = {
            ...item,
            cantidad
        }

        addCart(newItem)
    }

    return (
        <div className='container my-5'>
            <h4 className="item">{item.name}</h4>
            <img className="img" src={item.img} alt={item.nombre} />
            <p className="price">precio: ${item.price}</p>
            <button className="btn btn-success">Agregar</button>


            {
                isInCart(item.id)
                    ? <Link className="btn btn-success" to="/cart">terminar mi compra</Link>
                    : <ItemCount
                        max={item.stock}
                        counter={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }
        </div>

    )
}

export default ItemDetail