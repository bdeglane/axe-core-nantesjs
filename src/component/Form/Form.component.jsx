import React, { Component } from 'react'
import { Input } from '../Input'

import './Form.css'
import { Button } from '../Button'

export class Form extends Component {
  state = {
      login: {
        hasError: false,
        value: '',
      },
      password: {
        hasError: false,
        value: '',
      },
  }

  handleBlur = (event, pattern) => {
    const { name, value } = event.target

    this.setState({
      [name]: {
        hasError: value.match(pattern),
        value,
      },
    })
  }

  render() {
    const { login, password } = this.state
    const loginError = {
      message: 'Entrez une adresse email en @ nantes js .fr',
      pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
    }
    const passwordError = {
      message: 'Minimun 8 caractères avec au moins une majuscule et un nombre',
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    }

    return (
      <form>
        <Input
          error={login.hasError ? loginError.message : undefined}
          label="Email"
          onBlur={this.handleBlur(loginError.pattern)}
          name="login"
          required
          type="email"
          value={login.value}
        />

        <Input
          error={password.hasError ? passwordError.message : undefined}
          label="Mot de passe"
          name='password'
          onBlur={this.handleBlur(passwordError.pattern)}
          required
          type='password'
          value={password.value}
        />
        <span>
          <Button label="Valider" onClick={() => null} />
        </span>
      </form >
    )
  }
}
