
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import FetchData from "./renderprops/FetchData";
import getColorByType from "../../utils/GetColorByType";

const PokeApi = () => {
    const [id, setId] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchId, setSearchId] = useState(1);
    const handleNext = () => id < 151 && setId(id + 1);
    const handlePrev = () => id > 1 && setId(id - 1);
    const handleSearch = (e) => {
        const value = parseInt(e.target.value);
        if(typeof value !== "number" || value < 1 || value > 151) return setSearchId(id);
        setSearchId(() => value);
    }

    return (
        <div className="container my-5">
            <h2>PokeAPI</h2>
            <hr />
            <div>Pokemon id: {id}</div>
            <FetchData url={`https://pokeapi.co/api/v2/pokemon/${id}`} arr={[id]} setLoading={setLoading}>
                {(pokemon) => (
                    <>
                        {
                            //operador logico && AND
                            pokemon && pokemon.sprites &&
                            <div>
                                {   loading ? 
                                    <div>Loading</div>
                                    :
                                    <>
                                        <input type="number" onChange={(e) => handleSearch(e)}/>
                                        <button onClick={() => setId(() => searchId)}>Search</button>
                                        <h4>{pokemon.name}</h4>
                                        {pokemon.types.map((t, i) => {
                                            const colorType = getColorByType(t.type.name)
                                            return <div style={{"backgroundColor": colorType}} key={`${t.type.name}-${i}`}>{t.type.name}</div>
                                        })}
                                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                    </>

                                }
                            </div>
                        }
                    </>
                )}
            </FetchData>



            <button onClick={() => handlePrev()} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={() => handleNext()} className="btn btn-primary mx-1">Siguiente</button>
        </div>
    );
};

export default PokeApi;
