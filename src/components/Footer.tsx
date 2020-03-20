import React from 'react';
import { useTranslation } from 'react-i18next';
import { Share } from '../components/Social/Share';

import { Section } from '../components/Section';

export const Footer: React.FunctionComponent = (): JSX.Element => {
    const { t } = useTranslation();

    const Content = (): JSX.Element => (
        <div className="footer__section">
            <h2 className="footer__section-title">{t('footer.title')}</h2>
            <p
                className="footer__section-description"
                dangerouslySetInnerHTML={{ __html: t('footer.first-paragraph') }} />
            <Share />
        </div>
    );

    return (
        <footer className="footer">
            <div className="container">
                <Section
                    content={<Content />}
                    styleName="primary"
                />
            </div>
        </footer>
    )
};
