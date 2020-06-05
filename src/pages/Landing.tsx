import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { Header } from '../components/HeaderLegacy';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { List } from '../components/List';
import { Section } from '../components/Section';
import { SkipNav, SkipNavIds } from '../components/SkipNav';
import { Routes } from '../router/Routes';
import { Helmet } from 'react-helmet';

export const Landing: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('metas.landing.title')}</title>
                <meta name="description" content={t('metas.landing.description')} />
                <meta name='robots' content='noindex'/>
            </Helmet>
            <SkipNav navElements={[SkipNavIds.MAIN]} />
            <Header isPublic={true} />
            <main className="main landing">
                <div className="container">
                    <BackHome />
                    <Section
                        content={(
                            <>
                                <section id={SkipNavIds.MAIN} className="landing__section">
                                    <header className="landing__section-header">
                                        <h2 className="landing__section-title">{t('landing.intro.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('landing.intro.first-paragraph') }} />
                                </section>
                                <section className="landing__section">
                                    <header className="landing__section-header">
                                        <h2 className="landing__section-title">{t('landing.how-it-works.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('landing.how-it-works.first-paragraph') }} />
                                    <List listName="landing" numItems={3} itemsText="landing.how-it-works" ordered={true} />
                                    <div className="landing__cta">
                                        <Button
                                            className="landing__cta"
                                            variant="contained"
                                            color="primary"
                                            component={RouterLink}
                                            to={Routes.REGISTER_CITIZEN}
                                        >{t('landing.how-it-works.cta')}</Button>
                                    </div>
                                </section>
                                <section className="landing__card">
                                    <header className="landing__card-header">
                                        <h2 className="landing__card-title">{t('landing.card.header.title')}</h2>
                                    </header>
                                    <main className="landing__card-content">
                                        <div>
                                            <p dangerouslySetInnerHTML={{ __html: t('landing.card.content.first-paragraph') }} />
                                            <p dangerouslySetInnerHTML={{ __html: t('landing.card.content.second-paragraph') }} />
                                            <RouterLink
                                                className="landing__card-link"
                                                to={Routes.ROOT}>{t('landing.card.content.link')}</RouterLink>
                                        </div>
                                        <img src="/images/citamedicaencasa_sm.svg" alt="Cita" />
                                    </main>
                                </section>
                                <section className="landing__section">
                                    <header className="landing__section-header">
                                        <h2 className="landing__section-title">{t('landing.privacy.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('landing.privacy.first-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('landing.privacy.second-paragraph') }} />
                                    <div className="landing__cta">
                                        <Button
                                            className="landing__cta"
                                            variant="contained"
                                            color="primary"
                                            component={RouterLink}
                                            to={Routes.REGISTER_CITIZEN}
                                        >{t('landing.privacy.cta')}</Button>
                                    </div>
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
