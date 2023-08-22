// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/header/header';
import {pedirDatos} from './helpers/pedirDatos';
// import ItemList from './components/ItemList/ItemList';
import PokeApi from './components/examples/pokeApi';
import pokeList from './components/examples/pokeList';
import Contacto from './components/Contacto/Contacto';
import Post from './components/examples/Post';
import ItemList2,{Contacto2} from './components/examples/hoc/itemList2';
import ItemList3 from './components/examples/renderprops/itemList3';

function App() {
  // const [productos, setproductos] = useState(0)
  return (
    <>
      <div>
      <Header/>
      {/* <ItemList3 /> */}
        {/* <ItemListContainer saludo={"Welcome to react!"}/> */}
        {/* <ItemList productos={productos}/> */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {/* <Contacto/> */}
        {/* <ItemList2/> */}
        {/* <Contacto2/> */}
        <PokeApi/>
        <Post/>
        {/* <pokeList/> */}
      </div>
    </>
  )
}

export default App
// export default ItemListContainer