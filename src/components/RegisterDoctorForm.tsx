import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { Auth } from '../entities/Auth';
import { RegisterDoctorDto } from '../dto/RegisterDoctorDto';
import { sdk } from '../sdk';
import { TextField } from './Form/TextField';

export interface IRegisterDoctorFormProps {
    onRegisterSuccess: (auth: Auth) => void;
    onRegisterError: () => void;
}

export interface IRegisterDoctorForm {
    firstName: string;
    surname: string;
    speciality: string;
    license: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export const RegisterDoctorForm: React.FunctionComponent<IRegisterDoctorFormProps> = (
    props: IRegisterDoctorFormProps
): JSX.Element => {
    const { onRegisterError, onRegisterSuccess } = props;
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const initialValues = {
        firstName: '',
        surname: '',
        speciality: '',
        license: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = yup.object().shape({
        firstName: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.name') })),
        surname: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.surname') })),
        speciality: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.speciality') })),
        license: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.license') })),
        email: yup.string().trim()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.email') }))
            .email(t('register-form.error.format', { field: t('register-doctor.fields.email') })),
        phone: yup.string().trim()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.phone') })),
        password: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.password') })),
        confirmPassword: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.confirm-password') })),
    });

    const onSubmit = async (values: IRegisterDoctorForm): Promise<void> => {
        const { firstName, surname, speciality, license, email, phone, password, confirmPassword } = values;
        setLoading(true);
        sdk.registerDoctor(new RegisterDoctorDto(
            firstName,
            surname,
            speciality,
            license,
            email,
            phone,
            password,
            confirmPassword
        )).then((auth: Auth) => {
            onRegisterSuccess(auth);
        }).catch(() => {
            onRegisterError();
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
                        name="firstName"
                        label={t('register-doctor.fields.name')}
                        component={TextField}
                    />
                    <Field
                        name="surname"
                        label={t('register-doctor.fields.surname')}
                        component={TextField}
                    />
                    <Field
                        name="speciality"
                        label={t('register-doctor.fields.speciality')}
                        component={TextField}
                    />
                    <Field
                        name="license"
                        label={t('register-doctor.fields.license')}
                        component={TextField}
                    />
                    <Field
                        name="email"
                        label={t('register-doctor.fields.email')}
                        component={TextField}
                    />
                    <Field
                        name="phone"
                        label={t('register-doctor.fields.phone')}
                        component={TextField}
                    />
                    <Field
                        name="password"
                        label={t('register-doctor.fields.password')}
                        component={TextField}
                    />
                    <Field
                        name="confirmPassword"
                        label={t('register-doctor.fields.confirm-password')}
                        component={TextField}
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
