import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Routes } from '../router/Routes';

export interface IHeaderProps {
    children?: React.ReactNode;
}

export const Header: React.FunctionComponent<IHeaderProps> = (
    props: IHeaderProps
): JSX.Element => {
    const { children } = props;
    const { t } = useTranslation();

    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">
                    <RouterLink to={Routes.ROOT}>{t('header.title')}</RouterLink>
                </h1>
                {children}
            </div>
        </header>
    );
};
