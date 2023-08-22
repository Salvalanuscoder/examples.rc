import React from 'react'
import ItemCard from '../../ItemCard/ItemCard'
import { withProductsData } from './withProductsData'


const itemList2 = (products, loading) => {
    return (

        <div className="catalogo-contenedor">
            <h2>Item List Container</h2>
            <hr />


            {["paula", "luna", "clemen"]}

            <div className='row'>
                {
                    loading
                        ? <h2>Cargando...</h2>
                        : products.map((prod) => <ItemCard key={prod.id} item={prod} />)
                }

            </div>
        </div>

    )
}

export default withProductsData(itemList2)


export const Contacto2 = withProductsData(({ products, loading }) => {
    console.log(products, loading)

    return (
        <div>
            Contacto 2
        </div>
    )
})