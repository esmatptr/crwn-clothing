import React from 'react';
import { connect } from 'react-redux';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Redux
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


// Styles
import './sign-in.styles.scss';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <h2>
                    I already have an account
                </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);