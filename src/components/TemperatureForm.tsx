import React, { useState } from 'react';

import { Button } from './Button';
import { sdk } from '../sdk';
import { Temperature } from '../entities/Temperature';

export interface ITemperatureFormProps {
    onCreateTemperatureError: () => void,
    onCreateTemperatureValidation: (isValid: boolean) => void,
    onCreateTemperatureSuccess: (temperature: Temperature) => void,
}

export const TemperatureForm: React.FunctionComponent<ITemperatureFormProps> = (
    props: ITemperatureFormProps
): JSX.Element => {
    const { onCreateTemperatureError, onCreateTemperatureSuccess } = props;
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [measure, setMeasure] = useState('');

    const onInputChange = (
        stateSetter: (state: string) => void
    ): (event: React.ChangeEvent<HTMLInputElement>) => void =>
        (event: React.ChangeEvent<HTMLInputElement>): void => stateSetter(event.currentTarget.value);

    const onTemperatureSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setLoading(true);
        sdk.users.createTemperature(parseFloat(measure))
            .then((temperature: Temperature) => {
                onCreateTemperatureSuccess(temperature);
                setError(null);
                setLoading(false);
            })
            .catch(() => {
                onCreateTemperatureError();
                setError('Temperature error');
                setLoading(false);
            });
    }

    return (
        <form className="temperature-form" onSubmit={onTemperatureSubmit}>
            <div className="form-group">
                <label htmlFor="temperatureFormMeasure"/>
                <input type="number" step="0.1" name="measure" id="temperatureFormMeasure" onChange={onInputChange(setMeasure)}/>
            </div>
            {error && <p>{error}</p>}
            <Button type="submit" disabled={loading}>Submit temperature</Button>
        </form>
    )
}
