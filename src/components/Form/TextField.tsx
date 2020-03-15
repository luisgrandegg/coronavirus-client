import React from 'react'
import MaterialTextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField' 
import { getIn, FormikProps, FieldInputProps } from 'formik'

export type ITextField = OutlinedTextFieldProps & {
    field: FieldInputProps<string>;
    form: FormikProps<any>;
};

export const TextField: React.FunctionComponent<ITextField> = (props: ITextField) => {
    const { label, field, form, ...other } = props;
    const { touched, errors } = form;
    const errorText = getIn(errors, field.name)
    const touchedVal = getIn(touched, field.name)
    const hasError = touchedVal && errorText !== undefined

    return (
        <MaterialTextField
            label={label}
            error={hasError}
            helperText={hasError ? errorText : ''}
            fullWidth={true}
            margin={'normal'}
            variant={'outlined'}
            {...field}
            {...other}
        />
    );
}