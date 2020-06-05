import { Button } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Header } from '../components/HeaderLegacy';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { Routes } from '../router/Routes';

export const HelpCitizen: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('metas.default.title')}</title>
                <meta name="description" content={t('metas.default.description')} />
                <meta name='robots' content='noindex'/>
            </Helmet>
            <Header isPublic={true}/>
            <main className="main help">
                <div className="container">
                    <BackHome />
                    <Section
                        content={(
                            <>
                                <header className="help__header">
                                    <h2 className="help__header-title">{t('help-citizen.title')}</h2>
                                </header>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-citizen.trust.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-citizen.trust.first-paragraph') }} />
                                    <Button
                                        color="primary"
                                        component={RouterLink}
                                        to={Routes.REGISTER_CITIZEN}
                                        variant="contained"
                                    >
                                        {t('help-citizen.trust.cta')}
                                    </Button>
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-citizen.answer-time.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-citizen.answer-time.first-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-citizen.why-not-covid.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-citizen.why-not-covid.first-paragraph') }} />
                                    <ul className="help__list">
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-citizen.why-not-covid.list-item-1') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-citizen.why-not-covid.list-item-2') }} />
                                    </ul>
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-citizen.how-many-questions.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-citizen.how-many-questions.first-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-citizen.what-kind-of-questions.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-citizen.what-kind-of-questions.first-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-citizen.question-taxonomy.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-citizen.question-taxonomy.first-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('help-citizen.question-taxonomy.second-paragraph') }} />
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
