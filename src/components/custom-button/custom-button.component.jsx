import React from 'react';

// Styles
// import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles';

// const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>

    // <button className={`
    // ${inverted ? 'inverted' : ''}
    // ${isGoogleSignIn ? 'google-sign-in' : ''} 
    // custom-button`}
    //     {...otherProps}>
    //     {children}
    // </button>


)

export default CustomButton;