import React from 'react';

import  { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import PokeCard from './pokeCard';

const PokeList = () => {

    const [list,setList] = useState([])
    const [pagination, setPagination] = useState({
        next: null,
        previous: null,
    })
const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    console.log(list)
    console.log(pagination)
    
    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            setList(data.results)
            setPagination({
                next: data.next,
                previous: data.previous,
            })
        })

  },[url])

    const handleSiguiente = () => {
        pagination.next && setUrl (pagination.next)
    }
    const handleAnterior = () => {
        pagination.previous && setUrl (pagination.previous)
    }

   
    return (
        <div className="container my-5">
            <h2>PokeList</h2>
            <hr />
<div className='row'>
    {
        list.map((el) => <PokeCard key={el.name} pokemonUrl={el.url} />)
    }
</div>
        </div>
    );
};

export default PokeList;
