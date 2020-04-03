import React from 'react';
import { useTranslation } from 'react-i18next';

export const EmailIcon: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <svg aria-labelledby="emailTitle" role="img" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title id="emailTitle">{t('share.emailTitle')}</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M4 6.209L11.703 11.902C11.879 12.033 12.121 12.033 12.297 11.902L20 6.209V17H4V6.209ZM12 6.878L4.065 1H19.935L12 6.878ZM22 0H2C0.897 0 0 0.897 0 2V16C0 17.104 0.897 18 2 18H22C23.103 18 24 17.104 24 16V2C24 0.897 23.103 0 22 0Z" fill="white" />
        </svg>
    )
};
