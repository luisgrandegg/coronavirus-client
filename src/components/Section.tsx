import React from 'react';

export interface ISectionProps {
    content: JSX.Element,
    aside?: JSX.Element,
    styleName?: String
};

export const Section: React.FunctionComponent<ISectionProps> = (props: ISectionProps): JSX.Element => (
    <div className={`section-wrapper ${props.styleName ? `section-wrapper__${props.styleName}` : ''}`}>
        <div className="section-wrapper__content">{props.content}</div>
        <div className="section-wrapper__aside">{props.aside}</div>
    </div>
);
