import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Header } from '../components/HeaderLegacy';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { LoginForm } from '../components/LoginForm';
import { Auth } from '../entities/Auth';
import { UserType } from '../entities/User';
import { Routes } from '../router/Routes';
import { SkipNav, SkipNavIds } from '../components/SkipNav';
import { Helmet } from 'react-helmet';

export const Login: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const history = useHistory();

    const getOnLoginRoute = (userType: UserType): Routes => {
        switch(userType) {
            case UserType.DOCTOR:
                return Routes.DOCTOR_DASHBOARD;
            case UserType.SUPER_ADMIN:
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

    return (
        <>
            <Helmet>
                <title>{t('metas.default.title')}</title>
                <meta name="description" content={t('metas.default.description')} />
            </Helmet>
            <SkipNav navElements={[SkipNavIds.FORM_LOGIN]}/>
            <Header isPublic={true}/>
            <main className="main login-form">
                <div className="container">
                    <BackHome />
                    <Section content={
                        <LoginForm
                            onLoginSuccess={onLoginSuccess}
                        />}
                    />
                </div>
            </main>
            <Footer/>
        </>
    )
};
