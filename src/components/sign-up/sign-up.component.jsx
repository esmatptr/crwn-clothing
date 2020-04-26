import React from 'react';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Utils
import { signInWithGoogle, auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// Styles
import './sign-up.styles.scss';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            ...initialState
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('passwords don\'t match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState(initialState)
        } catch (err) {
            console.error(err);
        }

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>I do not have an account</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;