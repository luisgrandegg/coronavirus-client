import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Counter } from '../components/Counter';
import { Header } from '../components/HeaderLegacy';
import { Footer } from '../components/Footer';
import { ThanksBox } from '../components/ThanksBox/ThanksBox';
import { Section } from '../components/Section';
import { SkipNav, SkipNavIds } from '../components/SkipNav';
import { Routes } from '../router/Routes';
import { sdk } from '../sdk';
import { IStatsApiResponse } from '../entities/Stats';

export const Home: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const [stats, setStats] = useState<IStatsApiResponse>({});

    const ContentHowDoesItWork = (): JSX.Element => (
        <>
            <header className="home__header">
                <h2 className="home__header-title" dangerouslySetInnerHTML={{ __html: t('home.claim.title') }} />
            </header>
            <section className="home__section">
                <header className="home__section-header">
                    <h2 className="home__section-title">{t('home.how-does-it-work.title')}</h2>
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.how-does-it-work.first-paragraph') }} />
            </section>
        </>
    );

    const ContentCTACitizen = (): JSX.Element => (
        <section className="home__section">
            <header className="home__section-header">
                <h2 className="home__section-title" dangerouslySetInnerHTML={{ __html: t('home.citizen.title') }} />
            </header>
            <p dangerouslySetInnerHTML={{ __html: t('home.citizen.first-paragraph') }} />
            <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to={Routes.REGISTER_CITIZEN}
            >{t('home.citizen.cta')}</Button>
        </section>
    );

    const ContentCTADoctor = (): JSX.Element => (
        <section className="home__section">
            <header className="home__section-header">
                <h2 className="home__section-title" dangerouslySetInnerHTML={{ __html: t('home.doctor.title') }} />
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
                to={Routes.DOCTOR_DASHBOARD_REGULAR}
            >{t('home.doctor.login')}</Button>
        </section>
    );

    const ContentCTAPsychologist = (): JSX.Element => (
        <section className="home__section">
            <header className="home__section-header">
                <h2 className="home__section-title" dangerouslySetInnerHTML={{ __html: t('home.psychologist.title') }} />
            </header>
            <p dangerouslySetInnerHTML={{ __html: t('home.psychologist.first-paragraph') }} />
            <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to={Routes.REGISTER_PSYCHOLOGIST}
            >{t('home.psychologist.register-button')}</Button>
            <Button
                variant="outlined"
                color="primary"
                component={RouterLink}
                to={Routes.DOCTOR_DASHBOARD_PSYCHOLOGIST}
            >{t('home.psychologist.login')}</Button>
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
                    <h2 className="home__section-title" dangerouslySetInnerHTML={{ __html: t('home.privacy-citizen.title') }} />
                </header>
                <p dangerouslySetInnerHTML={{ __html: t('home.privacy-citizen.first-paragraph') }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.privacy-citizen.second-paragraph') }} />
                <p dangerouslySetInnerHTML={{ __html: t('home.privacy-citizen.third-paragraph') }} />
            </section>
            <section className="home__section">
                <header className="home__section-header">
                    <h2
                        className="home__section-title"
                        dangerouslySetInnerHTML={{ __html: t('home.help-citizen.first-paragraph', { link: Routes.HELP_CITIZEN }) }} />
                </header>
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

    const renderCounter = (statType: string, statCount?: number): React.ReactNode => {
        if (!statCount && statCount !== 0) {
            return null;
        }

        const statTranslationSection = statType === 'inquiries_attended' ?
            'citizen' : statType === 'doctors_validated' ?
                'doctor' : statType === 'psychologists_validated' ?
                    'psychologist' : '';

        return (
            <Counter
                pre={t(`home.${statTranslationSection}.counter-pre`)}
                count={statCount}
                post={t(`home.${statTranslationSection}.counter-post`)}
            />
        )
    };

    useEffect(() => {
        sdk.getStats().then((stats: IStatsApiResponse) => setStats(stats))
    }, [])

    return (
        <>
            <Helmet>
                <title>{t('metas.home.title')}</title>
                <meta name="description" content={t('metas.home.description')} />
                <meta name='robots' content='noindex'/>
            </Helmet>
            <SkipNav navElements={[SkipNavIds.MAIN]} />
            <Header isPublic={true} />
            <main id={SkipNavIds.MAIN} className="main home">
                <div className="container">
                    <Section
                        aside={<Aside />}
                        content={<ContentHowDoesItWork />}
                    />
                    <div className="home__cta">
                        <Section
                            aside={renderCounter('inquiries_attended', stats?.total?.inquiries_attended)}
                            content={<ContentCTACitizen />}
                        />
                        <p className="divider" />
                        <Section
                            aside={renderCounter('doctors_validated', stats?.total?.doctors_validated)}
                            content={<ContentCTADoctor />}
                        />
                        <p className="divider" />
                        <Section
                            aside={renderCounter('psychologists_validated', stats?.total?.psychologists_validated)}
                            content={<ContentCTAPsychologist />}
                        />
                    </div>
                    <Section
                        content={<ContentPrivacy />}
                    />
                </div>
            </main>
            <Footer />
            <ThanksBox />
        </>
    )
};
