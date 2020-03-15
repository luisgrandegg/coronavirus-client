import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RegisterDoctorForm } from '../components/RegisterDoctorForm';


export const RegisterDoctor: React.FunctionComponent = (): JSX.Element => {
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
                <h2 className="register-form__title register-form__title--confirmation">{t('register-doctor.confirmation.header.title')}</h2>
            </header>
            <section className="register-form__section">
                <p>{t('register-doctor.confirmation.content.message')}</p>
            </section>
        </>
    );

    const renderRegisterForm = (): React.ReactNode => (
        <>
            <header className="register-form__header">
                <h2 className="register-form__title">{t('register-doctor.header.title')}</h2>
            </header>
            <section className="register-form__section">
                <h3>{t('register-doctor.content.first-paragraph')}</h3>
                <h3>{t('register-doctor.content.second-paragraph')}</h3>
                <ol>
                    <li>{t('register-doctor.content.list-item-1')}</li>
                    <li>{t('register-doctor.content.list-item-2')}</li>
                    <li>{t('register-doctor.content.list-item-3')}</li>
                    <li>{t('register-doctor.content.list-item-4')}</li>
                    <li>{t('register-doctor.content.list-item-5')}</li>
                    <li>{t('register-doctor.content.list-item-6')}</li>
                </ol>
                <h4>{t('register-doctor.content.third-paragraph')}</h4>
            </section>
            <RegisterDoctorForm
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
