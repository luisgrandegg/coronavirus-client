import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: React.ReactNode
}

export const Button: React.FunctionComponent<IButtonProps> = (
    props: IButtonProps
): JSX.Element => {
    const { children, ...rest } = props;
    return (
        <button {...rest}>
            {children}
        </button>
    );
};
