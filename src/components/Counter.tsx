import React from 'react';

export type ICounterProps = {
    pre: string;
    count: number;
    post: string;
};

export const Counter: React.FunctionComponent<ICounterProps> = (props: ICounterProps): JSX.Element => {
    const { pre, count, post } = props;

    return (
        <div className="counter">
            <div className="counter__content">
                <span>{pre}</span>
                <span className="counter__content-count">{count}</span>
                <span>{post}</span>
            </div>
        </div>
    )
};
