import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Routes } from '../router/Routes';
import { RegisterPatientForm } from '../components/RegisterPatientForm';


export const RegisterPatient: React.FunctionComponent = (): JSX.Element => {
    const history = useHistory();

    const onRegisterSuccess = (): void => {
        history.replace(Routes.PATIENT_DASHBOARD);
    };

    const onRegisterError = (): void => {

    };

    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <RegisterPatientForm
                        onRegisterSuccess={onRegisterSuccess}
                        onRegisterError={onRegisterError}
                    />
                </div>
            </main>
            <Footer/>
        </>
    )
};
