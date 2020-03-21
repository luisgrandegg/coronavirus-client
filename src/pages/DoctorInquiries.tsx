import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DoctorTabs } from '../components/DoctorTabs';
import { InquiryList } from '../components/InquiryList';
import { InquiryListParams } from '../dto/InquiryListParams';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/selectors/status';
import { Auth } from '../entities/Auth';

export const DoctorInquiries: React.FunctionComponent = (): JSX.Element => {
    const auth = useSelector(getAuth);

    const inquiryListParams: InquiryListParams = InquiryListParams.deserialize({
        attended: true,
        flagged: false,
        doctorId: (auth as Auth).userId
    });

    return(
        <>
            <Header>
                <DoctorTabs value={1}/>
            </Header>
            <main className="main doctor-inquiries">
                <div className="container">
                    <InquiryList inquiryListParams={inquiryListParams}/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
