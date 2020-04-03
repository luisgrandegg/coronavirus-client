import React from 'react';
import { useTranslation } from 'react-i18next';

export const FacebookIcon: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <svg aria-labelledby="facebookTitle" role="img" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title id="facebookTitle">{t('share.facebookTitle')}</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M20 0H2C0.897 0 0 0.897 0 2V20C0 21.103 0.897 22 2 22H9.5C9.776 22 10 21.776 10 21.5V14.5C10 14.224 9.776 14 9.5 14H8.521C8.245 14 8.021 13.776 8.021 13.5V10.5C8.021 10.224 8.245 10 8.521 10H9.5C9.776 10 10 9.776 10 9.5V8.5C10 6.019 12.019 4 14.5 4H17.5C17.776 4 18 4.224 18 4.5V7.5C18 7.776 17.776 8 17.5 8H14.5C14.224 8 14 8.224 14 8.5V9.5C14 9.776 14.224 10 14.5 10H17.5C17.647 10 17.787 10.064 17.881 10.176C17.977 10.289 18.018 10.437 17.993 10.583L17.493 13.583C17.453 13.824 17.246 14 17 14H14.5C14.224 14 14 14.224 14 14.5V21.5C14 21.776 14.224 22 14.5 22H20C21.103 22 22 21.103 22 20V2C22 0.897 21.103 0 20 0Z" fill="white" />
        </svg>
    )
};
