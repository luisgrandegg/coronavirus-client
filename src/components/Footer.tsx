import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            {t('footer.powered-by')}
        </footer>
    )
};
