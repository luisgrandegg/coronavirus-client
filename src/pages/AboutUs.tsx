import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Counter } from '../components/Counter';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { Routes } from '../router/Routes';

export const AboutUs: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <main className="main about-us">
                <div className="container">
                    <Section
                        content={(
                            <>
                                <section className="about-us__section">
                                    <header className="about-us__section-header">
                                        <h2 className="about-us__section-title">{t('about-us.volunteers.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.volunteers.first-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.volunteers.second-paragraph') }} />
                                </section>
                                <section className="about-us__section">
                                    <header className="about-us__section-header">
                                        <h2 className="about-us__section-title">{t('about-us.our-goal.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.our-goal.first-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.our-goal.second-paragraph') }} />
                                </section>
                                <section className="about-us__section">
                                    <header className="about-us__section-header">
                                        <h2 className="about-us__section-title">{t('about-us.collaboration.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.collaboration.first-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.collaboration.second-paragraph') }} />
                                    <ul className="about-us__list">
                                        <li
                                            className="about-us__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('about-us.collaboration.list-item-1') }} />
                                        <li
                                            className="about-us__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('about-us.collaboration.list-item-2') }} />
                                    </ul>
                                </section>
                                <section className="about-us__section">
                                    <header className="about-us__section-header">
                                        <h2 className="about-us__section-title">{t('about-us.security.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.security.first-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.security.second-paragraph') }} />
                                </section>
                            </>
                        )}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
};
