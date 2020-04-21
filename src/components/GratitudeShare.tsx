import React from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { Routes } from '../router/Routes';
import { Gratitude } from '../entities/Gratitude';
import { Share } from './Social/Share';

export interface IGratitudeShareProps {
    gratitude: Gratitude
}

export const GratitudeShare: React.FunctionComponent<IGratitudeShareProps> = (
    props: IGratitudeShareProps
): JSX.Element => {
    const { gratitude } = props;
    const { t } = useTranslation();
    const hasNativeShare = navigator && (navigator as any)?.share;

    const onNativeShare = (): void => {
        (navigator as any).share({
            title: t('gratitude-share.title'),
            text: t('gratitude-share.message', { message: gratitude.message }),
            url: Routes.GRATITUDE_WALL
        })
    }

    const renderNativeShare = (): JSX.Element => (
        <Button color="primary" onClick={onNativeShare} variant="contained">{t('gratitude-share.cta')}</Button>
    );

    const renderShare = (): JSX.Element => (
        <Share
            showText={false}
            hidden={['email']}
            fill="#1980A0"
            text={{
                twitter: t('gratitude-share.message', { message: gratitude.message }),
                facebook: t('gratitude-share.message', { message: gratitude.message }),
                whatsapp: t('gratitude-share.message', { message: gratitude.message })
            }}
        />
    );

    return hasNativeShare ? renderNativeShare() : renderShare();
};
