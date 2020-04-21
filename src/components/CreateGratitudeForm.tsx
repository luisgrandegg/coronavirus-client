import { Button } from '@material-ui/core';
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
import { ImageUpload, IImageUploadResult } from './ImageUpload';
import { Image } from './Image';
import { GratitudeCard } from './GratitudeCard';

export interface ICreateGratitudeFormProps {
    onCreateSuccess: (gratitude: Gratitude) => void;
    onCreateError?: () => void;
}

export interface ICreateGratitudeForm {
    message: string;
    name: string;
}

export const CreateGratitudeForm: React.FunctionComponent<ICreateGratitudeFormProps> = (
    props: ICreateGratitudeFormProps
): JSX.Element => {
    const { onCreateError, onCreateSuccess } = props;
    const { t } = useTranslation();
    const [previewMode, setPreviewMode] = useState<boolean>(false);
    const [gratitude, setGratitude] = useState<CreateGratitudeDto | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [imageUploadResult, setImageUploadResult] = useState<IImageUploadResult| null>(null);

    const initialValues = {
        message: gratitude?.message ||'',
        name: gratitude?.name ||''
    };

    const validationSchema = yup.object().shape({
        message: yup.string()
            .required(t('create-gratitude-form.error.required'))
            .max(300, t('create-gratitude-form.error.max-length', { maxCharacters: 300 })),
        name: yup.string()
            .required(t('create-gratitude-form.error.required'))
    });

    const onSubmit = async (values: ICreateGratitudeForm): Promise<void> => {
        const { message, name } = values;
        setPreviewMode(true);
        setGratitude(CreateGratitudeDto.deserialize({
            message,
            name,
            imagePublicId: imageUploadResult?.publicId,
            imagePublicUrl: imageUploadResult?.publicUrl
        }));
    };

    const publish = async (): Promise<void> => {
        setLoading(true);
        gratitude && sdk.gratitudes.create(gratitude).then((gratitude: Gratitude) => {
            onCreateSuccess(gratitude);
        }).catch(() => {
            onCreateError && onCreateError();
        }).finally(() => {
            setLoading(false);
        });
    }

    const edit = () => { setPreviewMode(false); };

    const onImageUpload = (result: IImageUploadResult) => {
        setImageUploadResult(result);
    };

    const removePicture = (): void => { setImageUploadResult(null); };

    const renderPreview = (): JSX.Element => (
        <div className="create-gratitude-form__preview">
            {gratitude && <GratitudeCard gratitude={Gratitude.createFromResponse({ ...gratitude, id: '', createdAt: new Date().toISOString() })}/>}
            <div className="button-group">
                <Button
                    color="primary"
                    onClick={publish}
                    variant="contained"
                >
                    {t('create-gratitude-form.fields.publish')}
                </Button>
                <Button
                    color="secondary"
                    onClick={edit}
                    variant="contained"
                >
                    {t('create-gratitude-form.fields.edit')}
                </Button>
            </div>
        </div>
    );

    const renderImage = (): JSX.Element => (
        <>
            {imageUploadResult && <figure><Image imagePublicId={imageUploadResult.publicId}/></figure>}
            <Button
                color="secondary"
                onClick={removePicture}
                variant="contained"
            >
                {t('create-gratitude-form.fields.remove-photo')}
            </Button>
        </>
    );

    const renderForm = (): JSX.Element => (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount={true}
        >
            {formik => (
                <Form
                    className="register-form__section--form"
                    id={SkipNavIds.FORM_GRATITUDE}
                    style={{ marginTop: 0 }}
                >
                    <Field
                        className="register-form__form-control"
                        name="message"
                        label={t('create-gratitude-form.fields.message')}
                        helperText={t('create-gratitude-form.helper.message', { chars: formik.values.message.length, maxChars: 300})}
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
                    {false && <div className="create-gratitude-form__picture">
                        {!imageUploadResult && <ImageUpload onImageUpload={onImageUpload}/>}
                        {imageUploadResult && renderImage()}
                    </div>}
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <SubmitButton
                            label={t('create-gratitude-form.fields.submit')}
                            disabled={!formik.isValid || formik.isSubmitting || loading}
                            limitWidth={false}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );

    return (previewMode && gratitude) ? renderPreview() : renderForm();
};
