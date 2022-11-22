import { useState  } from 'react';

const NameForm = () => {
    const [value, setValue] = useState('');
    const changeHandler = (event) => setValue(event.target.value);
    const submitHandler = (event) => {
        event.preventDefault();
        alert('Nombre: '+value);
    };
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Nombre: </label>
            <br />
            <input type="text" name="name" value={value} onChange={changeHandler} />
            <br />
            <input type="submit" value="Enviar"></input>
        </form>
    );
};

export default NameForm;