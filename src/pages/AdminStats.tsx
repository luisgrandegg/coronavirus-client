import React from 'react';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { AdminTabs } from '../components/AdminTabs';
import { Stats } from '../components/Stats';

export const AdminStats: React.FunctionComponent = (): JSX.Element => {;

    return(
        <>
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
