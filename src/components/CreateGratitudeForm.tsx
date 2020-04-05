import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { CreateGratitudeDto } from '../dto/CreateGratitudeDto';
import { Gratitude } from '../entities/Gratitude';
import { sdk } from '../sdk';
import { TextField } from './Form/TextField';
import { SubmitButton } from './Form/SubmitButton';
import { SkipNavIds } from './SkipNav';

export interface ICreateGratitudeFormProps {
    onCreateSuccess: (gratitude: Gratitude) => void;
    onCreateError?: () => void;
}

export interface ICreateGratitudeForm {
    title: string;
    message: string;
    name: string;
}

export const CreateGratitudeForm: React.FunctionComponent<ICreateGratitudeFormProps> = (
    props: ICreateGratitudeFormProps
): JSX.Element => {
    const { onCreateError, onCreateSuccess } = props;
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const initialValues = {
        title: '',
        message: '',
        name: ''
    };

    const validationSchema = yup.object().shape({
        title: yup.string()
            .required(t('create-gratitude-form.error.required')),
        message: yup.string()
            .required(t('create-gratitude-form.error.required'))
            .max(300, t('create-gratitude-form.error.max-length', { maxCharacters: 300 })),
        name: yup.string()
            .required(t('create-gratitude-form.error.required'))
    });

    const onSubmit = async (values: ICreateGratitudeForm): Promise<void> => {
        const { title, message, name } = values;
        setLoading(true);
        sdk.gratitudes.create(CreateGratitudeDto.deserialize({
            title,
            message,
            name
        })).then((gratitude: Gratitude) => {
            onCreateSuccess(gratitude);
        }).catch(() => {
            onCreateError && onCreateError();
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
                <Form className="register-form__section--form" id={SkipNavIds.FORM_GRATITUDE}>
                    <Field
                        className="register-form__form-control"
                        name="title"
                        label={t('create-gratitude-form.fields.title')}
                        component={TextField}
                    />
                    <Field
                        className="register-form__form-control"
                        name="message"
                        label={t('create-gratitude-form.fields.message')}
                        placeholder={t('create-gratitude-form.fields.summary-placeholder')}
                        component={TextField}
                        multiline
                        rows="5"
                    />
                    <Field
                        className="register-form__form-control"
                        name="name"
                        label={t('create-gratitude-form.fields.name')}
                        component={TextField}
                    />
                    <SubmitButton
                        label={t('create-gratitude-form.fields.submit')}
                        disabled={!formik.isValid || formik.isSubmitting || loading}
                    />
                </Form>
            )}
        </Formik>
    );
};
