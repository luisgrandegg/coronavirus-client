import React from 'react'
import MaterialTextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField'
import MaterialMenuItem from '@material-ui/core/MenuItem'
import { getIn, FormikProps, FieldInputProps } from 'formik'

interface ISelectOptionProps {
    label: string,
    value: string | number
}

export type ISelectProps = OutlinedTextFieldProps & {
    field: FieldInputProps<string>;
    form: FormikProps<any>;
    options: ISelectOptionProps[];
};

export const Select: React.FunctionComponent<ISelectProps> = (props: ISelectProps) => {
    const { label, field, form, options, ...other } = props;
    const { touched, errors, setFieldValue, setFieldTouched } = form;
    const errorText = getIn(errors, field.name);
    const touchedVal = getIn(touched, field.name);
    const hasError = touchedVal && errorText !== undefined

    return (
        <MaterialTextField
            select
            label={label}
            error={hasError}
            helperText={hasError ? errorText : ''}
            onBlur={() => setFieldTouched(field.name)}
            onChange={e => setFieldValue(field.name, e.target.value)}
            value={field.value}
            fullWidth={true}
            margin={'normal'}
            variant={'outlined'}
            {...other}
        >
            {
                options.map((item: ISelectOptionProps) => (
                    <MaterialMenuItem key={`select-${field.name}-${item.value}`} value={item.value}>
                        {item.label}
                    </MaterialMenuItem>
                ))
            }
        </MaterialTextField>
    );
}
