// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/header';
import { pedirDatos } from './helpers/pedirDatos';
// import ItemList from './components/ItemList/ItemList';
import PokeApi from './components/examples/pokeApi';
import pokeList from './components/examples/pokeList';
import Contacto from './components/Contacto/Contacto';
import Post from './components/examples/Post';
import ItemList2, { Contacto2 } from './components/examples/hoc/itemList2';
import ItemList3 from './components/examples/renderprops/itemList3';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  // const [productos, setproductos] = useState(0)
  return (
    <>
      <div>

        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={ <ItemListContainer/>} />
            <Route path='/products/:categoryId' element={ <ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer/> } />
            <Route path='/contacto' element={ <Contacto/>} />
            <Route path='/pokeapi' element={ <PokeApi/>} />
            {/* <Route path='*' element={ <Error404 /> } /> */}
            <Route path='*' element={ <Navigate to="/"/>}/>
          </Routes>
          {/* <ItemList3 /> */}
          {/* <ItemListContainer saludo={"Welcome to react!"}/> */}
          {/* <ItemList productos={productos}/> */}
          {/* <Contacto/> */}
          {/* <ItemList2/> */}
          {/* <Contacto2/> */}
          {/* <PokeApi /> */}
          {/* <Post /> */}
          {/* <pokeList/> */}
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
// export default ItemListContainer