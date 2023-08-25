import React from 'react'

const ItemDetail = (item) =>{

  return (
    <div className='container my-5'>
                    <h4 className="item">{item.name}</h4>
                    <img className="img" src={item.img} alt={item.nombre} />
                    <p className="price">precio: ${item.price}</p>
                    <button className="btn btn-success">Agregar</button>
                    
                </div>
    
  )
}

export default ItemDetail