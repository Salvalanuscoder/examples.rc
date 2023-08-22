
import React, { useState, useEffect } from 'react';



//HOC--> HOF (high odrder functions)

import { pedirDatos } from "../../../helpers/pedirDatos"

// function fn(fn) {
    // recibe una fn por parametro, o bien retorna una funcion
    // return fn2
// }


// HOC

// function hoc(comp) {
    // recibe un comp por parametro


    export const withProductsData = (Component) => {
        const withProductsData = () => {
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

            return <Component products={products} loading={loading}/>
        }

        return withProductsData
    }