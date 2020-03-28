import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';

export const HelpDoctor: React.FunctionComponent = (): JSX.Element => {
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
                                    <h2 className="help__header-title">{t('help-doctor.title')}</h2>
                                </header>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-doctor.not-my-email.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.not-my-email.first-paragraph') }} />
                                    <ol className="help__list">
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.not-my-email.list-item-1') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.not-my-email.list-item-2') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.not-my-email.list-item-3') }} />
                                    </ol>
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-doctor.why-do-you-need-my-number.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.why-do-you-need-my-number.first-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-doctor.how-to-answer.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.how-to-answer.first-paragraph') }} />
                                    <ul className="help__list">
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.how-to-answer.list-item-1') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.how-to-answer.list-item-2') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.how-to-answer.list-item-3') }} />
                                    </ul>
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-doctor.videocall-tutorial.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.first-paragraph') }} />
                                    <header className="help__section-header">
                                        <h3 dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.hangouts.title') }} />
                                    </header>
                                    <ol className="help__list">
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.hangouts.list-item-1') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.hangouts.list-item-2') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.hangouts.list-item-3') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.hangouts.list-item-4') }} />
                                        <li className="help__list-item">
                                            {t('help-doctor.videocall-tutorial.hangouts.list-item-5')}
                                            <ol
                                                className="help__list"
                                                type="a">
                                                <li
                                                    className="help__list-item"
                                                    dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.hangouts.list-item-5-1') }} />
                                                <li
                                                    className="help__list-item"
                                                    dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.hangouts.list-item-5-2') }} />
                                            </ol>
                                        </li>
                                    </ol>
                                    <header className="help__section-header">
                                        <h3 dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.whereby.title') }} />
                                    </header>
                                    <ol className="help__list">
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.whereby.list-item-1') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.whereby.list-item-2') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.whereby.list-item-3') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.whereby.list-item-4') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.whereby.list-item-5') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.whereby.list-item-6') }} />
                                        <li
                                            className="help__list-item"
                                            dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.whereby.list-item-7') }} />
                                    </ol>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.second-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.third-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.videocall-tutorial.fourth-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-doctor.technical-problems.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.technical-problems.first-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.technical-problems.second-paragraph') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.technical-problems.third-paragraph') }} />
                                </section>
                                <section className="help__section">
                                    <header className="help__section-header">
                                        <h2 className="help__section-title">{t('help-doctor.share-citamedica.title')}</h2>
                                    </header>
                                    <p dangerouslySetInnerHTML={{ __html: t('help-doctor.share-citamedica.first-paragraph') }} />
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
