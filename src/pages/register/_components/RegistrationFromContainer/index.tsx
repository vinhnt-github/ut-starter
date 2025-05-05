import React from 'react'
import RegistrationForm from '../RegistrationForm';
import { FormData } from '../RegistrationForm/schema';
import useTemplate from './useTemplate';

function RegistrationFromContainer() {
    const { handleSubmit } = useTemplate();
    return (
        <RegistrationForm onSubmit={handleSubmit} />
    )
}

export default RegistrationFromContainer
