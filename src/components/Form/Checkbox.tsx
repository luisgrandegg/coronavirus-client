import React from 'react'
import { getIn, FormikProps, FieldInputProps } from 'formik'
import MaterialCheckbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export type ICheckboxProps = CheckboxProps & {
    label: string;
    field: FieldInputProps<string> | FieldInputProps<string[]>;
    formikProps: FormikProps<any>;
};

export const Checkbox: React.FunctionComponent<ICheckboxProps> = (props: ICheckboxProps) => {
    const { label, name, field, formikProps, ...other } = props;
    const { touched, errors } = formikProps;
    const errorText = getIn(errors, field.name);
    const touchedVal = getIn(touched, field.name);
    const hasError = touchedVal && errorText !== undefined;
    const styles = { width: '100%' };

    return (
        <div style={styles}>
            <FormControlLabel
                control={
                    <MaterialCheckbox
                        color="primary"
                        {...field}
                        {...other}
                    />
                }
                label={label}
            />
            {hasError &&
                <FormHelperText error={true}>
                    {errorText}
                </FormHelperText>
            }
        </div>
    );
}