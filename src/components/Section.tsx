import React from 'react';

export interface ISectionProps {
    aside?: JSX.Element,
    content: JSX.Element
};

export const Section: React.FunctionComponent<ISectionProps> = (props: ISectionProps): JSX.Element => (
    <div className="section-wrapper">
        <div className="section-wrapper__content">{props.content}</div>
        <div className="section-wrapper__aside">{props.aside}</div>
    </div>
);
