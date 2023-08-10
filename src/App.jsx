// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/header/header';
import {pedirDatos} from './helpers/pedirDatos';
// import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';



function App() {
  const [productos, setproductos] = useState(0)

  return (
    <>
      <div>
      <Header/>
        <ItemListContainer saludo={"Welcome to react!"}/>
        <ItemList productos={productos}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
       
    </>
  )
}

// export default App
export default ItemListContainer