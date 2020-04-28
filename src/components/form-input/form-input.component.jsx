import React from 'react';

// Styles
import './form-input.styles.scss';
import { GroupContainer, FormInputStyles, FormInputLabel } from './form-input.component.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputStyles onChange={handleChange} {...otherProps} />
        {
            label ?
                <FormInputLabel {...otherProps}>
                    {label}
                </FormInputLabel>
                : null
        }
        {/* {
            label ?
                <label className={`
                    ${otherProps.value.length ? 'shrink' : ''} form-input-label
                `}>
                    {label}
                </label>
                : null
        } */}
    </GroupContainer>
)

export default FormInput;