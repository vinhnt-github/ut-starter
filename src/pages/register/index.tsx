import { NextPage } from 'next';
import RegistrationFromContainer from './_components/RegistrationFromContainer';

const RegisterPage: NextPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <p>Welcome to the registration page!</p>
            <RegistrationFromContainer />
        </div>
    );
};

export default RegisterPage;