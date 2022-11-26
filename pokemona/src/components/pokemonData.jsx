import ProgressBar from "react-bootstrap/ProgressBar";

function PokemonData(props) {
    return(
        <div>
            <div className="flex flex-row object-contain">
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md">
                    <h5 className="font-bold text-gray-900 dark:text-white">
                    {props.name}
                    </h5>
                    <img
                        src={props.sprite}
                        alt={props.name}
                        className="rounded-full shadow-lg"
                    />
                    <div>
                        <h2>
                            <strong>Abilities</strong>
                        <hr />
                        </h2>
                        {props.abilities.map((ability, key)=>(
                            <div key={key}>
                            <span>{ability.ability.name}</span>
                            </div>
                        ))}
                        <h2>
                            <strong>Types</strong>
                        </h2>
                        {props.types.map((type, key) => (
                            <div key={{key}}>
                                <span>{type.type.name}</span>
                            </div>
                        ))}    
                    </div>
                </div>

                <div className="w-full flex flex-col items-center bg-white rounded-lg border shadow-md>
                    <div className="w-full>
                        <h2>
                            <strong>Base Stats</strong>
                            <hr />
                        </h2>
                        {props.stats.map((stat, key)=> (
                            <div key={{key}}>
                                <strong>{stat.stat.name}</strong>
                                <ProgressBar animated
                                    now={stat.base_stat}
                                    max={150}
                                    label={stat.base_stat}
                                />
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default PokemonData;