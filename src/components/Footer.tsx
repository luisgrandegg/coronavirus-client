import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Share } from '../components/Social/Share';
import { Section } from '../components/Section';

export enum FooterTheme {
    DEFAULT = 'default',
    PRIMARY = 'primary'
}

export interface IFooterProps {
    theme?: FooterTheme;
}

export const Footer: React.FunctionComponent<IFooterProps> = (
    props: IFooterProps
): JSX.Element => {
    const { theme = FooterTheme.PRIMARY } = props;
    const { t } = useTranslation();

    const shareFill = theme === FooterTheme.DEFAULT ? '#1980A0' : undefined;

    const Content = (): JSX.Element => (
        <div className="footer__section">
            <h2 className="footer__section-title">{t('footer.title')}</h2>
            <p
                className="footer__section-description"
                dangerouslySetInnerHTML={{ __html: t('footer.first-paragraph') }} />
            <Share fill={shareFill}/>
        </div>
    );

    const className = classNames({
        footer: true,
        [`footer--${theme}`]: true
    });

    return (
        <footer className={className}>
            <div className="container">
                <Section
                    content={<Content />}
                    styleName={theme}
                />
            </div>
        </footer>
    )
};
