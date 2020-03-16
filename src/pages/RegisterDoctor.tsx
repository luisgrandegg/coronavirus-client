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
        <div className="section">
            <div className="content">
                <header className="register-form__header">
                    <h2 className="register-form__title">{t('register-doctor.header.title')}</h2>
                </header>
                <section className="register-form__section">
                    <ol className="register-form__list">
                        <li className="register-form__list-item">{t('register-doctor.content.list-item-1')}</li>
                        <li className="register-form__list-item">{t('register-doctor.content.list-item-2')}</li>
                        <li className="register-form__list-item">{t('register-doctor.content.list-item-3')}</li>
                        <li className="register-form__list-item">{t('register-doctor.content.list-item-4')}</li>
                        <li className="register-form__list-item">{t('register-doctor.content.list-item-5')}</li>
                        <li className="register-form__list-item">{t('register-doctor.content.list-item-6')}</li>
                    </ol>
                </section>
                <div className="register-form__section--form">
                    <header className="register-form__header">
                        <h3>{t('register-doctor.content.form-header')}</h3>
                    </header>
                    <RegisterDoctorForm
                        onRegisterSuccess={onRegisterSuccess}
                        onRegisterError={onRegisterError}
                    />
                </div>
            </div>
        </div>
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
