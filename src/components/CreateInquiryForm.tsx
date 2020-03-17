import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { CreateInquiryDto } from '../dto/CreateInquiryDto';
import { Inquiry } from '../entities/Inquiry';
import { sdk } from '../sdk';
import { TextField } from './Form/TextField';
import { Checkbox } from './Form/Checkbox';
import { SubmitButton } from './Form/SubmitButton';

export interface ICreateInquiryFormProps {
    onCreateSuccess: (inquiry: Inquiry) => void;
    onCreateError: () => void;
}

export interface ICreateInquiryForm {
    age: string;
    email: string;
    speciality: string;
    summary: string;
    terms: boolean;
    privacy: boolean;
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
        terms: false,
        privacy: false,
    };

    const validationSchema = yup.object().shape({
        age: yup.number()
            .required(t('register-form.error.required', { field: t('register-patient.fields.age') }))
            .positive(t('register-form.error.required', { field: t('register-patient.fields.age') })),
        email: yup.string().trim()
            .required(t('register-form.error.required', { field: t('register-patient.fields.email') }))
            .email(t('register-form.error.format', { field: t('register-patient.fields.email') })),
        speciality: yup.string(),
        summary: yup.string()
            .required(t('register-form.error.required', { field: t('register-patient.fields.summary') })),
        terms: yup.bool()
            .oneOf([true], t('register-form.error.accept'))
            .required(t('register-form.error.required', { field: t('register-patient.fields.terms') })),
        privacy: yup.bool()
            .oneOf([true], t('register-form.error.accept'))
            .required(t('register-form.error.required', { field: t('register-patient.fields.privacy') })),
    });

    const onSubmit = async (values: ICreateInquiryForm): Promise<void> => {
        const { age, email, speciality, summary, terms, privacy } = values;
        setLoading(true);
        sdk.inquiries.create(new CreateInquiryDto(
            age,
            email,
            speciality,
            summary,
            terms,
            privacy
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
                    <Field
                        name="terms"
                        label={(
                            <span dangerouslySetInnerHTML={{__html: t('register-doctor.fields.terms')}}/>
                        )}
                        component={Checkbox}
                    />
                    <Field
                        name="privacy"
                        label={(
                            <span dangerouslySetInnerHTML={{__html: t('register-doctor.fields.privacy')}}/>
                        )}
                        component={Checkbox}
                    />
                    <SubmitButton
                        label={t('register-form.submit')}
                        disabled={!formik.isValid || formik.isSubmitting || loading}
                    />
                </Form>
            )}
        </Formik>
    );
};
