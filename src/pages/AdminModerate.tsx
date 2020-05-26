import React from 'react';

import { Header } from '../components/HeaderLegacy';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { InquiryList } from '../components/InquiryList';
import { InquiryListParams } from '../dto/InquiryListParams';
import { AdminTabs } from '../components/AdminTabs';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export const AdminModerate: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    const inquiryListParams = InquiryListParams.deserialize({
        flagged: true,
        active: true
    });

    return(
        <>
            <Helmet>
                <title>{t('metas.default.title')}</title>
                <meta name="description" content={t('metas.default.description')} />
            </Helmet>
            <Header>
                <AdminTabs value={1}/>
            </Header>
            <main className="main doctor-inquiries">
                <div className="container">
                    <BackHome />
                    <InquiryList inquiryListParams={inquiryListParams} isLive={false} isAdmin={true}/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
