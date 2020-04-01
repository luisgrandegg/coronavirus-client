import React from 'react';
import { useTranslation } from 'react-i18next';

export enum SkipNavIds {
    MAIN = 'main',
    FORM_INQUIRY = 'form-inquiry',
    FORM_REGISTER = 'form-register',
    FORM_LOGIN = 'form-login'
}

export type ISkypNavProps = {
    navElements: SkipNavIds[];
};

export const SkipNav: React.FunctionComponent<ISkypNavProps> = (props: ISkypNavProps): JSX.Element => {
    const { navElements } = props;
    const { t } = useTranslation();

    const renderNavElements = (): JSX.Element[] => (
        navElements.map((navElement: SkipNavIds, index: number): JSX.Element => {
            return (
                <li className="skip-nav__item" key={`skip-nav-${index}`}>
                    <a className="skip-nav__link" href={`#${navElement}`}>
                        {t(`skip-navigation.${navElement}`)}
                    </a>
                </li>
            );
        })
    );

    return (
        <div className="skip-nav" role="navigation" aria-live="off" aria-atomic="false" aria-label="Skip link section">
            <ul className="skip-nav__list">
                {renderNavElements()}
            </ul>
        </div>
    )
};
