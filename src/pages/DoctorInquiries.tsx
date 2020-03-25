import React from 'react';

import { Header } from '../components/Header';
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

export const DoctorInquiries: React.FunctionComponent = (): JSX.Element => {
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
