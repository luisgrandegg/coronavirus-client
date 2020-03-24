import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Routes } from '../router/Routes';


export const BackHome: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <nav className="back-home">
            <RouterLink to={Routes.ROOT}>
                <span className="back-home__arrow">&larr;</span>
                {t('back-home.text')}
            </RouterLink>
        </nav>
    );
};
