import { Typography, Button } from '@material-ui/core';
import removeFromArray from 'lodash.remove';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { BackHome } from '../components/BackHome';
import { Footer, FooterTheme } from '../components/Footer';
import { Header } from '../components/Header';
import GratitudeList from '../components/GratitudeList';
import { CreateGratitude } from '../components/CreateGratitude';
import { Gratitude } from '../entities/Gratitude';
import { sdk } from '../sdk';

export const GratitudeWall: React.FunctionComponent = (): JSX.Element => {
    const [gratitudes, setGratitudes] = useState<Gratitude[]>([]);
    const [isCreateGratitudeOpen, setIsCreateGratitudeOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const getGratitudes = () => {
        sdk.gratitudes.get()
            .then((gratitudes: Gratitude[]) => {
                setGratitudes(gratitudes);
            });
    };

    const onCreateGratitude = (gratitude: Gratitude): void => {
        const gratitudesToSet = gratitudes.map((mappedGratitude: Gratitude) => mappedGratitude.clone());
        setIsCreateGratitudeOpen(false);
        gratitudesToSet.unshift(gratitude);
        setGratitudes(gratitudesToSet);
    };

    const onRemoveEvent = (gratitude: Gratitude): void => {
        const gratitudesToSet = gratitudes.map((mappedGratitude: Gratitude) => mappedGratitude.clone());
        removeFromArray(gratitudesToSet, (gratitudeInArray: Gratitude) =>
            gratitude.id === gratitudeInArray.id);
        setGratitudes(gratitudesToSet);
    }

    const onOpenCreateGratitude = (): void => {
        setIsCreateGratitudeOpen(true);
    };

    const onCloseGratitude = (): void => {
        setIsCreateGratitudeOpen(false);
    };

    useEffect((): void => {
        getGratitudes();
    }, []);

    return(
        <>
            <Header/>
            <main className="main gratitude-wall">
                <div className="container">
                    <BackHome/>
                    <header className="gratitude-wall__header">
                        <Typography variant="h5" component="h2">{t('gratitudes.header.title')}</Typography>
                        <Typography>{t('gratitudes.header.subtitle')}</Typography>
                        <Button variant="contained" onClick={onOpenCreateGratitude}>{t('gratitudes.create')}</Button>
                    </header>
                    <CreateGratitude
                        isOpen={isCreateGratitudeOpen}
                        onClose={onCloseGratitude}
                        onCreateSucces={onCreateGratitude}
                    />
                    <GratitudeList gratitudes={gratitudes} onRemoveEvent={onRemoveEvent}/>
                </div>
            </main>
            <Footer theme={FooterTheme.DEFAULT}/>
        </>
    )
};
