import  {useState} from "react";

export default function Search(props) {
    const [search, setSearch] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokeapi" />
            <form
                className="flex items-center"
                onClick={(e) => e.preventDefault()}
                onChange={handleSubmit}
            >
                <div className="relative w-full">
                    <input
                        className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500"
                        placeholder="Buscar pokemon"
                    />
                </div>
                <button
                    className="items-center font-medium"
                    onClick={()=> props.getPokemon(search)}
                    type="submit"
                >
                    Buscar
                </button>
            </form>
        </div>
    );
}