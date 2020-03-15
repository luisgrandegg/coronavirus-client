import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, ButtonColor } from './Button/Button';
import { sdk } from '../sdk';
import { login } from '../store/actions/status';
import { Auth } from '../entities/Auth';
import { UserType } from '../entities/User';

export interface IRegisterFormProps {
    onRegisterError: () => void;
    onRegisterValidation: () => void;
    onRegisterSuccess: (auth: Auth) => void;
    userType: UserType;
}

export const RegisterForm: React.FunctionComponent<IRegisterFormProps> = (
    props: IRegisterFormProps
): JSX.Element => {
    const { onRegisterError, onRegisterSuccess, userType } = props;
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onInputChange = (
        stateSetter: (state: string) => void
    ): (event: React.ChangeEvent<HTMLInputElement>) => void =>
        (event: React.ChangeEvent<HTMLInputElement>): void => stateSetter(event.currentTarget.value);

    const onRegisterSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setLoading(true);
        sdk.register(username, password, userType)
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
        <form className="login-form" onSubmit={onRegisterSubmit}>
            <div className="form-group">
                <label htmlFor="loginFormUsername"/>
                <input type="text" name="username" id="loginFormUsername" onChange={onInputChange(setUsername)}/>
            </div>
            <div className="form-group">
                <label htmlFor="loginFormPassword"/>
                <input type="password" name="password" id="loginFormPassword" onChange={onInputChange(setPassword)}/>
            </div>
            {error && <p>{error}</p>}
            <Button color={ButtonColor.PRIMARY} type="submit" disabled={loading}>Register</Button>
        </form>
    )
}
