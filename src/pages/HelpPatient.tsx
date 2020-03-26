import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';

export const HelpPatient: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <main className="main help">
                <div className="container">
                    <BackHome />
                    <Section
                        content={(
                            <>
                                <header className="help__header">
                                    <h2 className="help__header-title">{t('help-patient.title')}</h2>
                                </header>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-patient.trust.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-patient.trust.first-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-patient.answer-time.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-patient.answer-time.first-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-patient.why-not-covid.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-patient.why-not-covid.first-paragraph') }} />
                                    <ul className="help__list">
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-patient.why-not-covid.list-item-1') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-patient.why-not-covid.list-item-2') }} />
                                    </ul>
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-patient.how-many-questions.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-patient.how-many-questions.first-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-patient.what-kind-of-questions.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-patient.what-kind-of-questions.first-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-patient.question-taxonomy.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-patient.question-taxonomy.first-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('help-patient.question-taxonomy.second-paragraph') }} />
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
