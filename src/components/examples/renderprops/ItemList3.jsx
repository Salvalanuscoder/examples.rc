
import React from 'react'
import ProductsData from './ProductsData'
import ItemCard from '../../ItemCard/ItemCard'

function itemList3() {
    return (
        <div className='container my-5'>
            <h2>productos</h2>
            <hr />

            <ProductsData>
                {(products, loading) => (

                    <div className='row'>
                        {
                            loading
                                ? <h2>Cargando...</h2>
                                : products.map((prod) => <ItemCard key={prod.id} item={prod} />)
                        }

                    </div>
                )}
            </ProductsData>
        </div>
    )
}

export default itemList3