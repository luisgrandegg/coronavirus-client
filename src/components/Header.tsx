import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Routes } from '../router/Routes';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/selectors/status';

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

    useEffect(() => {
        const currentLocation = window && window.location.href;
        if (!currentLocation.includes('admin')) {
            sessionStorage.setItem('lastNonAdminPageLoaded', currentLocation);
        }
    }, []);

    const canRenderTwitterLink = () => (children === undefined && !auth?.isAdmin())

    const renderAdminButton = (): React.ReactNode =>
        auth?.isAdmin() ?
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
        canRenderTwitterLink() ?
            (
                <a
                    className="twitter-link"
                    href="https://twitter.com/CitaMedicaCasa"
                    target="_blank"
                    title={t('header.twitter.title')}
                    rel="noopener noreferrer">
                    @CitaMedicaCasa <TwitterIcon fill="currentColor" />
                </a>
            ) : (
                null
            );

    return (
        <header className={`header ${canRenderTwitterLink() ? 'header__rrss' : ''}`}>
            < div className="container" >
                <h1 className="header__title">
                    <RouterLink to={Routes.ROOT}>{t('header.title')}</RouterLink>
                </h1>
                <div className="header__actions">
                    {renderAdminButton()}
                    {renderTwitterLink()}
                    {children}
                </div>
            </div >
        </header >
    );
};
