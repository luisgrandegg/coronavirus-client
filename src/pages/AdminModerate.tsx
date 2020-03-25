import React from 'react';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { InquiryList } from '../components/InquiryList';
import { InquiryListParams } from '../dto/InquiryListParams';
import { AdminTabs } from '../components/AdminTabs';

export const AdminModerate: React.FunctionComponent = (): JSX.Element => {;
    const inquiryListParams = InquiryListParams.deserialize({
        flagged: true,
        active: true
    });

    return(
        <>
            <Header>
                <AdminTabs value={1}/>
            </Header>
            <main className="main doctor-inquiries">
                <div className="container">
                    <BackHome />
                    <InquiryList inquiryListParams={inquiryListParams} isLive={false} admin={true}/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
