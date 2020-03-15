import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Routes } from '../router/Routes';

export const Header: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">
                    <RouterLink to={Routes.ROOT}>{t('header.title')}</RouterLink>
                </h1>
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <Button
                            variant="contained"
                            color="primary"
                            component={RouterLink}
                            to={Routes.LOGIN}
                        >{t('header.login')}</Button>
                    </li>
                </ul>
            </div>
        </header>
    );
};
