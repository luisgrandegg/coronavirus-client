import React from 'react';

import { Header } from '../components/HeaderLegacy';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { DoctorTabs } from '../components/DoctorTabs';
import { InquiryList } from '../components/InquiryList';
import { InquiryListParams } from '../dto/InquiryListParams';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/selectors/status';
import { Auth } from '../entities/Auth';
import { useHistory } from 'react-router-dom';
import { Inquiry } from '../entities/Inquiry';
import { Routes } from '../router/Routes';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export const DoctorInquiries: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const history = useHistory();
    const auth = useSelector(getAuth);

    const inquiryListParams: InquiryListParams = InquiryListParams.deserialize({
        attended: true,
        flagged: false,
        doctorId: (auth as Auth).userId
    });

    const handleAttendEvent = (inquiry: Inquiry): void => {
        if (!inquiry.attended) {
            history.push(Routes.DOCTOR_DASHBOARD);
        }
    }

    return(
        <>
            <Helmet>
                <title>{t('metas.default.title')}</title>
                <meta name="description" content={t('metas.default.description')} />
            </Helmet>
            <Header>
                <DoctorTabs value={1}/>
            </Header>
            <main className="main doctor-inquiries">
                <div className="container">
                    <BackHome />
                    <InquiryList inquiryListParams={inquiryListParams} onAttendEvent={handleAttendEvent}/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
