import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Counter } from '../components/Counter';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { Routes } from '../router/Routes';

export const Home: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    const ContentHowDoesItWork = (): JSX.Element => (
        <>
            <header className="home__header">
                <h2 className="home__header-title">{t('home.claim.title')}</h2>
            </header>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.how-does-it-work.title')}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.how-does-it-work.first-paragraph') }} />
            </section>
        </>
    );

    const ContentCTAPatient = (): JSX.Element => (
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
    );

    const ContentCTADoctor = (): JSX.Element => (
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
            >{t('home.doctor.register-button')}</Button>
            <Button
                variant="outlined"
                color="primary"
                component={RouterLink}
                to={Routes.DOCTOR_DASHBOARD}
            >{t('home.doctor.login')}</Button>
        </section>
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
                    <h2 className="home__section-title">
                        <RouterLink to={Routes.ABOUT_US}>{t('home.what-is.title')}</RouterLink>
                    </h2>
                </header>
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
                src="/images/citamedicaencasa.svg"
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
                        aside={<Aside />}
                        content={<ContentHowDoesItWork />}
                    />
                    <div className="home__cta">
                        <Section
                            aside={(
                                <Counter
                                    pre={t('home.pacient.counter-pre')}
                                    count={100}
                                    post={t('home.pacient.counter-post')}
                                />
                            )}
                            content={<ContentCTAPatient />}
                        />
                        <Section
                            aside={(
                                <Counter
                                    pre={t('home.doctor.counter-pre')}
                                    count={60}
                                    post={t('home.doctor.counter-post')}
                                />
                            )}
                            content={<ContentCTADoctor />}
                        />
                    </div>
                    <Section
                        content={<ContentPrivacy />}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
};
