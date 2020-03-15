import React from 'react';

import { IButtonStyleProps, IButtonProps, getClassName } from './Button';

export type LinkButtonProps = IButtonStyleProps &
    IButtonProps &
    React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const LinkButton:React.FunctionComponent<LinkButtonProps> = (
    props: LinkButtonProps
): JSX.Element => {
    const { children, ...rest } = props;
    const className = getClassName(props);

    return (
        <a className={className} {...rest} role="button">
            {children}
        </a>
    );
};
