import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
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
            case UserType.DOCTOR_ADMIN:
                return Routes.DOCTOR_DASHBOARD;
            case UserType.ADMIN:
                return Routes.ADMIN_DASHBOARD;
        }
    }

    const onLoginSuccess = (auth: Auth): void => {
        history.replace(
            getOnLoginRoute(auth.userType)
        );
    };

    const onLoginError = (): void => {

    };

    return (
        <>
            <Header/>
            <main className="main login-form">
                <div className="container">
                    <Section content={
                        <LoginForm
                            onLoginSuccess={onLoginSuccess}
                            onLoginError={onLoginError}
                        />}
                    />
                </div>
            </main>
            <Footer/>
        </>
    )
};
