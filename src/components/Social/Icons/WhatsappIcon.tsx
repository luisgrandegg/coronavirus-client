import React from 'react';
import { useTranslation } from 'react-i18next';

import { IIconProps } from './Icon'

export const WhatsappIcon: React.FunctionComponent<IIconProps> = (props: IIconProps): JSX.Element => {
    const { t } = useTranslation();
    const { fill = 'currentColor' } = props;

    return (
        <svg aria-labelledby="whatsappTitle" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title id="whatsappTitle">{t('share.whatsappTitle')}</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M18 15.5C18 16.625 16.616 18 15 18C13.43 18 10.414 16.121 9.14602 14.854C7.87902 13.586 6.00002 10.57 6.00002 9C6.00002 7.384 7.37502 6 8.50002 6H9.50002C9.69002 6 9.86502 6.108 9.94902 6.279C9.94902 6.28 10.55 7.504 10.945 8.271C11.39 9.139 10.555 10.159 10.079 10.64C10.249 11.075 10.647 11.94 11.354 12.646C12.061 13.354 12.925 13.751 13.361 13.921C13.742 13.545 14.476 12.929 15.195 12.929C15.386 12.929 15.566 12.972 15.729 13.055C16.497 13.45 17.721 14.051 17.721 14.051C17.892 14.135 18 14.31 18 14.5V15.5ZM12 0C5.38302 0 -0.00012207 5.383 -0.00012207 12C-0.00012207 14.31 0.65502 16.543 1.89602 18.476L0.0330202 23.32C-0.0369798 23.503 0.0060202 23.709 0.14202 23.849C0.23802 23.947 0.36802 24 0.50002 24C0.55702 24 0.61302 23.991 0.66802 23.971L5.66702 22.186C7.57202 23.374 9.75602 24 12 24C18.617 24 24 18.617 24 12C24 5.383 18.617 0 12 0Z" fill={fill} />
        </svg>
    )
};
