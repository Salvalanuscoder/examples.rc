import React from 'react'
import { useProducts } from '../hooks/useProducts'
import { useEffect, useSate } from 'react'


const Contacto = () => {
    // const { product } = useProducts()
    // console.log(product)
   

    const clickear = () => {
      // console.log('click')
    }

    useEffect(() => {
    window.addEventListener('click', clickear)

    return() => {
      window.removeEventListener('click' , clickear) 
    }
    }, [])

     
  return (
    <div onClick={clickear} className='container my-5'>
        <h2>Contacto</h2>
        <hr />
    </div>
  )
}

export default Contacto