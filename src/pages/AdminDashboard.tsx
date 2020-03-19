import React from 'react';

import { Header } from '../components/Header';
import { AdminTabs } from '../components/AdminTabs';
import { Footer } from '../components/Footer';
import { DoctorList } from '../components/DoctorList';
import { DoctorListParams } from '../dto/DoctorListParams';

export const AdminDashboard: React.FunctionComponent = (): JSX.Element => {
    const doctorListParams: DoctorListParams = DoctorListParams.deserialize({
        isValidated: false
    });

    return (
        <>
        <Header>
            <AdminTabs value={0}/>
        </Header>
        <main className="main admin-dashboard">
            <div className="container">
                <DoctorList doctorListParams={doctorListParams}/>
            </div>
        </main>
        <Footer/>
    </>
    );
}
