import { Button, FormControl, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { sdk } from '../sdk';
import { Auth } from '../entities/Auth';
import { login } from '../store/actions/status';
import { useDispatch } from 'react-redux';
import { RegisterPatientDto } from '../dto/RegisterPatientDto';

export interface IRegisterPatientFormProps {
    onRegisterSuccess: (auth: Auth) => void;
    onRegisterError: () => void;
}

export const RegisterPatientForm: React.FunctionComponent<IRegisterPatientFormProps> = (
    props: IRegisterPatientFormProps
): JSX.Element => {
    const { onRegisterError, onRegisterSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [license, setLicense] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onInputChange = (
        stateSetter: (state: string) => void
    ): (event: React.ChangeEvent<HTMLInputElement>) => void =>
        (event: React.ChangeEvent<HTMLInputElement>): void => stateSetter(event.currentTarget.value);

        const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
            event.preventDefault();
            setLoading(true);
            sdk.registerPatient(new RegisterPatientDto(
                name,
                surname,
                speciality,
                license,
                email,
                phone,
                password,
                confirmPassword
            ))
                .then((auth: Auth) => {
                    dispatch(login(auth));
                    onRegisterSuccess(auth);
                })
                .catch(() => {
                    onRegisterError();
                    setError('Register error');
                    setLoading(false);
                });
        }

    return (
        <form className="register-form" noValidate autoComplete="off" onSubmit={onSubmit}>
            <FormControl fullWidth={true}>
                <TextField label={t('register-doctor.fields.name')} onChange={onInputChange(setName)} variant="outlined"/>
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField label={t('register-doctor.fields.surname')} onChange={onInputChange(setSurname)} variant="outlined"/>
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField label={t('register-doctor.fields.speciality')} onChange={onInputChange(setSpeciality)} variant="outlined"/>
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField label={t('register-doctor.fields.license')} onChange={onInputChange(setLicense)} variant="outlined"/>
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField label={t('register-doctor.fields.email')} onChange={onInputChange(setEmail)} variant="outlined"/>
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField label={t('register-doctor.fields.phone')} onChange={onInputChange(setPhone)} variant="outlined"/>
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField label={t('register-doctor.fields.password')} onChange={onInputChange(setPassword)} variant="outlined"/>
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField label={t('register-doctor.fields.confirm-password')} onChange={onInputChange(setConfirmPassword)} variant="outlined"/>
            </FormControl>
            {error && <p>{error}</p>}
            <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
            >{t('register-form.submit')}</Button>
        </form>
    );
};
