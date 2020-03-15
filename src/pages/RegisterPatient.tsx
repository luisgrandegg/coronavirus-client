import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Routes } from '../router/Routes';
import { RegisterPatientForm } from '../components/RegisterPatientForm';

export const RegisterPatient: React.FunctionComponent = (): JSX.Element => {
    const history = useHistory();
    const { t } = useTranslation();

    const onRegisterSuccess = (): void => {
        history.replace(Routes.PATIENT_DASHBOARD);
    };

    const onRegisterError = (): void => {
        // TODO: Notificate error
    };

    return (
        <>
            <Header/>
            <main className="main register-form">
                <div className="container">
                    <header className="register-form__header">
                        <h2 className="register-form__title">{t('register-patient.header.title')}</h2>
                    </header>
                    <section className="register-form__section">
                        <p>{t('register-patient.content.first-paragraph')}</p>
                        <p>{t('register-patient.content.second-paragraph')}</p>
                        <ol>
                            <li>{t('register-patient.content.list-item-1')}</li>
                            <li>{t('register-patient.content.list-item-2')}</li>
                            <li>{t('register-patient.content.list-item-3')}</li>
                            <li>{t('register-patient.content.list-item-4')}</li>
                            <li>{t('register-patient.content.list-item-5')}</li>
                            <li>{t('register-patient.content.list-item-6')}</li>
                        </ol>
                        <p>{t('register-patient.content.third-paragraph')}</p>
                    </section>
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
