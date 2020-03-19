import { Tabs, Tab } from '@material-ui/core';
import React from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Routes } from '../router/Routes';

interface IAdminTabsProps {
    value: number;
}

export const AdminTabs: React.FunctionComponent<IAdminTabsProps> = (props: IAdminTabsProps): JSX.Element => {
    const { value } = props;
    const { t } = useTranslation();
    const history = useHistory();

    const a11yProps = (index: any): any => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        switch (newValue) {
            case 0:
                return history.push(Routes.ADMIN_DASHBOARD)
            case 1:
                return history.push(Routes.ADMIN_MODERATE)
        }
    };

    return(
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant={'fullWidth'}>
            <Tab label={t('header.admin.doctors')} {...a11yProps(0)} />
        </Tabs>
    );
};
