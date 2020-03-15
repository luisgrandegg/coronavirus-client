import ClassNames from 'classnames';
import React from 'react';

export enum ButtonColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    WARNING = 'warning',
    ALERT = 'alert'
}

export interface IButtonStyleProps {
    color: ButtonColor;
}

export interface IButtonProps {
    children: React.ReactNode
}

export type ButtonProps = IButtonStyleProps &
    IButtonProps &
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const getClassName = (props: IButtonStyleProps): string => ClassNames({
    'btn': true,
    [`btn--${props.color}`]: true
})

export const Button: React.FunctionComponent<ButtonProps> = (
    props: ButtonProps
): JSX.Element => {
    const { children, ...rest } = props;
    const className = getClassName(props);
    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
};
