import NameForm,{
  NameFormWithFormValidation,
  NameFormWithFieldValidation,
  NameFormWithKeyStrokeValidation,
  IdealNameForm,
} from './components/NameForm';

import './App.css';

export default function App() {
  return(
    <div>
      <h2>Formulario de nombre:</h2>
      <NameForm />
      <br />
      <h2>Validacion de nombre:</h2>
      <NameFormWithFormValidation />
      <br />
      <h2>Validacion de nombre de campo:</h2>
      <NameFormWithFieldValidation />
      <br />
      <h2>Validacion con cada cambio del:</h2>
      <NameFormWithKeyStrokeValidation />
      <br />
      <h2>Validacion personalizada:</h2>
      <IdealNameForm />
      <br />
    </div>
  );
}