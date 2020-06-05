import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../components/HeaderLegacy';
import { Footer } from '../components/Footer';

import { Redirect } from 'react-router-dom';
import { Routes } from '../router/Routes';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/selectors/status';
import { DoctorType } from '../entities/Doctor';
import { Button } from '@material-ui/core';
import { Link as RouterLink} from 'react-router-dom';
import { AdminTabs } from '../components/AdminTabs';
import { Helmet } from 'react-helmet';

export const AdminDashboardMain: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const auth = useSelector(getAuth);

    const getAdminDashoboard = (): Routes => {
        switch (auth?.doctorType) {
            case DoctorType.REGULAR:
                return Routes.ADMIN_DASHBOARD_REGULAR;
            case DoctorType.PSYCHOLOGIST:
                return Routes.ADMIN_DASHBOARD_PSYCHOLOGIST;
            default:
                return Routes.LOGIN;
        }
    };

    if (!auth?.isSuperAdmin()) {
        return (
            <Redirect to={getAdminDashoboard()}/>
        )
    }

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
            <Helmet>
                <title>{t('metas.default.title')}</title>
                <meta name="description" content={t('metas.default.description')} />
                <meta name='robots' content='noindex'/>
            </Helmet>
            <Header>
                <AdminTabs value={0}/>
            </Header>
            <main className="main admin-dashboard">
                <div className="container">
                    {renderLinkToDoctor()}
                    <div className="button-group">
                        <Button
                            variant="contained"
                            color="primary"
                            to={Routes.ADMIN_DASHBOARD_REGULAR}
                            component={RouterLink}
                        >
                            {t('admin-dashboard.navigation.regular')}
                        </Button>
                    </div>
                    <div className="button-group">
                        <Button
                            variant="contained"
                            color="primary"
                            to={Routes.ADMIN_DASHBOARD_PSYCHOLOGIST}
                            component={RouterLink}
                        >
                            {t('admin-dashboard.navigation.psychologist')}
                        </Button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};
