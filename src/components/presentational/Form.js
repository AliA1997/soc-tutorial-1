import React from 'react';
//import PropTypes from prop-types define your props .
import PropTypes from 'prop-types';
//import the decorator responsible for the functional component
import decorator from './FormDecorator';
//import css file for styling 
import './Form.css';

const Form = (props) => {
    return (
        <div className="register-form">
            <h2>Register Form</h2>
            <label>Username</label>
            <input type="text" value={props.username} onChange={props.handleUsername} />
            <label>Email</label>
            <input type="text" value={props.email} onChange={props.handleEmail} />
            <label>Password</label>
            <input type="text" value={props.password} onChange={props.handlePassword} />
            <button onClick={props.onClick}>Register</button>
        </div>
    );
};

//Define your proptypes.
Form.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleUsername: PropTypes.func.isRequired,
    handleEmail: PropTypes.func.isRequired,
    handlePassword: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}

//Have your form in the hoc it won't cause issues because the code is Hoisted
const FormDecorated = decorator(Form);
export default FormDecorated;