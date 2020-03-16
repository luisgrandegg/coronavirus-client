import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { sdk } from '../sdk';
import { login } from '../store/actions/status';
import { Auth } from '../entities/Auth';
import { TextField } from './Form';

export interface ILoginFormProps {
    onLoginError: () => void,
    onLoginSuccess: (auth: Auth) => void,
}

export interface ILoginForm {
    email: string;
    password: string;
}

export const LoginForm: React.FunctionComponent<ILoginFormProps> = (
    props: ILoginFormProps
): JSX.Element => {
    const { onLoginError, onLoginSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = yup.object().shape({
        email: yup.string().trim()
            .required(t('login-form.error.required', { field: t('login-form.fields.email') }))
            .email(t('login-form.error.format', { field: t('login-form.fields.email') })),
        password: yup.string()
            .required(t('login-form.error.required', { field: t('login-form.fields.password') })),
    });

    const onSubmit = async (values: ILoginForm): Promise<void> => {
        const { email, password } = values;
        setLoading(true);
        sdk.login(
            email,
            password
        ).then((auth: Auth) => {
            dispatch(login(auth));
            onLoginSuccess(auth);
        }).catch(() => {
            onLoginError();
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
                        name="email"
                        label={t('login-form.fields.email')}
                        component={TextField}
                    />
                    <Field
                        name="password"
                        label={t('login-form.fields.password')}
                        component={TextField}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting || loading}
                    >
                        {t('login-form.submit')}
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
