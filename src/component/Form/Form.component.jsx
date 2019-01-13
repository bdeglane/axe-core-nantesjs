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

  handleBlur = event => {
    const { name, type, value } = event.target
    let pattern

    if (type === 'email') {
      pattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/
    } else if (type === 'password') {
      pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    }

    this.setState({
      [name]: {
        hasError: value.length === 0 || !value.match(pattern),
        value,
      },
    })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: { value } })
  }

  render() {
    const { login, password } = this.state
    const loginError = 'Entrez une adresse email en @ nantes js .fr'
    const passwordError = 'Minimun 8 caractères avec au moins une majuscule et un nombre'

    return (
      <form>
        <Input
          error={login.hasError ? loginError : undefined}
          label="Email"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          name="login"
          required
          type="email"
          value={login.value}
        />

        <Input
          error={password.hasError ? passwordError : undefined}
          label="Mot de passe"
          name='password'
          onBlur={this.handleBlur}
          onChange={this.handleChange}
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
