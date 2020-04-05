import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import React from 'react';

import { Gratitude } from '../../entities/Gratitude';
// import moment from '../../utils/moment';
import { Image } from '../Image';

export interface IGratitudeCardProps {
    gratitude: Gratitude;
}

export const GratitudeCard: React.FunctionComponent<IGratitudeCardProps> = (
    props: IGratitudeCardProps
): JSX.Element => {
    const { gratitude } = props;

    return (
        <Card className="inquiry">
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    {gratitude.title}
                </Typography>
                {gratitude.imagePublicId && <Image imagePublicId={gratitude.imagePublicId}/>}
                <Typography>{gratitude.message}</Typography>
            </CardContent>
            <CardActions>
                <Typography>{gratitude.name}</Typography>
            </CardActions>
        </Card>
    )
};
