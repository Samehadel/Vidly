import React, { Component } from 'react';
import '../css/loginForm.css';
import Form from './common/form';
import Joi from 'joi-browser';

class LoginForm extends Form {
    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {},
    }

    schema = {
        email: Joi.string().required().email().label("This field"),
        password: Joi.string().required().label("This field")
    }

    doSubmit() {
        console.log('Submited');
    }

    render() {
        

        return (
            <div className='container-sm'>

                <form className='input' onSubmit={this.handleSubmit}>
                    <h1>Login</h1>

                    {this.renderInput('email', 'Email', 'text', 'Enter Email', true)}
                    {this.renderInput('password', 'Password', 'password', 'Enter Password')}
                    {this.renderSubmitButton('Login')}
                </form>
            </div>
        );
    }

}

export default LoginForm;