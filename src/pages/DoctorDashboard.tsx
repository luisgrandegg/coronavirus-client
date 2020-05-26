import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/HeaderLegacy';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { InquiryList } from '../components/InquiryList';
import useMultipleOptionsFilter from '../components/useMultipleOptionsFilter';
import { InquiryListParams } from '../dto/InquiryListParams';
import { DoctorTabs } from '../components/DoctorTabs';
import { SkipNav, SkipNavIds } from '../components/SkipNav';

import specialities from '../constants/specialities';
import { useHistory, Redirect } from 'react-router-dom';
import { Inquiry } from '../entities/Inquiry';
import { Routes } from '../router/Routes';
import { DoctorType } from '../entities/Doctor';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/selectors/status';
import { Helmet } from 'react-helmet';
import { InquiryCountryFilter } from '../components/InquiryCountryFilter';

export interface IDoctorDashBoardProps {
    doctorType: DoctorType
}

export const DoctorDashbord: React.FunctionComponent<IDoctorDashBoardProps> = (
    props: IDoctorDashBoardProps
): JSX.Element => {
    const history = useHistory();
    const { t } = useTranslation();
    const { doctorType } = props;
    const [countries, setCountries] = useState<string[]>(['ALL']);
    const [selectedSpecialities, SpecialitiesFilter] = useMultipleOptionsFilter(
        t('doctor-dashboard.filter.title'),
        t('doctor-dashboard.filter.apply-button'),
        [] as string[],
        specialities);
    const inquiryListParams: InquiryListParams = InquiryListParams.deserialize({
        specialities: selectedSpecialities,
        countries,
        active: true,
        attended: false,
        flagged: false,
        doctorType: doctorType
    });
    const auth = useSelector(getAuth);

    const handleAttendEvent = (inquiry: Inquiry): void => {
        if (inquiry.attended) {
            history.push(Routes.INQUIRY_DETAIL.replace(':id', inquiry.id));
        }
    }

    const handleCountryChange = (countries: string[]): void => {
        setCountries(countries);
    };

    const Content = (): JSX.Element => (
        <>
            <section id={SkipNavIds.MAIN} className="doctor-dashboard__section">
                <p>{t('doctor-dashboard.content.first-paragraph')}</p>
                <p>{t('doctor-dashboard.content.second-paragraph')}</p>
            </section>
            <header className="doctor-dashboard__header">
                <h2 className="doctor-dashboard__title doctor-dashboard__title--confirmation">{t('doctor-dashboard.header.title')}</h2>
            </header>
        </>
    );

    const getDoctorDashoboard = (): Routes => {
        switch (auth?.doctorType) {
            case DoctorType.REGULAR:
                return Routes.DOCTOR_DASHBOARD_REGULAR;
            case DoctorType.PSYCHOLOGIST:
                return Routes.DOCTOR_DASHBOARD_PSYCHOLOGIST;
            default:
                return Routes.LOGIN;
        }
    };

    if (!auth?.isSuperAdmin() && auth?.doctorType !== doctorType) {
        return (
            <Redirect to={getDoctorDashoboard()}/>
        )
    }

    return (
        <>
            <Helmet>
                <title>{t('metas.default.title')}</title>
                <meta name="description" content={t('metas.default.description')} />
            </Helmet>
            <SkipNav navElements={[SkipNavIds.MAIN]}/>
            <Header>
                <DoctorTabs value={0} />
            </Header>
            <main className="main doctor-dashboard">
                <div className="container">
                    <BackHome />
                    <Section
                        content={<Content />} />
                    <div className="doctor-dashboard__filters">
                        {false && <InquiryCountryFilter countries={countries} onChange={handleCountryChange}/>}
                        {doctorType === DoctorType.REGULAR && <SpecialitiesFilter />}
                    </div>
                    <InquiryList inquiryListParams={inquiryListParams} onAttendEvent={handleAttendEvent}/>
                </div>
            </main>
            <Footer />
        </>
    )
};
