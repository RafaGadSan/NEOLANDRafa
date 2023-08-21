import { StateForm } from "./components/StateForm";
import { RefForm } from "./components/RefForm";
import { AuthForm } from "./components/AuthForm";

function App() {
  return (
    <>
      {/* Formulario tradicional -> lo llamaremos StateForm
      <StateForm />*/}

      {/* Formulario tradicional -> lo llamaremos RefForm
      <RefForm />*/}

      {/* Formulario de autenticación con react-hook-form -> lo llamaremos AuthForm*/}
      <AuthForm />
    </>
  );
}

export default App;
