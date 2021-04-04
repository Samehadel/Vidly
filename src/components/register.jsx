import React, { Component } from 'react';
import Joi from 'joi-browser';
import '../css/loginForm.css'
import Form from './common/form';

class Register extends Form {
    state = {
        data: {
            email: '',
            password: '',
            name: ''
        },
        errors: {},
    }

    schema = {
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().label("Password").min(8),
        name: Joi.string().required()
    }

    doSubmit() {
        console.log('Registered');
    }

    render() {
        return (
            <div className='container-sm'>

                <form className='input' onSubmit={this.handleSubmit}>
                    <h1>Register</h1>

                    {this.renderInput('email', 'Email', 'text', 'Enter An Email', true)}
                    {this.renderInput('password', 'Password', 'password', 'Enter A Password')}
                    {this.renderInput('name', 'Name', 'text', 'Enter Your Name')}
                    {this.renderSubmitButton('Register')}
                </form>
            </div>
        );
    }
}

export default Register;