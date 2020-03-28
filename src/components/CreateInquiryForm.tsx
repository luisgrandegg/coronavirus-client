import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { inquirySpecialities } from '../constants/specialities';
import { DoctorType } from '../entities/Doctor';
import { CreateInquiryDto } from '../dto/CreateInquiryDto';
import { Inquiry } from '../entities/Inquiry';
import { sdk } from '../sdk';
import { TextField } from './Form/TextField';
import { Select } from './Form/Select';
import { Checkbox } from './Form/Checkbox';
import { SubmitButton } from './Form/SubmitButton';

export interface ICreateInquiryFormProps {
    onCreateSuccess: (inquiry: Inquiry) => void;
    onCreateError: () => void;
}

export interface ICreateInquiryForm {
    age: string;
    email: string;
    confirmEmail: string;
    doctorType: string;
    speciality?: string;
    summary: string;
    terms: boolean;
    time?: string;
    privacy: boolean;
    confirmAge: boolean;
}

export const CreateInquiryForm: React.FunctionComponent<ICreateInquiryFormProps> = (
    props: ICreateInquiryFormProps
): JSX.Element => {
    const { onCreateError, onCreateSuccess } = props;
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const doctorTypes = [DoctorType.REGULAR, DoctorType.PSYCHOLOGIST].map(type => (
        {
            label: t(`register-citizen.doctor-type.${type}`),
            value: type
        }
    ));

    const initialValues = {
        age: '',
        email: '',
        confirmEmail: '',
        doctorType: '',
        speciality: '',
        summary: '',
        terms: false,
        time: '',
        privacy: false,
        confirmAge: false,
    };

    const validationSchema = yup.object().shape({
        age: yup.number()
            .required(t('register-form.error.required', { field: t('register-citizen.fields.age') }))
            .positive(t('register-form.error.required', { field: t('register-citizen.fields.age') })),
        email: yup.string().trim()
            .required(t('register-form.error.required', { field: t('register-citizen.fields.email') }))
            .email(t('register-form.error.format', { field: t('register-citizen.fields.email') })),
        confirmEmail: yup.string().trim()
            .required(t('register-form.error.required', { field: t('register-citizen.fields.email') }))
            .email(t('register-form.error.format', { field: t('register-citizen.fields.email') }))
            .oneOf([yup.ref('email')], t('register-form.error.confirm')),
        doctorType: yup.string()
            .required(t('register-form.error.required', { field: t('register-citizen.fields.inquiry-type') })),
        speciality: yup.string().when('doctorType', {
            is: DoctorType.REGULAR,
            then: yup.string().required(t('register-form.error.required', { field: t('register-citizen.fields.speciality') })),
            otherwise: yup.string()
        }),
        summary: yup.string()
            .required(t('register-form.error.required', { field: t('register-citizen.fields.summary') })),
        terms: yup.bool()
            .oneOf([true], t('register-form.error.accept'))
            .required(t('register-form.error.required', { field: t('register-citizen.fields.terms') })),
        time: yup.string().when('doctorType', {
            is: DoctorType.REGULAR,
            then: yup.string().required(t('register-form.error.required', { field: t('register-citizen.fields.time') })),
            otherwise: yup.string()
        }),
        privacy: yup.bool()
            .oneOf([true], t('register-form.error.accept'))
            .required(t('register-form.error.required', { field: t('register-citizen.fields.privacy') })),
        confirmAge: yup.bool()
            .oneOf([true], t('register-form.error.accept'))
            .required(t('register-form.error.required', { field: t('register-citizen.fields.confirm-age') })),
    });

    const onSubmit = async (values: ICreateInquiryForm): Promise<void> => {
        const { age, email, doctorType, speciality, summary, terms, time, privacy, confirmAge } = values;
        setLoading(true);
        sdk.inquiries.create(CreateInquiryDto.deserialize({
            age,
            email,
            doctorType,
            summary,
            terms,
            time,
            privacy,
            confirmAge,
            speciality
        })).then((inquiry: Inquiry) => {
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
                <Form className="register-form__section--form">
                    <header className="register-form__header">
                        <h3 className="register-form__header--title">{t('register-citizen.content.form-step1-header')}</h3>
                    </header>
                    <Field
                        className="register-form__form-control"
                        name="age"
                        label={t('register-citizen.fields.age')}
                        component={TextField}
                        type="number"
                    />
                    <Field
                        className="register-form__form-control"
                        name="email"
                        label={t('register-citizen.fields.email')}
                        component={TextField}
                    />
                    <Field
                        className="register-form__form-control"
                        name="confirmEmail"
                        label={t('register-citizen.fields.confirm-email')}
                        component={TextField}
                    />
                    <div className="register-form__header">
                        <h3 className="register-form__header--title">{t('register-citizen.content.form-step2-header')}</h3>
                        <p className="register-form__header--description">{t('register-citizen.content.form-step2-description')}</p>
                    </div>
                    <Field
                        className="register-form__form-control"
                        name="doctorType"
                        label={t('register-citizen.fields.doctor-type')}
                        component={Select}
                        options={doctorTypes}
                    />
                    {formik.values.doctorType === DoctorType.REGULAR ?
                        (
                            <>
                                <Field
                                    className="register-form__form-control"
                                    name="speciality"
                                    label={t('register-citizen.fields.speciality')}
                                    component={Select}
                                    options={inquirySpecialities}
                                />
                                <Field
                                    name="time"
                                    label={t('register-citizen.fields.time')}
                                    component={TextField}
                                />
                            </>
                        ) : (
                            null
                        )
                    }
                    {formik.values.doctorType !== '' ?
                        (
                            <>
                                <Field
                                    className="register-form__form-control"
                                    name="summary"
                                    label={t('register-citizen.fields.summary')}
                                    placeholder={t(`register-citizen.fields.summary-placeholder-${formik.values.doctorType}`)}
                                    component={TextField}
                                    multiline
                                    rows="5"
                                />
                                <Field
                                    className="register-form__form-control"
                                    name="privacy"
                                    label={(
                                        <span dangerouslySetInnerHTML={{ __html: t('register-citizen.fields.privacy') }} />
                                    )}
                                    component={Checkbox}
                                />
                                <Field
                                    className="register-form__form-control"
                                    name="terms"
                                    label={(
                                        <span dangerouslySetInnerHTML={{ __html: t('register-citizen.fields.terms') }} />
                                    )}
                                    component={Checkbox}
                                />
                                <Field
                                    className="register-form__form-control"
                                    name="confirmAge"
                                    label={(
                                        <span dangerouslySetInnerHTML={{ __html: t('register-citizen.fields.confirm-age') }} />
                                    )}
                                    component={Checkbox}
                                />
                                <SubmitButton
                                    label={t('register-citizen.fields.submit')}
                                    disabled={!formik.isValid || formik.isSubmitting || loading}
                                />
                            </>
                        ) : (
                            null
                        )
                    }
                </Form>
            )}
        </Formik>
    );
};
