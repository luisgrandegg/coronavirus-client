import { Tabs, Tab } from '@material-ui/core';
import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InquiryList } from '../components/InquiryList';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Routes } from '../router/Routes';
import { InquiryListParams } from '../dto/InquiryListParams';
import { useSelector } from 'react-redux';
import { getAuth } from '../store/selectors/status';
import { Auth } from '../entities/Auth';

export const DoctorInquiries: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    const history = useHistory();
    const auth = useSelector(getAuth);

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

    const inquiryListParams: InquiryListParams = InquiryListParams.deserialize({
        attended: true,
        doctorId: (auth as Auth).userId
    });

    return(
        <>
            <Header>
                <Tabs value={1} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label={t('header.doctor.pending')} {...a11yProps(0)} />
                    <Tab label={t('header.doctor.own')} {...a11yProps(1)} />
                </Tabs>
            </Header>
            <main className="main doctor-inquiries">
                <div className="container">
                    <InquiryList inquiryListParams={inquiryListParams}/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
