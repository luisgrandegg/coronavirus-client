import { Formik, Form, Field, FormikProps, FieldInputProps } from 'formik'
import { Close } from '@material-ui/icons';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import * as yup from 'yup';

import { Checkbox } from './Form/Checkbox';

export interface IFieldProps {
    field: FieldInputProps<string[]>;
    form: FormikProps<any>
}

export interface IOption {
    label: string;
    value: string;
};

export interface IMultipleOptionsFilter {
    options: string[];
}

function useMultipleOptionsFilter(
    title: string,
    applyButton: string,
    defaultSelectedOptions: string[],
    options: IOption[],
): [string[], () => JSX.Element, (newSelectedOptions: string[]) => void] {
    const [selectedOptions, updateSelectedOptions] = useState(defaultSelectedOptions);
    const [open, setOpen] = useState(false);

    const initialValues = {
        options: selectedOptions,
    };

    const validationSchema = yup.object().shape({
        options: yup.array(),
    });

    const chunk = (items: IOption[], size: number) => {
        let groups = [];
        let itemsPerGroup = Math.ceil(items.length / size);

        for (let i = 0; i < size; i++) {
            groups.push(items.slice(i * itemsPerGroup, (i + 1) * itemsPerGroup));
        }

        return groups;
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (option: string): void => {
        const set = new Set(selectedOptions);
        set.delete(option);
        updateSelectedOptions(Array.from(set));
    };

    const onSubmit = (values: IMultipleOptionsFilter): void => {
        const { options } = values;
        updateSelectedOptions(options);
        setOpen(false);
    };

    const MultipleOptionsFilter = () => (
        <div className="multiple-options-filter">
            <Button
                className="multiple-options-filter__open-button"
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >{applyButton}</Button>
            <div className="multiple-options-filter__list">
                {options
                    .filter(option => selectedOptions.includes(option.value))
                    .map(option => (
                        <Chip
                            className="multiple-options-filter__list-item"
                            key={`selected-option-${option.value}`}
                            label={option.label}
                            onDelete={() => handleDelete(option.value)} color="primary" />
                    ))}
            </div>
            <Dialog
                className="multiple-options-filter__dialog"
                fullWidth={true}
                maxWidth="md"
                open={open}
                onClose={handleClose}
                aria-labelledby="multiple-options-filter__dialog"
            >
                <div className="multiple-options-filter__dialog-header">
                    <h1 className="multiple-options-filter__dialog-header-title">Cita Médica en Casa</h1>
                </div>
                <DialogTitle id="multiple-options-filter__dialog">
                    <span >{title}</span>
                    <IconButton
                        className="multiple-options-filter__dialog-close-button"
                        onClick={handleClose}>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        validateOnMount={true}
                    >
                        <Form
                            id="multiple-options-filter__form"
                            className="multiple-options-filter__form">
                            {chunk(options, 3).map((group, index) => (
                                <div
                                    key={`multiple-options-filter__form-group-${index}`}
                                    className="multiple-options-filter__form-group">
                                    {group.map(option => (
                                        <Field
                                            key={`option--${option.value}`}
                                            name="options">
                                            {({ field, form }: IFieldProps) => (
                                                <Checkbox
                                                    label={option.label}
                                                    checked={field.value.includes(option.value)}
                                                    field={field}
                                                    form={form}
                                                    onChange={(event: React.ChangeEvent<any>) => {
                                                        event.target.value = option.value;
                                                        field.onChange(field.name)(event);
                                                        form.setFieldTouched(field.name, true);
                                                    }}
                                                />
                                            )}
                                        </Field>
                                    ))}
                                </div>
                            ))}
                        </Form>
                    </Formik>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        form="multiple-options-filter__form"
                    >{applyButton}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    return [selectedOptions, MultipleOptionsFilter, updateSelectedOptions];
};


export default useMultipleOptionsFilter;
