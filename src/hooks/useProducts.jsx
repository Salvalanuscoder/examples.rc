import React, { useState, useEffect } from 'react';
import { useFetch } from "./useFetch";
import { pedirDatos } from '../helpers/pedirDatos';

export const useProducts = () => {
  const [products, setProducts] = useState([]); // Usar useState
  const [loading, setLoading] = useState(true); // Usar useState

  useEffect(() => {
    pedirDatos(true);

    fetch('https://pokeapi.co/api/v2/')
      .then(r => setProducts(r))
      .catch(e => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { products, loading };
};