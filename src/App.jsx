import React, { Component } from 'react'
import './App.css'
import { Form } from './component/Form'

class App extends Component {
  state = {
    titleClass: 'normal',
  }

  handleClick = () => {
    const { titleClass } = this.state
    const newClass = titleClass === 'normal' ? 'notVisible' : 'normal'

    this.setState({ titleClass: newClass })
  }

  render() {
    const { titleClass } = this.state

    return (
      <main className="App">
        <section>
          <h1 tabIndex="0" className={titleClass}>
            Bienvenue à ce meetup
          </h1>
          <p tabIndex="0">
            C'est un faux formulaire, rien que pour vos yeux.
          </p>
          <Form buttonAction={this.handleClick} />
        </section>
      </main>
    );
  }
}

export default App;
