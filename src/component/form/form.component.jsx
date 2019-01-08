import React from 'react';
import { Input } from '../input/input.component';
import { Label } from '../label/label.component';

export class Form extends React.Component {

    constructor() {
        super();

        this.state = {
            login: ``,
            password: ``,
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>

                {/* <Label htmlFor='login'
                    value='Email' /> */}
                <Input
                    type='text'
                    value={this.state.login}
                    name='login'
                    onChange={this.handleChange}
                />

                {/* <Label htmlFor='password'
                    value='Password' /> */}
                <Input
                    type='password'
                    value={this.state.password}
                    name='password'
                    onChange={this.handleChange}
                />

            </form >);
    }
}
