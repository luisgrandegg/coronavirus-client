import { Button } from '@material-ui/core';
import removeFromArray from 'lodash.remove';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ByeBye } from '../components/ByeBye';
import { Footer, FooterTheme } from '../components/Footer';
import { Header } from '../components/Header';
import GratitudeList from '../components/GratitudeList';
import { CreateGratitude } from '../components/CreateGratitude';
import { Gratitude } from '../entities/Gratitude';
import { sdk } from '../sdk';

export interface IGratitudeWallProps {
    opened?: boolean;
}

export const GratitudeWall: React.FunctionComponent<IGratitudeWallProps> = (
    props: IGratitudeWallProps
): JSX.Element => {
    const { opened = false } = props;
    const [gratitudes, setGratitudes] = useState<Gratitude[]>([]);
    const [isCreateGratitudeOpen, setIsCreateGratitudeOpen] = useState<boolean>(opened);
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
            <Header isPublic={true}/>
            <main className="main gratitude-wall">
                <div className="container">
                    <ByeBye/>
                    <header className="gratitude-wall__header">
                        <p className="bye-bye-subtitle">Puedes seguir dejando tus mensajes de</p>
                        <h2 className="bye-bye-title">AGRADECIMIENTO</h2>
                        <p className="bye-bye-text">Aún puedes agradecer la labor que han realizado. Dejamos abierto nuestro muro para que les dejes un mensaje.</p>
                        <Button variant="contained" onClick={onOpenCreateGratitude}>{t('gratitude-wall.create')}</Button>
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
