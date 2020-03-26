import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { SubmitButton } from './Form';
import { sdk } from '../sdk';
import { TextField } from './Form/TextField';
import { Doctor } from '../entities/Doctor';
import { useTranslation } from 'react-i18next';

export interface IDoctorCommentForm {
    comment: string;
}

export interface IDoctorCommentProps {
    doctor: Doctor;
    onSave: (comment: string) => void;
}

export const DoctorComment: React.FunctionComponent<IDoctorCommentProps> = (
    props: IDoctorCommentProps
): JSX.Element => {
    const { doctor } = props;
    const [editMode, setEditMode] = useState<boolean>(false);
    const { t } = useTranslation();

    const toggleEditMode = (): void => {
        setEditMode(!editMode);
    }

    const onSubmit = async (values: IDoctorCommentForm): Promise<void> => {
        sdk.doctors.comment(doctor.id, values.comment);
        props.onSave(values.comment);
        toggleEditMode();
    }

    const initialValues: IDoctorCommentForm = {
        comment: doctor.comment || ''
    };

    const renderDoctorComment = (): React.ReactNode => {
        return (
            <>
                <Button
                    variant="contained"
                    onClick={toggleEditMode}
                    type="button"
                >{doctor.comment ? t('doctor.see-comments') : t('doctor.add-comments')}</Button>
            </>
        );
    }

    const renderDoctorCommentForm = (): React.ReactNode => {
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validateOnMount={true}
            >
                {formik => (
                    <Form>
                        <Field
                            name="comment"
                            label={t('doctor.comment.label')}
                            component={TextField}
                            multiline
                            rows="5"
                        />
                        <div className="button-group">
                            <SubmitButton
                                label={t('doctor.comment.save')}
                                disabled={!formik.isValid || formik.isSubmitting}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={toggleEditMode}
                            >{t('doctor.comment.close')}</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }

    return (
        <div className="doctor-comment">
            {editMode ? renderDoctorCommentForm() : renderDoctorComment()}
        </div>
    )
};
