import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Routes } from '../router/Routes';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/selectors/status';
import { UserType } from '../entities/User';

import { TwitterIcon } from '../components/Social/Icons/TwitterIcon';

export interface IHeaderProps {
    children?: React.ReactNode;
}

export const Header: React.FunctionComponent<IHeaderProps> = (
    props: IHeaderProps
): JSX.Element => {
    const { children } = props;
    const { t } = useTranslation();
    const auth = useSelector(getAuth);

    const isDoctorAdmin = (): boolean => {
        return auth?.userType === UserType.DOCTOR_ADMIN;
    };

    //TODO:: pls if this grows change this
    const renderAdminButton = (): React.ReactNode =>
        isDoctorAdmin() ?
            (
                <Button
                    className="admin-button"
                    color="primary"
                    variant="outlined"
                    to={Routes.ADMIN_DASHBOARD}
                    component={RouterLink}
                >
                    admin
                </Button>
            ) : null;

    const renderTwitterLink = (): React.ReactNode =>
        children === undefined && !isDoctorAdmin() ?
            (
                <a
                    className="twitter-link"
                    href="https://twitter.com/CitaMedicaCasa"
                    target="_blank"
                    rel="noopener noreferrer">
                    @CitaMedicaCasa <TwitterIcon fill="currentColor" />
                </a>
            ) : (
                null
            );

    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">
                    <RouterLink to={Routes.ROOT}>{t('header.title')}</RouterLink>
                </h1>
                <div className="header__actions">
                    {renderAdminButton()}
                    {renderTwitterLink()}
                    {children}
                </div>
            </div>
        </header>
    );
};
