import React, { useEffect } from 'react';

export interface IScrollToTopProps {
    children?: React.ReactNode;
}

export const ScrollToTop: React.FunctionComponent<IScrollToTopProps> = (
    props: IScrollToTopProps
): JSX.Element => {
    useEffect((): void => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            {props.children}
        </>
    );
};
