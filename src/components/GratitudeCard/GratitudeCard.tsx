import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

import { Gratitude } from '../../entities/Gratitude';
import { Image } from '../Image';
import { getAuth } from '../../store/selectors/status';
import { useSelector } from 'react-redux';
import { sdk } from '../../sdk';

export interface IGratitudeCardProps {
    gratitude: Gratitude;
    onFlagEvent: (gratitude: Gratitude) => void;
}

export const GratitudeCard: React.FunctionComponent<IGratitudeCardProps> = (
    props: IGratitudeCardProps
): JSX.Element => {
    const { gratitude, onFlagEvent } = props;
    const auth = useSelector(getAuth);
    const hasPicture = () => !!gratitude.imagePublicId;

    const flag = (): void => {
        sdk.gratitudes.flag(gratitude.id)
            .then((gratitude: Gratitude) => { onFlagEvent(gratitude) });
    };

    const renderTitle = (): React.ReactNode => (
        <Typography className="gratitude__title" variant="subtitle1" component="h3" gutterBottom>
            {gratitude.title}
        </Typography>
    );

    const renderPicture = (): React.ReactNode => {
        if (!hasPicture()) {
            return null;
        }
        return (
            <figure className="gratitude__picture">
                <Image imagePublicId={gratitude.imagePublicId as string}/>
            </figure>
        );
    };

    const renderMetadata = (): React.ReactNode => (
        <Typography variant="body2" color="primary" align="left">
            <strong>{gratitude.name}</strong> {gratitude.createdAt.format('D/M/Y')}
        </Typography>
    );

    const renderMessage = (): React.ReactNode => {
        return (
            <div className="gratitude__message">
                {hasPicture() && renderTitle()}
                <Typography variant="body2">{gratitude.message}</Typography>
            </div>
        );
    };

    const renderActions = () : React.ReactNode => (
        <Button
            color="primary"
            variant="contained"
            onClick={flag}
        >
            Desactivar
        </Button>
    );

    const className = classNames({
        gratitude: true,
        'gratitude--has-picture': hasPicture()
    });

    return (
        <Card className={className}>
            <CardContent>
                <header>
                    {!hasPicture() && renderTitle()}
                </header>
                <div className="gratitude__content">
                    {renderPicture()}
                    {renderMessage()}
                </div>
            </CardContent>
            <CardActions>
                {renderMetadata()}
                {auth?.isAdmin() && <div>{renderActions()}</div>}
            </CardActions>
        </Card>
    )
};
