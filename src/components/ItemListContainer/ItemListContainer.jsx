import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { pedirDatos } from '../../helpers/pedirDatos.js';
import ItemList from '../ItemList/ItemList';
// import { useProducts } from '../hooks/useProducts';
import { useParams} from 'react-router-dom'


        const ItemListContainer = ({saludo}) => {
            const [productos, setProducts] = useState([])
            const [loading, setLoading] = useState(true)

            const { categoryId } = useParams()
            console.log(categoryId)

            useEffect(() => {
              setLoading(true);
      
              pedirDatos()
                  .then(r => {
                    if (categoryId) {
                      setProducts(r.filter(prod => prod.category === categoryId));
                    } else {
                      setProducts(r)
                    }
                  })
                  .catch(e => console.log(e))
                  .finally(() => {
                      setLoading(false);
      
                  })
          }, [categoryId])
           

    return (
        <div>
          {
              loading
                ? <h2>Cargando...</h2>
                :  <ItemList productos={productos}/>
          }    
        </div>
    )
}

export default ItemListContainer;


// const pedirDatos =(bool) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve("promesa resuelta") 
//                     if (bool) {
//                         resolve("promesa resueta")
//                     } else {
//                         reject("promesa rechzada")
//                     }
//                 },2000)
//         })
//     }