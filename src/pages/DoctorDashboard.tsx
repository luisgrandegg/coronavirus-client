import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { InquiryList } from '../components/InquiryList';
import useMultipleOptionsFilter from '../components/useMultipleOptionsFilter';
import { InquiryListParams } from '../dto/InquiryListParams';
import { DoctorTabs } from '../components/DoctorTabs';

import specialities from '../constants/specialities';

export const DoctorDashbord: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const [selectedSpecialities, SpecialitiesFilter] = useMultipleOptionsFilter(
        t('doctor-dashboard.filter.title'),
        t('doctor-dashboard.filter.apply-button'),
        [] as string[],
        specialities);
    const inquiryListParams: InquiryListParams = InquiryListParams.deserialize({
        specialities: selectedSpecialities,
        active: true,
        attended: false,
        flagged: false
    });

    const Content = (): JSX.Element => (
        <>
            <header className="doctor-dashboard__header">
                <h2 className="doctor-dashboard__title doctor-dashboard__title--confirmation">{t('doctor-dashboard.header.title')}</h2>
            </header>
            <section className="doctor-dashboard__section">
                <p>{t('doctor-dashboard.content.first-paragraph')}</p>
                <p>{t('doctor-dashboard.content.second-paragraph')}</p>
            </section>
        </>
    );

    return (
        <>
            <Header>
                <DoctorTabs value={0} />
            </Header>
            <main className="main doctor-dashboard">
                <div className="container">
                    <SpecialitiesFilter />
                    <Section
                        content={<Content />} />
                    <InquiryList inquiryListParams={inquiryListParams} />
                </div>
            </main>
            <Footer />
        </>
    )
};
