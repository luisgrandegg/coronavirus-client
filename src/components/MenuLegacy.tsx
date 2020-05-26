import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Routes } from '../router/Routes';
import { Drawer, IconButton } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import { Share } from './Social/Share';

export interface IMenuProps {
    onClose: () => void;
    state: boolean;
}

export const Menu: React.FunctionComponent<IMenuProps> = (props: IMenuProps): JSX.Element => {
    const { t } = useTranslation();
    const { onClose, state } = props;

    const handleOnClose = () => {
        onClose();
    }

    return (
        <Drawer
            className="menu"
            anchor="right"
            open={state}
            onClose={handleOnClose}
            transitionDuration={0}
        >
            <div className="menu__content">
                <div className="menu__header">
                    <h1 className="menu__title">{t('menu.title')}</h1>
                    <IconButton
                        aria-label={t('menu.close')}
                        className="menu__togglr"
                        size="small"
                        onClick={handleOnClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="menu__body">
                    <ul className="menu__list">
                        <li className="menu__list-item menu__list-item--primary">
                            <RouterLink to={Routes.HELP_CITIZEN}>{t('menu.help-citizen-item')}</RouterLink>
                        </li>
                        <li className="menu__list-item menu__list-item--primary">
                            <RouterLink to={Routes.HELP_DOCTOR}>{t('menu.help-doctor-item')}</RouterLink>
                        </li>
                        <li className="menu__list-item menu__list-item--primary">
                            <RouterLink to={Routes.ABOUT_US}>{t('menu.about-us-item')}</RouterLink>
                        </li>
                        <li className="menu__list-item menu__list-item--primary">
                            <RouterLink to={Routes.GRATITUDE_WALL}>{t('menu.gratitude-wall-item')}</RouterLink>
                        </li>
                        <hr className="menu__list-divider" />
                        <li
                            className="menu__list-item"
                            dangerouslySetInnerHTML={{ __html: t('menu.kit-item') }} />
                        <li
                            className="menu__list-item"
                            dangerouslySetInnerHTML={{ __html: t('menu.press-note') }} />
                        <li
                            className="menu__list-item"
                            dangerouslySetInnerHTML={{ __html: t('menu.privacy-item') }} />
                    </ul>
                </div>
                <div className="menu__footer">
                    <Share
                        fill="currentColor"
                        hidden={['email']}
                        showText={false}
                    />
                </div>
            </div>
        </Drawer>
    );
};
