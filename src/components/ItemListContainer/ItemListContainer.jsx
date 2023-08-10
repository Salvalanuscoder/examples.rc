import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { pedirDatos } from '../../helpers/pedirDatos.js';
import ItemList from '../ItemList/ItemList';
import { llamarProductos, useProducts } from '../../hooks/useProducts';




        const ItemListContainer = ({saludo}) => {
            const[productos, setproductos] = useState([])
            console.log(productos)

            useEffect(() => {
                pedirDatos()
                  .then((data) => {
                    console.log("Datos obtenidos:", data);
                    setproductos(data);
                  })
                  .catch((error) => {
                    console.log("Error al obtener datos:", error);
                  });
              }, []);
        // useEffect(()=>{
        //    console.log(fetch('https://ben10-api.herokuapp.com/aliens'))
        //    .then((resp) => resp.json())
        //    .then((data) =>{
        //     console.log(data)
        //    })
        // }, [])
const usuarios = [
    { id:1, nombre: "matias"},{ id:2, nombre: "fede"},{ id:3, nombre: "Ivan"},
]
const resultado = usuarios.map((user) => user.nombre)

    return (
        <div>
            <ItemList productos={productos}/>
            {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
    
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