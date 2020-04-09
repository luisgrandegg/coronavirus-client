import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { List } from '../components/List';
import { Section } from '../components/Section';
import { SkipNav, SkipNavIds } from '../components/SkipNav';
import { CreateInquiryForm } from '../components/CreateInquiryForm';
import { Helmet } from 'react-helmet';

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
            <header id={SkipNavIds.MAIN} className="register-form__header">
                <h2 className="register-form__title register-form__title--confirmation">{t('register-citizen.confirmation.header.title')}</h2>
            </header>
            <section className="register-form__section">
                <p>{t('register-citizen.confirmation.content.message-1')}</p>
                <h3 className="register-form__title register-form__title--confirmation">{t('register-citizen.confirmation.content.time.title')}</h3>
                <p>{t('register-citizen.confirmation.content.time.message')}</p>
                <p dangerouslySetInnerHTML={{__html: t('register-citizen.confirmation.content.message-2')}}/>
            </section>
        </>
    );

    const renderRegisterForm = (): React.ReactNode => (
        <div id={SkipNavIds.MAIN} className="section">
            <div className="content">
                <header className="register-form__header">
                    <h2 className="register-form__title">{t('register-citizen.header.title')}</h2>
                </header>
                <section className="register-form__section">
                    <List listName="register-form" numItems={4} itemsText="register-citizen.content" />
                </section>
                <CreateInquiryForm
                    onCreateSuccess={onCreateSuccess}
                    onCreateError={onCreateError}
                />
                <p>{t('register-citizen.content.responsability')}</p>
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
            <Helmet>
                <title>{t('metas.register-citizen.title')}</title>
                <meta name="description" content={t('metas.register-citizen.description')} />
            </Helmet>
            <SkipNav navElements={createFromSuccess ? [SkipNavIds.MAIN] : [SkipNavIds.MAIN, SkipNavIds.FORM_INQUIRY]}/>
            <Header />
            <main className="main register-form">
                <div className="container">
                    <BackHome />
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
