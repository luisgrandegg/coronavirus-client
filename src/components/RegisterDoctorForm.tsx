import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import specialities from '../constants/specialities';
import { Auth } from '../entities/Auth';
import { RegisterDoctorDto } from '../dto/RegisterDoctorDto';
import { sdk } from '../sdk';
import { TextField } from './Form/TextField';
import { Select } from './Form/Select';
import { Checkbox } from './Form/Checkbox';
import { SubmitButton } from './Form/SubmitButton';
import { DoctorType } from '../entities/Doctor';

export interface IRegisterDoctorFormProps {
    onRegisterSuccess: (auth: Auth) => void;
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
    terms: boolean;
    privacy: boolean;
}

export const RegisterDoctorForm: React.FunctionComponent<IRegisterDoctorFormProps> = (
    props: IRegisterDoctorFormProps
): JSX.Element => {
    const [error, setError] = useState<string | null>(null);
    const { onRegisterSuccess } = props;
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
        terms: false,
        privacy: false,
    };

    const validationSchema = yup.object().shape({
        firstName: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.name') })),
        surname: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.surname') })),
        speciality: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.speciality') })),
        license: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.license') }))
            .min(9, t('register-form.error.length', { length: 9 })),
        email: yup.string().trim()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.email') }))
            .email(t('register-form.error.format', { field: t('register-doctor.fields.email') })),
        phone: yup.string().trim()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.phone') })),
        password: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.password') }))
            .min(6, t('register-form.error.length', { length: 6 })),
        confirmPassword: yup.string()
            .required(t('register-form.error.required', { field: t('register-doctor.fields.confirm-password') }))
            .oneOf([yup.ref('password')], t('register-form.error.confirm')),
        terms: yup.bool()
            .oneOf([true], t('register-form.error.accept'))
            .required(t('register-form.error.required', { field: t('register-doctor.fields.terms') })),
        privacy: yup.bool()
            .oneOf([true], t('register-form.error.accept'))
            .required(t('register-form.error.required', { field: t('register-doctor.fields.privacy') })),
    });

    const onSubmit = async (values: IRegisterDoctorForm): Promise<void> => {
        const { firstName, surname, speciality, license, email, phone, password, confirmPassword, terms, privacy } = values;
        setLoading(true);
        sdk.registerDoctor(new RegisterDoctorDto(
            firstName,
            surname,
            speciality,
            license,
            email,
            phone,
            password,
            confirmPassword,
            terms,
            privacy,
            DoctorType.REGULAR
        )).then((auth: Auth) => {
            onRegisterSuccess(auth);
        }).catch(() => {
            setError(t('register-form.error.invalid'));
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
                        component={Select}
                        options={specialities}
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
                    {error && <p style={{color: '#f44336'}}>{error}</p>}
                    <Field
                        name="phone"
                        label={t('register-doctor.fields.phone')}
                        component={TextField}
                    />
                    <Field
                        name="password"
                        label={t('register-doctor.fields.password')}
                        component={TextField}
                        type="password"
                    />
                    <Field
                        name="confirmPassword"
                        label={t('register-doctor.fields.confirm-password')}
                        component={TextField}
                        type="password"
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
