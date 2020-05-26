import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Routes } from '../router/Routes';
import { Button, Hidden, IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/selectors/status';

import { Menu } from './MenuLegacy'
import { Share } from './Social/Share';

export interface IHeaderProps {
    children?: React.ReactNode;
    isPublic?: boolean;
}

export const Header: React.FunctionComponent<IHeaderProps> = (
    props: IHeaderProps
): JSX.Element => {
    const { children, isPublic = false } = props;
    const { t } = useTranslation();
    const auth = useSelector(getAuth);
    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        const currentLocation = window && window.location.href;
        if (!currentLocation.includes('admin')) {
            sessionStorage.setItem('lastNonAdminPageLoaded', currentLocation);
        }
    }, []);

    const toggleMenu = (open: boolean) => {
        setState(open);
    };

    const renderResponsiveMenu = (): React.ReactNode => (
        <Hidden mdUp>
            <IconButton
                aria-label={t('header.open-menu')}
                size="small"
                onClick={() => toggleMenu(true)}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                onClose={() => toggleMenu(false)}
                state={state}
            />
        </Hidden>
    );

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

    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">
                    <RouterLink to={Routes.ROOT}>{t('header.title')}</RouterLink>
                </h1>
                {isPublic ? (
                    <>
                        <Hidden smDown>
                            <nav className="header__nav">
                                <ul className="header__menu">
                                    <li className="header__menu-item">
                                        <RouterLink to={Routes.HELP_CITIZEN}>{t('header.nav.help-citizen-item')}</RouterLink>
                                    </li>
                                    <li className="header__menu-item">
                                        <RouterLink to={Routes.ABOUT_US}>{t('header.nav.about-us-item')}</RouterLink>
                                    </li>
                                    <li className="header__menu-item">
                                        <RouterLink to={Routes.GRATITUDE_WALL}>{t('header.nav.gratitude-wall-item')}</RouterLink>
                                    </li>
                                </ul>
                            </nav>
                            <Share
                                fill="currentColor"
                                hidden={['email']}
                                showText={false}
                            />
                        </Hidden>
                        <div className="header__actions">
                            {renderResponsiveMenu()}
                        </div>
                    </>
                ) : (
                        <div className="header__actions">
                            {renderAdminButton()}
                            {children}
                        </div>
                    )
                }
            </div>
        </header >
    );
};
