import React, { Component } from 'react';
//import the presenttional component 
import Form from '../presentational/Form';

//Container components just render the presentational components with the needed props.
export default class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    handleUsername = username => {
        this.setState({username});
    }
    handleEmail = email => {
        this.setState({email});
    }
    handlePassword = password => {
        this.setState({password});
    }
    register = () => {
        alert('Registered Successfully!');
        this.setState({username: '', email: '', password: ''});
    }
    render() {
        return <Form {...this.state} handleUsername={this.handleUsername} register={this.register}
        handlePassword={this.handlePassword} handleEmail={this.handleEmail} />;
    }
}