import React, { Component } from 'react';
import Joi from 'joi-browser';
import { searchMovieById } from '../services/moviesService.js';
import Form from './common/form';

class MovieForm extends Form {
    state = {
        data: {},
        error: {}
    }

    schema = {
        title: Joi.string().required().label("Title"),
    }


    doSubmit() {

    }

    render() {
        const { match, history } = this.props;
        const { id } = match.params;

        if (id) {
            if (searchMovieById(id)) console.log("valid id");
            else history.push("/not-found")
        }
        else {

        }


        return (
            <div className='container-sm'>

                <form className='input' onSubmit={this.handleSubmit}>

                    <h1>Edit Movie</h1>

                    {this.renderSubmitButton('Save')}
                </form>
            </div>

        );
    }
}


export default MovieForm;