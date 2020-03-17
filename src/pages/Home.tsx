import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { Routes } from '../router/Routes';

export const Home: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    const ContentHowDoesItWork = (): JSX.Element => (
        <>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.claim.title')}</h2>
                </header>
            </section>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.how-does-it-work.title')}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.how-does-it-work.first-paragraph') }} />
            </section>
        </>
    );

    const ContentCTA = (): JSX.Element => (
        <>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.pacient.title')}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.pacient.first-paragraph') }} />
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to={Routes.REGISTER_PATIENT}
                >{t('home.pacient.cta')}</Button>
            </section>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.doctor.title')}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.doctor.first-paragraph') }} />
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to={Routes.REGISTER_DOCTOR}
                >{t('home.doctor.cta')}</Button>
            </section>
        </>
    );

    const ContentPrivacy = (): JSX.Element => (
        <>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.what-is-not.title')}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.what-is-not.first-paragraph') }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.what-is-not.second-paragraph') }} />
            </section>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.what-is.title')}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.what-is.first-paragraph') }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.what-is.second-paragraph') }} />
            </section>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.privacy.title')}</h2>
                </header>
            </section>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.privacy-doctor.title')}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.privacy-doctor.first-paragraph') }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.privacy-doctor.second-paragraph') }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.privacy-doctor.third-paragraph') }} />
            </section>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.privacy-patient.title')}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.privacy-patient.first-paragraph') }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.privacy-patient.second-paragraph') }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.privacy-patient.third-paragraph') }} />
            </section>
        </>
    );

    const Aside = (): JSX.Element => (
        <div className="home__drawing">
            <img
                src="/images/citamedicaencasa.png"
                alt={t('home.drawing.alt')}
            />
        </div>
    );

    return (
        <>
            <Header />
            <main className="main home">
                <div className="container">
                    <Section
                        content={<ContentHowDoesItWork />} />
                    <Section
                        aside={<Aside />}
                        content={<ContentCTA />}
                        styleName="white" />
                    <Section
                        content={<ContentPrivacy />} />
                </div>
            </main>
            <Footer />
        </>
    )
};
