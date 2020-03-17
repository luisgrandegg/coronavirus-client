import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InquiryList } from '../components/InquiryList';
import { InquiryListParams } from '../dto/InquiryListParams';
import { DoctorTabs } from '../components/DoctorTabs';

export const DoctorDashbord: React.FunctionComponent = (): JSX.Element => {
    const inquiryListParams: InquiryListParams = InquiryListParams.deserialize({
        attended: false
    });

    return(
        <>
            <Header>
                <DoctorTabs value={0}/>
            </Header>
            <main className="main doctor-dashboard">
                <div className="container">
                    <InquiryList inquiryListParams={inquiryListParams}/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
