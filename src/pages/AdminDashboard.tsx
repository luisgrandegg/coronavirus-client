import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Header } from '../components/Header';
import { AdminTabs } from '../components/AdminTabs';
import { Footer } from '../components/Footer';
import { DoctorList } from '../components/DoctorList';
import { DoctorListParams } from '../dto/DoctorListParams';
import { getAuth } from '../store/selectors/status';
import { Link as RouterLink } from 'react-router-dom';
import { Routes } from '../router/Routes';
import { Button } from '@material-ui/core';

export const AdminDashboard: React.FunctionComponent = (): JSX.Element => {
    const auth = useSelector(getAuth);
    const { t } = useTranslation();

    const doctorListParams: DoctorListParams = DoctorListParams.deserialize({
        isActive: true,
        isValidated: false
    });

    const renderLinkToDoctor = (): React.ReactNode => {
        return auth?.isDoctor() ?
            (
                <Button
                    color="primary"
                    className="admin-dashboard__link"
                    component={RouterLink}
                    to={Routes.DOCTOR_DASHBOARD}
                >
                    {t('admin-dashboard.container.link-to-doctor')}
                </Button>
            )
            : null;
    }

    return (
        <>
        <Header>
            <AdminTabs value={0}/>
        </Header>
        <main className="main admin-dashboard">
            <div className="container">
                {renderLinkToDoctor()}
                <DoctorList doctorListParams={doctorListParams}/>
            </div>
        </main>
        <Footer/>
    </>
    );
}
