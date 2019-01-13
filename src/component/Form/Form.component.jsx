import React, { Component } from 'react'
import { Input } from '../Input'

import './Form.css'
import { Button } from '../Button'

export class Form extends Component {
  state = {
    login: '',
    password: '',
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  render() {
    return (
      <form>

        <p className="sr-only" id="decription-login">
          Entrez une adresse email en @ nantes js .fr
        </p>

        <p className="sr-only" id="decription-pass">
          Minimun 8 caractères avec au moins une majuscule et un nombre
        </p>

        <Input
          label="Email"
          type='text'
          value={this.state.login}
          name='login'
          onChange={this.handleChange}
          aria={{
            describedby: 'decription-login'
          }}
        />

        <Input
          label="Mot de passe"
          type='password'
          value={this.state.password}
          name='password'
          onChange={this.handleChange}
          aria={{
            describedby: 'decription-pass'
          }}
        />
        <span>
          <Button label="Valider" onClick={() => null} />
        </span>
      </form >
    )
  }
}
