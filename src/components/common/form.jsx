import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    handleChange = (e) => {

        const errors = { ...this.state.errors };

        const { currentTarget: input } = e;
        const { name } = input;
        const data = { ...this.state.data };


        //Validation Part        
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[name] = errorMessage;

        else delete errors[name];



        //For The Field Change
        data[name] = input.value;

        //Apply State Change
        this.setState({ data, errors })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validateAll();


        this.setState({ errors: errors || {} })

        if (errors) return;

        //Call A Service or Push
        this.doSubmit();

    }
    validateAll() {
        const data = { ...this.state.data };
        const errors = {};
        const { error } = Joi.validate(data, this.schema, { abortEarly: false })

        if (!error) return null;

        error.details.forEach(er => errors[er.path[0]] = er.message)

        return errors;
    }
    validateProperty = ({ name, value }) => {

        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] }

        const { error } = Joi.validate(obj, schema)

        return !error ? null : error.details[0].message;
    }
    renderSubmitButton(label) {
        return (
            <button
                type="submit"
                className="btn btn-primary"
                disabled={this.validateAll()}>
                {label}
            </button>
        )
    }
    renderInput(name, label, type = 'text', placeholder, autoFocus = false) {

        const { data, errors } = this.state;

        return (
            <Input
                name={name}
                value={data[name]}
                label={label}
                type={type}
                error={errors[name]}
                onChange={this.handleChange}
                placeholder = {placeholder}
                autoFocus = {autoFocus}
            />
        )
    }
}

export default Form;