import React, { useState } from 'react';
import { connect } from 'react-redux';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Redux
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


// Styles
import './sign-in.styles.scss';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials


    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target

        setUserCredentials({ ...userCredentials, [name]: value })
    }


    return (
        <SignInContainer>
            <h2>
                I already have an account
                </h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    handleChange={handleChange}
                    required
                />

                <ButtonsContainer>
                    <CustomButton type='submit' value='Submit forms'>
                        SIGN IN
                        </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} value='Submit forms' isGoogleSignIn>
                        SIGN IN WITH GOOGLE
                        </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);