import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Routes } from '../router/Routes';
import { getAuth } from '../store/selectors/status';

export const Header: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const auth = useSelector(getAuth);

    const renderAnonymousMenuItems = (): React.ReactNode => (
        <>
            <li className="header__menu-item">
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to={Routes.LOGIN}
                >{t('header.login')}</Button>
            </li>
        </>
    );

    const renderMenuItems = (): React.ReactNode => (
        <>
            <li className="header__menu-item">
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to={Routes.DOCTOR_DASHBOARD}
                >{t('header.dashboard')}</Button>
            </li>
        </>
    );

    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">
                    <RouterLink to={Routes.ROOT}>{t('header.title')}</RouterLink>
                </h1>
                <ul className="header__menu">
                    {!auth ? renderAnonymousMenuItems() : renderMenuItems() }
                </ul>
            </div>
        </header>
    );
};
