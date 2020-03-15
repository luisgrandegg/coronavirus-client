import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RegisterForm } from '../components/RegisterForm';
// import { IPrivateRouteLocationState } from '../router/PrivateRoute';
import { Auth } from '../entities/Auth';
import { UserType } from '../entities/User';
import { Routes } from '../router/Routes';

export interface IRegisterProps {
    userType: UserType;
}

export const Register: React.FunctionComponent<IRegisterProps> = (
    props: IRegisterProps
): JSX.Element => {
    const { userType } = props;
    const history = useHistory();
    const getOnRegisterRoute = (userType: UserType): Routes => {
        switch(userType) {
            case UserType.DOCTOR:
                return Routes.DOCTOR_DASHBOARD;
            case UserType.PATIENT:
                return Routes.PATIENT_DASHBOARD;
        }
    }

    const onRegisterSuccess = (auth: Auth): void => {
        history.replace(
            getOnRegisterRoute(auth.userType)
        );
    };

    const onRegisterError = (): void => {

    };

    const onRegisterValidation = (): void => {

    };

    return (
        <>
            <Header/>
            <RegisterForm
                onRegisterSuccess={onRegisterSuccess}
                onRegisterError={onRegisterError}
                onRegisterValidation={onRegisterValidation}
                userType={userType}
            />
            <Footer/>
        </>
    )
};
