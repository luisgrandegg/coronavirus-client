import React from 'react'
import Button from '@material-ui/core/Button';

export interface ISubmitButtonProps {
    limitWidth?: boolean;
    label: string;
    disabled: boolean;
};

export const SubmitButton: React.FunctionComponent<ISubmitButtonProps> = (props: ISubmitButtonProps) => {
    const { label, disabled, limitWidth = true } = props;
    const styles = limitWidth ? { width: '50%' } : {};

    return (
        <Button
            style={styles}
            variant="contained"
            color="primary"
            type="submit"
            disabled={disabled}
        >
            {label}
        </Button>
    );
}
