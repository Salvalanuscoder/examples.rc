import React from 'react'
import { useProducts } from '../hooks/useProducts'


const Contacto = () => {
    const { product } = useProducts()
    console.log(product)

     
  return (
    <div className='container my-5'>
        <h2>Contacto</h2>
        <hr />
    </div>
  )
}

export default Contacto