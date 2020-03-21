import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { Header } from '../components/Header';
import { AdminTabs } from '../components/AdminTabs';
import { Footer } from '../components/Footer';
import { DoctorList } from '../components/DoctorList';
import { DoctorListParams } from '../dto/DoctorListParams';
import { UserType } from '../entities/User';
import { getAuth } from '../store/selectors/status';
import { Link } from '@material-ui/core';

export const AdminDashboard: React.FunctionComponent = (): JSX.Element => {
    const auth = useSelector(getAuth);
    const history = useHistory();
    const { t } = useTranslation();

    const doctorListParams: DoctorListParams = DoctorListParams.deserialize({
        isActive: true,
        isValidated: false
    });

    const renderLinkToDoctor = (): React.ReactNode => {
        const nonAdminPageLoaded = sessionStorage.getItem('lastNonAdminPageLoaded') || '';
        return auth?.userType === UserType.DOCTOR_ADMIN && nonAdminPageLoaded.includes('/dashboard/doctor') ?
            (
                <Link
                    component="button"
                    onClick={() => history.goBack()}
                    color="primary"
                    className="admin-dashboard__link"
                    >
                     {t('admin-dashboard.container.link-to-doctor')}
                </Link>
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
