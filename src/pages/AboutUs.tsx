import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { List } from '../components/List';
import { Section } from '../components/Section';
import { SkipNav, SkipNavIds } from '../components/SkipNav';
import { Helmet } from 'react-helmet';

export const AboutUs: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('metas.about-us.title')}</title>
                <meta name="description" content={t('metas.about-us.description')} />
            </Helmet>
            <SkipNav navElements={[SkipNavIds.MAIN]}/>
            <Header />
            <main className="main about-us">
                <div className="container">
                    <BackHome />
                    <Section
                        content={(
                            <>
                                <section id={SkipNavIds.MAIN} className="about-us__section">
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

                                    <List listName="about-us" numItems={2} itemsText="about-us.collaboration" ordered={false} />

                                </section>
                                <section className="about-us__section">
                                    <header className="about-us__section-header">
                                        <h2 className="about-us__section-title">{t('about-us.volunteers.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.volunteers.first-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about-us.volunteers.second-paragraph') }} />
                                    <ul className="about-us__list">
                                        <li
                                            className="about-us__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('about-us.volunteers.list-item-1') }} />
                                        <li
                                            className="about-us__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('about-us.volunteers.list-item-2') }} />
                                        <li
                                            className="about-us__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('about-us.volunteers.list-item-3') }} />
                                        <li
                                            className="about-us__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('about-us.volunteers.list-item-4') }} />
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
