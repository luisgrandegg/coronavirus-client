import { Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { GratitudeList } from '../components/GratitudeList';
import { CreateGratitude } from '../components/CreateGratitude';

export const Gratitudes: React.FunctionComponent = (): JSX.Element => {
    const [isCreateGratitudeOpen, setIsCreateGratitudeOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const onCreateGratitude = (): void => {
        setIsCreateGratitudeOpen(false);
    };

    const onOpenCreateGratitude = (): void => {
        setIsCreateGratitudeOpen(true);
    };

    return(
        <>
            <Header/>
            <main className="main gratitudes">
                <div className="container">
                    <BackHome/>
                    <header>
                        <Typography>{t('gratitudes.header.title')}</Typography>
                        <Typography>{t('gratitudes.header.subtitle')}</Typography>
                    </header>
                    <Button onClick={onOpenCreateGratitude}>{t('gratitudes.create')}</Button>
                    <CreateGratitude isOpen={isCreateGratitudeOpen} onCreateSucces={onCreateGratitude}/>
                    <GratitudeList/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
