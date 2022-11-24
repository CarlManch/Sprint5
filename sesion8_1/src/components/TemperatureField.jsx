import { convertTo } from '../temperature';

export function TemperatureField ({ value, from, to, onUpdate }){
    const temperature = convertTo(from, to, value)
    const changeHandler = (event) => {
        const value =event.target.value;
        const isNumeric = !isNaN(value);
        if (isNumeric) onUpdate(to, value);
    };
    return (
    <div>
        <label htmlFor={`T-${to}`}>°{to} &emsp;</label>
        <input
         id={`T-${to}`}
         type="number" 
         name={`T-${to}`}
         value={temperature}
         onChange={changeHandler}
         />
    </div>
    );
};
