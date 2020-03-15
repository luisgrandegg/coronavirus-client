import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, ButtonColor } from './Button/Button';
import { sdk } from '../sdk';
import { login } from '../store/actions/status';
import { Auth } from '../entities/Auth';

export interface ILoginFormProps {
    onLoginError: () => void,
    onLoginValidation: () => void,
    onLoginSuccess: (auth: Auth) => void,
}

export const LoginForm: React.FunctionComponent<ILoginFormProps> = (
    props: ILoginFormProps
): JSX.Element => {
    const { onLoginError, onLoginSuccess } = props;
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onInputChange = (
        stateSetter: (state: string) => void
    ): (event: React.ChangeEvent<HTMLInputElement>) => void =>
        (event: React.ChangeEvent<HTMLInputElement>): void => stateSetter(event.currentTarget.value);

    const onLoginSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setLoading(true);
        sdk.login(username, password)
            .then((auth: Auth) => {
                dispatch(login(auth));
                onLoginSuccess(auth);
            })
            .catch(() => {
                onLoginError();
                setError('Login error');
                setLoading(false);
            });
    }

    return (
        <form className="login-form" onSubmit={onLoginSubmit}>
            <div className="form-group">
                <label htmlFor="loginFormUsername"/>
                <input type="text" name="username" id="loginFormUsername" onChange={onInputChange(setUsername)}/>
            </div>
            <div className="form-group">
                <label htmlFor="loginFormPassword"/>
                <input type="password" name="password" id="loginFormPassword" onChange={onInputChange(setPassword)}/>
            </div>
            {error && <p>{error}</p>}
            <Button color={ButtonColor.PRIMARY} type="submit" disabled={loading}>Login</Button>
        </form>
    )
}
