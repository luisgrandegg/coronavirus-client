import React, { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { InquiryCard } from '../components/InquiryCard';
import { useParams, useHistory } from 'react-router-dom';
import { Inquiry } from '../entities/Inquiry';
import { DoctorTabs } from '../components/DoctorTabs';
import { sdk } from '../sdk';
import { Routes } from '../router/Routes';

interface IInquiryDetailLocationState {
    id: string;
}

export const InquiryDetail: React.FunctionComponent = (): JSX.Element => {
    const history = useHistory();
    let { id: inquiryId } = useParams<IInquiryDetailLocationState>();
    const [inquiry, setInquiry] = useState<Inquiry | null>(null);

    const handleAttendEvent = (inquiry: Inquiry): void => {
        if (!inquiry.attended) {
            history.push(Routes.DOCTOR_DASHBOARD);
        }
    }

    useEffect((): void => {
        sdk.inquiries.getOne(inquiryId)
            .then((inquiry: Inquiry) => { setInquiry(inquiry); });
    }, [inquiryId]);

    return (
        <>
            <Header>
                <DoctorTabs value={1}/>
            </Header>
            <main className="main inquiry-detail">
                <div className="container">
                    <BackHome />
                    {inquiry && <InquiryCard inquiry={inquiry} isAdmin={false} onAttendEvent={handleAttendEvent}/>}
                </div>
            </main>
            <Footer/>
        </>
    );
};
