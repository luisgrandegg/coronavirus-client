import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RegisterPatientForm } from '../components/RegisterPatientForm';

export const RegisterPatient: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const [registerFormSuccess, setRegisterFormSuccess] = useState(false);

    const onRegisterSuccess = (): void => {
        setRegisterFormSuccess(true);
    };

    const onRegisterError = (): void => {
        // TODO: Notificate error
    };

    const renderConfirmation = (): React.ReactNode => (
        <>
            <header className="register-form__header">
                <h2 className="register-form__title register-form__title--confirmation">{t('register-patient.confirmation.header.title')}</h2>
            </header>
            <section className="register-form__section">
                <p>{t('register-patient.confirmation.content.message')}</p>
            </section>
        </>
    );

    const renderRegisterForm = (): React.ReactNode => (
        <>
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
        </>
    )

    return (
        <>
            <Header/>
            <main className="main register-form">
                <div className="container">
                    {registerFormSuccess ? renderConfirmation() : renderRegisterForm() }
                </div>
            </main>
            <Footer/>
        </>
    )
};
