import NameForm,{} from './components/NameForm';
import NameFormWithFormValidation from './components/NameFormWithFormValidation';

export default function App() {
  return(
    <div>
      <h2>Formulario de nombre:</h2>
      <NameForm />
      <br />
      <h2>Validacion de nombre:</h2>
      <NameFormWithFormValidation />
      <br />
    </div>
  );
}