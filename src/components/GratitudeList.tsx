import React from 'react';
import { LazyLoadComponent, ScrollPosition, trackWindowScroll } from 'react-lazy-load-image-component';

import { SkipNavIds } from './SkipNav';
import { Gratitude } from '../entities/Gratitude';
import { GratitudeCard } from './GratitudeCard';

export interface IGratitudeListProps {
    gratitudes: Gratitude[];
    onRemoveEvent: (gratitude: Gratitude) => void;
    scrollPosition: ScrollPosition;
}

export const GratitudeList: React.FunctionComponent<IGratitudeListProps> = (
    props: IGratitudeListProps
): JSX.Element => {
    const { gratitudes, onRemoveEvent } = props;

    const onFlagEvent = (gratitude: Gratitude): void => { onRemoveEvent(gratitude) };

    const renderGratitudes = (): React.ReactNode => gratitudes.map((gratitude: Gratitude) => (
        <LazyLoadComponent key={gratitude.id} scrollPosition={props.scrollPosition}>
            <GratitudeCard gratitude={gratitude} onFlagEvent={onFlagEvent}/>
        </LazyLoadComponent>
    ));

    return (
        <section id={SkipNavIds.MAIN} className="gratitude-list">
            {renderGratitudes()}
        </section>
    )
};

export default trackWindowScroll(GratitudeList);
