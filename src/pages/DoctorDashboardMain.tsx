import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/Header';
import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { DoctorTabs } from '../components/DoctorTabs';

import { Redirect } from 'react-router-dom';
import { Routes } from '../router/Routes';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/selectors/status';
import { DoctorType } from '../entities/Doctor';
import { Button } from '@material-ui/core';
import { Link as RouterLink} from 'react-router-dom';

export const DoctorDashboardMain: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const auth = useSelector(getAuth);

    const getDoctorDashoboard = (): Routes => {
        switch (auth?.doctorType) {
            case DoctorType.REGULAR:
                return Routes.DOCTOR_DASHBOARD_REGULAR;
            case DoctorType.PSYCHOLOGIST:
                return Routes.DOCTOR_DASHBOARD_PSYCHOLOGIST;
            default:
                return Routes.LOGIN;
        }
    };

    if (!auth?.isSuperAdmin()) {
        return (
            <Redirect to={getDoctorDashoboard()}/>
        )
    }
    return (
        <>
            <Header>
                <DoctorTabs value={0} />
            </Header>
            <main className="main doctor-dashboard">
                <div className="container">
                    <BackHome />
                    <div className="button-group">
                        <Button
                            variant="contained"
                            color="primary"
                            to={Routes.DOCTOR_DASHBOARD_REGULAR}
                            component={RouterLink}
                        >
                            {t('doctor-dashboard.navigation.regular')}
                        </Button>
                    </div>
                    <div className="button-group">
                        <Button
                            variant="contained"
                            color="primary"
                            to={Routes.DOCTOR_DASHBOARD_PSYCHOLOGIST}
                            component={RouterLink}
                        >
                            {t('doctor-dashboard.navigation.psychologist')}
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};