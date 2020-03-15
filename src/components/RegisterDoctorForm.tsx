import { Button, FormControl, TextField } from '@material-ui/core';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { sdk } from '../sdk';
import { Auth } from '../entities/Auth';
import { login } from '../store/actions/status';
import { useDispatch } from 'react-redux';
import { RegisterDoctorDto } from '../dto/RegisterDoctorDto';

export interface IRegisterDoctorFormProps {
    onRegisterSuccess: (auth: Auth) => void;
    onRegisterError: () => void;
}

export const RegisterDoctorForm: React.FunctionComponent<IRegisterDoctorFormProps> = (
    props: IRegisterDoctorFormProps
): JSX.Element => {
    const { onRegisterError, onRegisterSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    return (
        <p>Uncomment the code pls</p>
    );
    // const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    //     event.preventDefault();
    //     setLoading(true);
    //     sdk.registerDoctor(new RegisterDoctorDto(
    //         name,
    //         surname,
    //         speciality,
    //         license,
    //         email,
    //         phone,
    //         password,
    //         confirmPassword
    //     ))
    //         .then((auth: Auth) => {
    //             dispatch(login(auth));
    //             onRegisterSuccess(auth);
    //         })
    //         .catch(() => {
    //             onRegisterError();
    //             setError('Register error');
    //             setLoading(false);
    //         });
    // };

    // return (
    //     <Formik
    //         initialValues={initialValues}
    //         onSubmit={onSubmit}
    //         validationSchema={validationSchema}
    //     >
    //         {(props) => {
    //             return (
    //                 <form className="register-form" noValidate autoComplete="off" onSubmit={onSubmit}>
    //                     <FormControl fullWidth={true}>
    //                         <TextField label={t('register-doctor.fields.name')} onChange={onInputChange(setName)} variant="outlined"/>
    //                     </FormControl>
    //                     <FormControl fullWidth={true}>
    //                         <TextField label={t('register-doctor.fields.surname')} onChange={onInputChange(setSurname)} variant="outlined"/>
    //                     </FormControl>
    //                     <FormControl fullWidth={true}>
    //                         <TextField label={t('register-doctor.fields.speciality')} onChange={onInputChange(setSpeciality)} variant="outlined"/>
    //                     </FormControl>
    //                     <FormControl fullWidth={true}>
    //                         <TextField label={t('register-doctor.fields.license')} onChange={onInputChange(setLicense)} variant="outlined"/>
    //                     </FormControl>
    //                     <FormControl fullWidth={true}>
    //                         <TextField label={t('register-doctor.fields.email')} onChange={onInputChange(setEmail)} variant="outlined"/>
    //                     </FormControl>
    //                     <FormControl fullWidth={true}>
    //                         <TextField label={t('register-doctor.fields.phone')} onChange={onInputChange(setPhone)} variant="outlined"/>
    //                     </FormControl>
    //                     <FormControl fullWidth={true}>
    //                         <TextField label={t('register-doctor.fields.password')} onChange={onInputChange(setPassword)} variant="outlined"/>
    //                     </FormControl>
    //                     <FormControl fullWidth={true}>
    //                         <TextField label={t('register-doctor.fields.confirm-password')} onChange={onInputChange(setConfirmPassword)} variant="outlined"/>
    //                     </FormControl>
    //                     <Button
    //                         variant="contained"
    //                         color="primary"
    //                         type="submit"
    //                         disabled={loading}
    //                     >{t('register-form.submit')}</Button>
    //                 </form>
    //             );
    //         }}
    //     </Formik>
    // );
};
