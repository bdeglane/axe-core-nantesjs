import React, { Component } from 'react'
import { Input } from '../input'
import { Button } from '../button'

import './Form.css'

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
        <Input
          label="Email"
          type='text'
          value={this.state.login}
          name='login'
          onChange={this.handleChange}
        />

        <Input
          label="Mot de passe"
          type='password'
          value={this.state.password}
          name='password'
          onChange={this.handleChange}
        />
        <span>
          <Button label="Valider" onClick={() => null}/>
        </span>
      </form >
    )
  }
}
