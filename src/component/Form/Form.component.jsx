import React, { Component } from 'react'
import { Input } from '../Input'

import './Form.css'
import { Button } from '../Button'

export class Form extends Component {
  state = {
      login: {
        value: '',
      },
      password: {
        value: '',
      },
  }

  handleChange = (event) => {
    const { name, type, value } = event.target
    let error

    if (type === 'email') {
      const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      if (!emailValid) error = 'Merci d\'entrer une adresse mail valide'
    }

    this.setState({ [name]: { error, value } })
  }

  render() {
    const { login, password } = this.state

    return (
      <form>

        <p className="sr-only" id="decription-login">
          Entrez une adresse email en @ nantes js .fr
        </p>

        <p className="sr-only" id="decription-pass">
          Minimun 8 caractères avec au moins une majuscule et un nombre
        </p>

        <Input
          error={login.error}
          label="Email"
          onChange={this.handleChange}
          name="login"
          required
          type="email"
          value={login.value}
          aria={{
            describedby: 'decription-login'
          }}
        />

        <Input
          label="Mot de passe"
          name='password'
          onChange={this.handleChange}
          required
          type='password'
          value={password.value}
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
