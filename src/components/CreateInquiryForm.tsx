import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { TextField } from './Form/TextField';
import { sdk } from '../sdk';
import { CreateInquiryDto } from '../dto/CreateInquiryDto';
import { Inquiry } from '../entities/Inquiry';

export interface ICreateInquiryFormProps {
    onCreateSuccess: (inquiry: Inquiry) => void;
    onCreateError: () => void;
}

export interface ICreateInquiryForm {
    age: string;
    email: string;
    speciality: string;
    summary: string;
}

export const CreateInquiryForm: React.FunctionComponent<ICreateInquiryFormProps> = (
    props: ICreateInquiryFormProps
): JSX.Element => {
    const { onCreateError, onCreateSuccess } = props;
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const initialValues = {
        age: '',
        email: '',
        speciality: '',
        summary: '',
    };

    const validationSchema = yup.object().shape({
        age: yup.number()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.name') }))
            .positive(t('register-form.error.required', { field: t('register-patient.fields.age') })),
        email: yup.string().trim()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.email') }))
            .email(t('register-form.error.format', { field: t('register-doctor.fields.email') })),
        speciality: yup.string(),
        summary: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.license') }))
    });

    const onSubmit = async (values: ICreateInquiryForm): Promise<void> => {
        const { age, email, speciality, summary } = values;
        setLoading(true);
        sdk.inquiries.create(new CreateInquiryDto(
            age,
            email,
            speciality,
            summary
        )).then((inquiry: Inquiry) => {
            onCreateSuccess(inquiry);
        }).catch(() => {
            onCreateError();
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount={true}
        >
            {formik => (
                <Form>
                    <Field
                        name="age"
                        label={t('register-patient.fields.age')}
                        component={TextField}
                        type="number"
                    />
                    <Field
                        name="email"
                        label={t('register-patient.fields.email')}
                        component={TextField}
                    />
                    <Field
                        name="speciality"
                        label={t('register-patient.fields.speciality')}
                        component={TextField}
                    />
                    <Field
                        name="summary"
                        label={t('register-patient.fields.summary')}
                        placeholder={t('register-patient.fields.summary-placeholder')}
                        component={TextField}
                        multiline
                        rows="5"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting || loading}
                    >
                        {t('register-form.submit')}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};