import { Card, CardContent, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

import { Gratitude } from '../../entities/Gratitude';
import { Image } from '../Image';

export interface IGratitudeCardProps {
    gratitude: Gratitude;
}

export const GratitudeCard: React.FunctionComponent<IGratitudeCardProps> = (
    props: IGratitudeCardProps
): JSX.Element => {
    const { gratitude } = props;

    const hasPicture = () => !!gratitude.imagePublicId;

    const renderTitle = (): React.ReactNode =>(
        <Typography className="gratitude__title" variant="h6" component="h3" gutterBottom>
            {gratitude.title}
        </Typography>
    );

    const renderPicture = (): React.ReactNode => {
        if (!hasPicture()) {
            return null;
        }
        console.log(gratitude);
        return (
            <figure className="gratitude__picture">
                <Image imagePublicId={gratitude.imagePublicId as string}/>
            </figure>
        );
    };

    const renderMetadata = (): React.ReactNode => (
        <Typography color="primary" align="left">
            <strong>{gratitude.name}</strong> {gratitude.createdAt.format('dddd D')}
        </Typography>
    );

    const renderMessage = (): React.ReactNode => {
        return (
            <div className="gratitude__message">
                {hasPicture() && renderTitle()}
                <Typography>{gratitude.message}</Typography>
            </div>
        );
    };

    const className = classNames({
        gratitude: true,
        'gratitude--has-picture': hasPicture()
    });

    return (
        <Card className={className}>
            <CardContent>
                <header>
                    {hasPicture() ? renderMetadata() : renderTitle()}
                </header>
                <div className="gratitude__content">
                    {renderPicture()}
                    {renderMessage()}
                </div>
            </CardContent>
        </Card>
    )
};
