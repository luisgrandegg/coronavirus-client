import { Tabs, Tab } from '@material-ui/core';
import React from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Routes } from '../router/Routes';

interface IDoctorTabsProps {
    value: number;
}

export const DoctorTabs: React.FunctionComponent<IDoctorTabsProps> = (props: IDoctorTabsProps): JSX.Element => {
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
                return history.push(Routes.DOCTOR_DASHBOARD)
            case 1:
                return history.push(Routes.DOCTOR_INQUIRIES)
        }
    };

    return(
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant={'fullWidth'}>
            <Tab label={t('header.doctor.pending')} {...a11yProps(0)} />
            <Tab label={t('header.doctor.own')} {...a11yProps(1)} />
        </Tabs>
    );
};
