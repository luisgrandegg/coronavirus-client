import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { List } from '../components/List';
import { Section } from '../components/Section';
import { Routes } from '../router/Routes';
import { RegisterDoctorForm } from '../components/RegisterDoctorForm';
import { DoctorType } from '../entities/Doctor';
import { SkipNav, SkipNavIds } from '../components/SkipNav';
import { Helmet } from 'react-helmet';

export interface IRegisterDoctorProps {
    doctorType: DoctorType;
}

export const RegisterDoctor: React.FunctionComponent<IRegisterDoctorProps> = (
    props: IRegisterDoctorProps
): JSX.Element => {
    const { t } = useTranslation();
    const [registerFormSuccess, setRegisterFormSuccess] = useState(false);
    const onRegisterSuccess = (): void => {
        setRegisterFormSuccess(true);
    };

    const renderConfirmation = (): React.ReactNode => (
        <>
            <header id={SkipNavIds.MAIN} className="register-form__header">
                <h2 className="register-form__title register-form__title--confirmation">{t('register-doctor.confirmation.header.title')}</h2>
            </header>
            <section className="register-form__section">
                <p>{t('register-doctor.confirmation.content.message-1')}</p>
                <p dangerouslySetInnerHTML={{ __html: t('register-doctor.confirmation.content.message-2', { link: Routes.HELP_DOCTOR }) }} />
                <List
                    listName="register-form"
                    numItems={5}
                    itemsText="register-doctor.confirmation.content"
                    ordered={false} />
            </section>
        </>
    );

    const renderRegisterForm = (): React.ReactNode => (
        <div id={SkipNavIds.MAIN} className="section">
            <div className="content">
                <header className="register-form__header">
                    <h2 className="register-form__title">{t('register-doctor.header.title')}</h2>
                </header>
                <section className="register-form__section">
                    <List listName="register-form" numItems={5} itemsText="register-doctor.content" />
                </section>
                <div id={SkipNavIds.FORM_REGISTER} className="register-form__section--form">
                    <header className="register-form__header">
                        <h3>{t('register-doctor.content.form-header')}</h3>
                    </header>
                    <RegisterDoctorForm
                        onRegisterSuccess={onRegisterSuccess}
                        doctorType={props.doctorType}
                    />
                </div>
                <p>{t('register-doctor.content.responsability')}</p>
            </div>
        </div>
    )

    const Aside = (): JSX.Element | null => {
        return registerFormSuccess ? null : (
            <div className="home__drawing">
                <img
                    src="/images/doctor.svg"
                    alt={t('home.drawing.alt')}
                />
            </div>
        );
    };

    const RegisterProcess = (): JSX.Element => (
        <>
            {registerFormSuccess ? renderConfirmation() : renderRegisterForm()}
        </>
    );

    const getMetaKey = () => props.doctorType === DoctorType.REGULAR ?
        'register-doctor' :
        'register-psychologist';

    return (
        <>
            <Helmet>
                <title>{t(`metas.${getMetaKey()}.title`)}</title>
                <meta name="description" content={t(`metas.${getMetaKey()}.description`)} />
            </Helmet>
            <SkipNav navElements={registerFormSuccess ? [SkipNavIds.MAIN] : [SkipNavIds.MAIN, SkipNavIds.FORM_REGISTER]}/>
            <Header />
            <main className="main register-form">
                <div className="container">
                    <BackHome />
                    <Section
                        aside={<Aside />}
                        content={<RegisterProcess />} />
                </div>
            </main>
            <Footer />
        </>
    )
};
