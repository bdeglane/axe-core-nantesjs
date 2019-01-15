import React, { Component } from 'react'
import './App.css'
import { Form } from './component/Form'

class App extends Component {
  render() {
    return (
      <main className="App">
        <section>
          <h1 tabIndex="0">
            Bienvenue à ce meetup
          </h1>
          <p tabIndex="0">
            C'est un faux formulaire, rien que pour vos yeux.
          </p>
          <Form />
        </section>
      </main>
    );
  }
}

export default App;
