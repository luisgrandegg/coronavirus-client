import React from 'react';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { AdminTabs } from '../components/AdminTabs';
import { Stats } from '../components/Stats';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export const AdminStats: React.FunctionComponent = (): JSX.Element => {;
    const { t } = useTranslation();

    return(
        <>
            <Helmet>
                <title>{t('metas.default.title')}</title>
                <meta name="description" content={t('metas.default.description')} />
            </Helmet>
            <Header>
                <AdminTabs value={2}/>
            </Header>
            <main className="main doctor-inquiries">
                <BackHome />
                <div className="container">
                    <Stats/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
