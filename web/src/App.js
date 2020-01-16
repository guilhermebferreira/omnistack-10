import React from 'react';
import Header from "./Header";
// Componente: um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: são informações que um componente PAI passa para o componente FILHO
// Estado:

function App() {
  return (
      <>
        <Header title="Titulo"/>
        <Header title="Dashboard"/>
      </>
  );
}

export default App;
