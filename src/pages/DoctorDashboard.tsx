import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InquiryList } from '../components/InquiryList';

export const DoctorDashbord: React.FunctionComponent = (): JSX.Element => {
    return(
        <>
            <Header/>
            <main className="main doctor-dashboard">
                <div className="container">
                    <InquiryList/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
