import { Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BackHome } from '../components/BackHome';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { GratitudeList } from '../components/GratitudeList';
import { CreateGratitude } from '../components/CreateGratitude';

export const GratitudeWall: React.FunctionComponent = (): JSX.Element => {
    const [isCreateGratitudeOpen, setIsCreateGratitudeOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const onCreateGratitude = (): void => {
        setIsCreateGratitudeOpen(false);
    };

    const onOpenCreateGratitude = (): void => {
        setIsCreateGratitudeOpen(true);
    };

    const onCloseGratitude = (): void => {
        setIsCreateGratitudeOpen(false);
    };

    return(
        <>
            <Header/>
            <main className="main gratitudes">
                <div className="container">
                    <BackHome/>
                    <header className="gratitudes__header">
                        <Typography variant="h5" component="h2">{t('gratitudes.header.title')}</Typography>
                        <Typography>{t('gratitudes.header.subtitle')}</Typography>
                        <Button variant="contained" onClick={onOpenCreateGratitude}>{t('gratitudes.create')}</Button>
                    </header>
                    <CreateGratitude
                        isOpen={isCreateGratitudeOpen}
                        onClose={onCloseGratitude}
                        onCreateSucces={onCreateGratitude}
                    />
                    <GratitudeList/>
                </div>
            </main>
            <Footer/>
        </>
    )
};
