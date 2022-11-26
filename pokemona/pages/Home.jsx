import { useState } from "react";
import PokemonData from "../components/pokemonData";
import Search from "../components/search";
import { fetchPokemon } from "../services/getPokemon";
import {Alert, Spinner} from "react-bootstrap";//dependencies

const spinnerEstilo = {
    textAlign: "center",
    marginTop: "50px",
};
export default function Home(){
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const getPokemon = async(query) =>{
         if(!query){
            setErrorMsg("Debe ingresar un pokemon");
            setError(true);
            return;
         }
         setError(false);
         setLoading(true);
         setTimeout(async () => {
            try{
                const response = await fetchPokemon(query);
                const results = await response.json();
                setPokemon(results);
                setLoading(false);
            } catch(error){
                console.log(error);
                setLoading(false);
                setError(true);
                setErrorMsg("No se ha encontrado el pokemon");
            }
        },1000);
    };
    return(
        <div>
            {error ? <Alert variant="danger">{errorMsg}</Alert> : null}
            <Search getPokemon={getPokemon} />
            {loading ? (
                <div style={spinnerEstilo}>
                <Spinner style={spinnerStyle} animation="border"/>
                </div>
            ) : null}
            {!loading && pokemon ?(
                <PokemonData
                    name={pokemon.name}
                    sprites={pokemon.sprites.other.dream_world.front_default}//revisar
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types}
                />
            ):null}
        </div>
    );
}