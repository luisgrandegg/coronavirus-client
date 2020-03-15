import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Routes } from '../router/Routes';
import { RegisterDoctorForm } from '../components/RegisterDoctorForm';


export const RegisterDoctor: React.FunctionComponent = (): JSX.Element => {
    const history = useHistory();
    const { t } = useTranslation();

    const onRegisterSuccess = (): void => {
        history.replace(Routes.DOCTOR_DASHBOARD);
    };

    const onRegisterError = (): void => {

    };

    return (
        <>
            <Header/>
            <main className="main register-form">
                <div className="container">
                    <header className="register-form__header">
                        <h2 className="register-form__title">{t('register-doctor.header.title')}</h2>
                    </header>
                    <section className="register-form__section">
                        <p>{t('register-doctor.content.first-paragraph')}</p>
                        <p>{t('register-doctor.content.second-paragraph')}</p>
                        <ol>
                            <li>{t('register-doctor.content.list-item-1')}</li>
                            <li>{t('register-doctor.content.list-item-2')}</li>
                            <li>{t('register-doctor.content.list-item-3')}</li>
                            <li>{t('register-doctor.content.list-item-4')}</li>
                            <li>{t('register-doctor.content.list-item-5')}</li>
                            <li>{t('register-doctor.content.list-item-6')}</li>
                        </ol>
                        <p>{t('register-doctor.content.third-paragraph')}</p>
                    </section>
                    <RegisterDoctorForm
                        onRegisterSuccess={onRegisterSuccess}
                        onRegisterError={onRegisterError}
                    />
                </div>
            </main>
            <Footer/>
        </>
    )
};
