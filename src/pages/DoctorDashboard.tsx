import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { InquiryList } from '../components/InquiryList';
import useMultipleOptionsFilter from '../components/useMultipleOptionsFilter';
import { InquiryListParams } from '../dto/InquiryListParams';
import { DoctorTabs } from '../components/DoctorTabs';

import specialities from '../constants/specialities';
import { useHistory } from 'react-router-dom';
import { Inquiry } from '../entities/Inquiry';
import { Routes } from '../router/Routes';

export const DoctorDashbord: React.FunctionComponent = (): JSX.Element => {
    const history = useHistory();
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

    const handleAttendEvent = (inquiry: Inquiry): void => {
        if (inquiry.attended) {
            history.push(Routes.INQUIRY_DETAIL.replace(':id', inquiry.id));
        }
    }

    const Content = (): JSX.Element => (
        <>
            <section className="doctor-dashboard__section">
                <p>{t('doctor-dashboard.content.first-paragraph')}</p>
                <p>{t('doctor-dashboard.content.second-paragraph')}</p>
            </section>
            <header className="doctor-dashboard__header">
                <h2 className="doctor-dashboard__title doctor-dashboard__title--confirmation">{t('doctor-dashboard.header.title')}</h2>
            </header>
        </>
    );

    return (
        <>
            <Header>
                <DoctorTabs value={0} />
            </Header>
            <main className="main doctor-dashboard">
                <div className="container">
                    <BackHome />
                    <Section
                        content={<Content />} />
                    <SpecialitiesFilter />
                    <InquiryList inquiryListParams={inquiryListParams} onAttendEvent={handleAttendEvent}/>
                </div>
            </main>
            <Footer />
        </>
    )
};
