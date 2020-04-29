import React, { useState } from 'react';
import { connect } from 'react-redux';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Utils
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// Redux
import { signUpStart } from '../../redux/user/user.actions';

// Styles
import './sign-up.styles.scss';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState(initialState);
    const { displayName, email, password, confirmPassword } = this.state

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords don\'t match');
            return;
        }

        signUpStart({ email, password, displayName });
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>I do not have an account</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />

                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    signUpStart: (userDetails) => dispatch(signUpStart(userDetails))
})

export default connect(null, mapDispatchToProps)(SignUp);