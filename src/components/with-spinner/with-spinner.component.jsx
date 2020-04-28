import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// HOC -> currying function
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ?
        (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
        :
        (
            <WrappedComponent {...otherProps} />
        )
}

export default WithSpinner;