import React, { useEffect, useState } from 'react';

import { sdk } from '../sdk';
import { SkipNavIds } from './SkipNav';
import { Gratitude } from '../entities/Gratitude';
import { GratitudeCard } from './GratitudeCard';

export const GratitudeList: React.FunctionComponent = (): JSX.Element => {
    const [gratitudes, setGratitudes] = useState<Gratitude[]>([]);

    const getGratitudes = () => {
        sdk.gratitudes.get()
            .then((gratitudes: Gratitude[]) => {
                setGratitudes(gratitudes);
            });
    };

    useEffect((): void => {
        getGratitudes();
    }, []);

    const renderGratitudes = (): React.ReactNode => gratitudes.map((gratitude: Gratitude) => (
        <GratitudeCard key={gratitude.id} gratitude={gratitude}/>
    ));

    return (
        <section id={SkipNavIds.MAIN} className="gratitude-list">
            {renderGratitudes()}
        </section>
    )
};
