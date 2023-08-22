import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { pedirDatos } from '../../helpers/pedirDatos.js';
import ItemList from '../ItemList/ItemList';
import { useProducts } from '../hooks/useProducts';


        const ItemListContainer = ({saludo}) => {
            const {productos, loading} = useProducts([])
            console.log(loading, productos)

           

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