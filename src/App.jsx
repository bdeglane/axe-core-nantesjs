import React, { Component } from 'react'
import './App.css'
import { Form } from './component/Form'

class App extends Component {
  render() {
    return (
      <main className="App">
        <section>
          <h1 tabIndex="1">
            Inscrivez-vous
          </h1>
          <p tabIndex="1">
            Si on installait un commutateur dans une caverne n'importe où, puis qu'on le flanquait d'un écriteau disant « Commutateur de fin du monde. PRIÈRE DE NE PAS TOUCHER », la peinture n'aurait même pas le temps de sécher.
          </p>
          <Form />
        </section>
      </main>
    );
  }
}

export default App;
