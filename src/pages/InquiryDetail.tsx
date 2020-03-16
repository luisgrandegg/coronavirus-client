import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InquiryCard } from '../components/InquiryCard';
import { useLocation } from 'react-router-dom';
import { Inquiry } from '../entities/Inquiry';

interface IInquiryDetailLocationState {
    inquiry: Inquiry;
}

export const InquiryDetail: React.FunctionComponent = (): JSX.Element => {
    const { inquiry } = useLocation<IInquiryDetailLocationState>().state;

    return (
        <>
            <Header/>
            <main className="main inquiry-detail">
                <div className="container">
                <InquiryCard inquiry={inquiry}>
                    {inquiry.email}
                </InquiryCard>
                </div>
            </main>
            <Footer/>
        </>
    );
};
