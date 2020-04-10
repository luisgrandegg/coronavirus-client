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

export enum CloudynaryEventType {
    SUCCESS = 'success'
}

export interface ICloudynarySuccessEventInfo {
    public_id: string;
    secure_url: string;
}

export interface ICloudynaryEvent<U extends CloudynaryEventType = CloudynaryEventType, T = any> {
    event: U;
    info: T
}

export type CloudynarySuccessEvent = ICloudynaryEvent<CloudynaryEventType.SUCCESS, ICloudynarySuccessEventInfo>

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

    const onSuccess = (result: CloudynarySuccessEvent): void => {
        const { info } = result;
        console.log(info);
        onImageUpload({
            publicId: info.public_id,
            publicUrl: info.secure_url,
        });
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
    }, (error: any, result: ICloudynaryEvent) => {
        if (error) {
            throw error;
        }
        switch(result.event) {
            case CloudynaryEventType.SUCCESS:
                return onSuccess(result);
        }
    });

    const handleClick = (): void => { widget.open() };

    return (
        <Button
            onClick={handleClick}
            color="primary"
            variant="outlined"
        >
            {t('image-upload.actions.upload')}
        </Button>
    );
};
