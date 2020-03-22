import React from 'react';

export type ICounterProps = {
    count: number;
    text: string;
};

export const ThanksCounter: React.FunctionComponent<ICounterProps> = (props: ICounterProps): JSX.Element => {
    const { count, text } = props;

    return (
        <div className="thanks-counter">
            <p className="thanks-counter__content">
                <span className="thanks-counter__count">{count}&nbsp;</span>
                <span className="thanks-counter__text">{text}</span>
            </p>
        </div>
    )
};
