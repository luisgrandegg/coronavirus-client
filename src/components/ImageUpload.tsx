import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { sdk } from '../sdk';

export interface IImageUploadProps {
    onImageUpload: (imageUploadResult: IImageUploadResult) => void;
}

export interface IImageUploadResult {
    publicId: string;
    publicUrl: string;
}

export const ImageUpload: React.FunctionComponent<IImageUploadProps> = (
    props: IImageUploadProps
): JSX.Element => {
    const { onImageUpload } = props;
    const { t } = useTranslation();

    const generateUploadSignature = async (
        callback: (signature: string) => void,
        paramsToSign: object
    ): Promise<void> => {
        sdk.media.sign(paramsToSign).then((signature: string) => callback(signature));
    };

    const widget = (window as any).cloudinary.createUploadWidget({
        api_key: '469665434294858',
        cloud_name: 'citamedicaencasa',
        cropping: true,
        multiple: false,
        secure: true,
        sources: ['local', 'url', 'camera', 'facebook', 'instagram'],
        upload_preset: 'ml_default',
        upload_signature: generateUploadSignature
    }, (error: any, result: any) => {
        if (error) {
            throw error;
        }
        onImageUpload({
            publicId: result[0].public_id,
            publicUrl: result[0].secure_url
        });
    });

    const handleClick = (): void => { widget.open() };

    return (
        <Button
            onClick={handleClick}
            color="primary"
        >
            {t('gratitude')}
        </Button>
    );
};
