
// @ts-ignore
import { CloudinaryContext, Image as CloudinaryImage } from 'cloudinary-react';
import React from 'react';

export interface IImageProps {
    imagePublicId: string;
}

export const Image: React.FunctionComponent<IImageProps> = (
    props: IImageProps
): JSX.Element => {
    const { imagePublicId } = props;

    return (
        <CloudinaryContext cloudName="citamedicaencasa">
            <CloudinaryImage publicId={imagePublicId} secure="true"/>
        </CloudinaryContext>
    );
};
