import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { CreateInquiryForm } from '../components/CreateInquiryForm';

export const CreateInquiry: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const [createFromSuccess, setCreateFromSuccess] = useState(false);

    const onCreateSuccess = (): void => {
        setCreateFromSuccess(true);
    };

    const onCreateError = (): void => {
        // TODO: Notificate error
    };

    const renderConfirmation = (): React.ReactNode => (
        <>
            <header className="register-form__header">
                <h2 className="register-form__title register-form__title--confirmation">{t('register-patient.confirmation.header.title')}</h2>
            </header>
            <section className="register-form__section">
                <p>{t('register-patient.confirmation.content.message-1')}</p>
                <p dangerouslySetInnerHTML={{ __html: t('register-patient.confirmation.content.message-2') }} />
            </section>
        </>
    );

    const renderRegisterForm = (): React.ReactNode => (
        <div className="section">
            <div className="content">
                <header className="register-form__header">
                    <h2 className="register-form__title">{t('register-patient.header.title')}</h2>
                </header>
                <section className="register-form__section">
                    <ol className="register-form__list">
                        <li className="register-form__list-item">{t('register-patient.content.list-item-1')}</li>
                        <li className="register-form__list-item">{t('register-patient.content.list-item-2')}</li>
                        <li className="register-form__list-item">{t('register-patient.content.list-item-3')}</li>
                        <li className="register-form__list-item">{t('register-patient.content.list-item-4')}</li>
                    </ol>
                </section>
                <CreateInquiryForm
                    onCreateSuccess={onCreateSuccess}
                    onCreateError={onCreateError}
                />
                <p>{t('register-patient.content.responsability')}</p>
            </div>
        </div>
    )

    const InquiryProcess = (): JSX.Element => (
        <>
            {createFromSuccess ? renderConfirmation() : renderRegisterForm()}
        </>
    );

    const Aside = (): JSX.Element | null => {
        return createFromSuccess ? null : (
            <div className="home__drawing">
                <img
                    src="/images/inquiry.svg"
                    alt={t('home.drawing.alt')}
                />
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className="main register-form">
                <div className="container">
                    <Section
                        aside={<Aside />}
                        content={<InquiryProcess />}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
};
