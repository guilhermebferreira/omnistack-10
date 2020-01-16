import React, { useState } from 'react';
// Componente: um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: são informações que um componente PAI passa para o componente FILHO
// Estado: são informações mantidas pelo componente (lembrar: imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter(counter+1);
  }
  return (
      <>
        <h1>Contador: {counter}</h1>
        <button onClick={incrementCounter} >Incrementar</button>
      </>
  );
}

export default App;
