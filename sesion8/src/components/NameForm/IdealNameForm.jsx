import { useState } from "react";

const MIN = 2;
const MAX = 50;
const GROUP = `[a-záéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
const VALIDATION = new RegExp(`^(${GROUP})( ${GROUP})*$`);

const CUSTOM_VALIDATION = (input) => {
    const matchesRegex = VALIDATION.test(input.trim());
    if (input.length < MIN) 
        return `Se necesitan mínimo ${MIN} caracteres`;
    else if (input.length > MAX * 4)
        return `Se necesitan aceptan máximo ${MAX * 4} caracteres`;
    else if (!matchesRegex) 
        return 'Formato inválido';
    else return '';
    };
    

const IdealNameForm = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const changeHandler = (event) => {
        setValue(event.target.value);
        const error = CUSTOM_VALIDATION(event.target.value);
        setError(error);
    };
        
    
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Boolean(error)) alert('Nombre '+value );
    };
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Nombre: </label>
            <br />
            <input type="text" name="name" value={value} 
            onChange={changeHandler} 
            />
            {Boolean(error) && <p>{error}</p>}
            <br />
            <input type="submit" value="Enviar"></input>
        </form>
    );
};

export default IdealNameForm;