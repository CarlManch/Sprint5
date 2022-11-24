import { useState } from "react";

const MIN = 2;
const MAX = 50;
const GROUP = `[a-záéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
const VALIDATION = new RegExp(`^(${GROUP})( ${GROUP})*$`);

const NameFormWithFieldValidation = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const changeHandler = (event) => {
        setValue(event.target.value);
        const isValid = VALIDATION.test(event.target.value);
            if (isValid) setError('');
            else setError('Nombre no válido');
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

export default NameFormWithFieldValidation;