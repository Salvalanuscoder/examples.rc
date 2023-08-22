import { useState, useEffect } from "react"
import { pedirDatos } from "../../../helpers/pedirDatos"


import React from 'react'

function ProductsData({ children }) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        setLoading(true);

        pedirDatos()
            .then(r => setProducts(r))
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false);

            })
    }, [])
    return (
        <>
            {children(products, loading)}
        </>
    )
}

export default ProductsData