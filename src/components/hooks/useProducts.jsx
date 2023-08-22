import { useEffect, useState } from 'react';
import { useFetch } from "./useFetch";
import { pedirDatos } from '../../helpers/pedirDatos';

export const useProducts = () => {
  const [products, setProducts] = useState([]); // Usar useState
  const [loading, setLoading] = useState(true); // Usar useState

  useEffect(() => {
    setLoading(true);

    // fetch('https://pokeapi.co/api/v2/')
    pedirDatos()
      .then(r => setProducts(r))
      .catch(e => console.log(e))
      .finally(() => {
            setLoading(false);
      });
  }, []);

  return { 
    products, 
    loading 
};
};