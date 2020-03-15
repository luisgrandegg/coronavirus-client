import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginForm } from '../components/LoginForm';
import { Auth } from '../entities/Auth';
import { UserType } from '../entities/User';
import { Routes } from '../router/Routes';

export const Login: React.FunctionComponent = (): JSX.Element => {
    const history = useHistory();

    const getOnLoginRoute = (userType: UserType): Routes => {
        switch(userType) {
            case UserType.DOCTOR:
                return Routes.DOCTOR_DASHBOARD;
            case UserType.PATIENT:
                return Routes.PATIENT_DASHBOARD;
        }
    }

    const onLoginSuccess = (auth: Auth): void => {
        history.replace(
            getOnLoginRoute(auth.userType)
        );
    };

    const onLoginError = (): void => {

    };

    const onLoginValidation = (): void => {

    };

    return (
        <>
            <Header/>
            <LoginForm
                onLoginSuccess={onLoginSuccess}
                onLoginError={onLoginError}
                onLoginValidation={onLoginValidation}
            />
            <Footer/>
        </>
    )
};
