import { useState, useEffect } from 'react';

export const useFetch = (url, id) => {
  const [data, setData] = useState(null); 

  useEffect(() => {
        fetch('https://pokeapi.co/api/v2/')
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(err => console.log(err))

  },[url, id])
  return { data}
};
