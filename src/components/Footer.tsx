import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="container">
                {t('footer.powered-by')}
            </div>
        </footer>
    )
};
