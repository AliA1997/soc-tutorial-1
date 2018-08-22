import React from 'react';
//import PropTypes from prop-types define your props .
import PropTypes from 'prop-types';
//import css file for styling 
import './Form.css';

const Form = (props) => {
    return (
        <div className="register-form">
            <h2>Register Form</h2>
            <label>Username</label>
            <input type="text" value={props.username} onChange={e => props.handleUsername(e.target.value)} />
            <label>Email</label>
            <input type="text" value={props.email} onChange={e => props.handleEmail(e.target.value)} />
            <label>Password</label>
            <input type="text" value={props.password} onChange={e => props.handlePassword(e.target.value)} />
            <button onClick={() => props.register()}>Register</button>
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
    register: PropTypes.func.isRequired
}
export default Form;