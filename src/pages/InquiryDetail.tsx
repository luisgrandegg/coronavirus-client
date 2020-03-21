import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InquiryCard } from '../components/InquiryCard';
import { useParams } from 'react-router-dom';
import { Inquiry } from '../entities/Inquiry';
import { DoctorTabs } from '../components/DoctorTabs';
import { sdk } from '../sdk';

interface IInquiryDetailLocationState {
    id: string;
}

export const InquiryDetail: React.FunctionComponent = (): JSX.Element => {
    let { id: inquiryId } = useParams<IInquiryDetailLocationState>();
    const [inquiry, setInquiry] = useState<Inquiry | null>(null);
    const { t } = useTranslation();

    const renderInquiry = (inquiryToRender: Inquiry): React.ReactNode => {
        return (
            <InquiryCard inquiry={inquiryToRender}>
                <CopyToClipboard text={inquiryToRender.email}>
                    <span>{t('inquiry.email')} {inquiryToRender.email}</span>
                </CopyToClipboard>
            </InquiryCard>
        );
    };

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
                {inquiry && renderInquiry(inquiry)}
                </div>
            </main>
            <Footer/>
        </>
    );
};
